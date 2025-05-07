import { Component } from "@angular/core";
import { AuthService } from "../services/auth.service";

@Component({
	selector: "app-create-user",
	templateUrl: "./create-user.component.html",
	styleUrls: ["./create-user.component.css"],
})
export class CreateUserComponent {
	email: string = "";
	name: string = "";
	password: string = "";
	role: "librarian" | "member" = "member";
	message: string = "";
	constructor(private authService: AuthService) {}
	onSubmit() {
		const res = this.authService.createUser(
			this.name,
			this.email,
			this.password,
			this.role,
		);
		if (res) {
			this.name = "";
			this.email = "";
			this.password = "";
			this.role = "member";
			this.message = "User created successfully";
		} else {
			this.message = "User already exists";
		}
	}
}
