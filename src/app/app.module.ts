import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./components/login/login.component";
import { BookFormComponent } from "./components/book-form/book-form.component";
import { BooksComponent } from "./components/books/books.component";
import { BookListComponent } from "./components/book-list/book-list.component";
import { CreateUserComponent } from './create-user/create-user.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
	declarations: [
		AppComponent,
		LoginComponent,
		BookFormComponent,
		BooksComponent,
		BookListComponent,
  CreateUserComponent,
  NavbarComponent,
	],
	imports: [BrowserModule, AppRoutingModule, FormsModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
