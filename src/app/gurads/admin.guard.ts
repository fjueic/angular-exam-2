import { Injectable } from "@angular/core";
import {
	ActivatedRouteSnapshot,
	CanActivate,
	RouterStateSnapshot,
	UrlTree,
} from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "../services/auth.service";

@Injectable({
	providedIn: "root",
})
export class AdminGuard implements CanActivate {
	constructor(private authService: AuthService) {}
	canActivate() {
		return (
			this.authService.isLoggedIn() &&
			this.authService.getUserRole() === "librarian"
		);
	}
}
