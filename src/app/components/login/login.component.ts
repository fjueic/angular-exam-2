import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";

@Component({
	selector: "app-login",
	templateUrl: "./login.component.html",
	styleUrls: ["./login.component.css"],
})
export class LoginComponent {
	email: string = "";
	pass: string = "";
	message: string = "";

	constructor(
		private authService: AuthService,
		private router: Router,
		private route: ActivatedRoute,
	) {
		if (this.authService.isLoggedIn()) {
			this.router.navigate(["book-list"]);
		}
	}

	onSubmit() {
		if (this.authService.login(this.email, this.pass)) {
			this.router.navigate(["/"]);
		} else {
			this.message = "Wrong email or password";
		}
	}
}
