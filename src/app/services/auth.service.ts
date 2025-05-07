import { Injectable } from "@angular/core";
import { forEachChild } from "typescript";
import { Role, User } from "../models/type";

@Injectable({
	providedIn: "root",
})
export class AuthService {
	private userKey = "libraryUser";
	private token = "token";
	getAllUsers(): User[] {
		const userListData = localStorage.getItem(this.userKey);
    console.log(userListData)
		let userList: User[];
		if (userListData) {
			userList = JSON.parse(userListData) as User[];
		} else {
			userList = [
				{
					name: "admin",
					pass: "admin123",
					email: "admin@gmail.com",
					role: "librarian",
				},
			];
		}
		return userList;
	}
	login(email: string, pass: string): boolean {
		const userList = this.getAllUsers();
		console.log(userList);
		const user: User | undefined = userList.filter(
			(user) => user.email === email && user.pass === pass,
		)[0];
		console.log(email, pass);
		if (user) {
			localStorage.setItem(this.token, JSON.stringify({ role: user.role }));
			return true;
		} else {
			return false;
		}
	}
	createUser(name: string, email: string, pass: string, role: Role): boolean {
		if (this.getUserRole() === "librarian") {
			const userList: User[] = this.getAllUsers();
			const user: User | undefined = userList.filter(
				(user) => user.email === email,
			)[0];
			if (user) {
				return false;
			} else {
				userList.push({ name, email, pass, role });
				localStorage.setItem(this.userKey, JSON.stringify({ userList }));
				return true;
			}
		}
		return false;
	}
	logout() {
		localStorage.removeItem(this.token);
	}

	getUserRole(): Role | null {
		const user = localStorage.getItem(this.token);
		return user ? JSON.parse(user).role : null;
	}

	isLoggedIn(): boolean {
		return this.getUserRole() !== null;
	}

	constructor() {}
}
