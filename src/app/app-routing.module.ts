import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BookFormComponent } from "./components/book-form/book-form.component";
import { BookListComponent } from "./components/book-list/book-list.component";
import { BooksComponent } from "./components/books/books.component";
import { LoginComponent } from "./components/login/login.component";
import { CreateUserComponent } from "./create-user/create-user.component";
import { AdminGuard } from "./gurads/admin.guard";
import { AuthGuard } from "./gurads/auth.guard";

const routes: Routes = [
	{
		path: "login",
		component: LoginComponent,
	},
	{
		path: "book-form",
		component: BookFormComponent,
		canActivate: [AdminGuard],
	},
	{
		path: "book-form/:isbn/edit",
		component: BookFormComponent,
		canActivate: [AdminGuard],
	},
	{
		path: "books",
		component: BooksComponent,
		canActivate: [AuthGuard],
	},
	{
		path: "",
		redirectTo: "login",
		pathMatch: "full",
	},
	{
		path: "book-list",
		component: BookListComponent,
		canActivate: [AuthGuard],
	},
	{
		path: "create-user",
		component: CreateUserComponent,
		canActivate: [AdminGuard],
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
