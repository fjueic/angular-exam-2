import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../services/auth.service";

@Component({
	selector: "app-navbar",
	templateUrl: "./navbar.component.html",
	styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent {
	constructor(
		private authService: AuthService,
		private router: Router,
	) {}
	logout() {
		this.authService.logout();
	}
	login() {
		this.router.navigate(["/login"]);
	}
	isLoggedIn(): boolean {
		return this.authService.isLoggedIn();
	}
}
