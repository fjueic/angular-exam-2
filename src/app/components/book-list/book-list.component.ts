import { Component, OnInit } from "@angular/core";
import { BookService } from "../../services/book.service";
import { AuthService } from "../../services/auth.service";
import { CheckoutService } from "../../services/checkout.service";
import { Router } from "@angular/router";
import { Book } from "src/app/models/type";

@Component({
	selector: "app-book-list",
	templateUrl: "./book-list.component.html",
})
export class BookListComponent implements OnInit {
	books: Book[] = [];
	role: "librarian" | "member" | null = null;

	constructor(
		private bookService: BookService,
		private authService: AuthService,
		private checkoutService: CheckoutService,
		private router: Router,
	) {}

	ngOnInit(): void {
		this.books = this.bookService.getBooks();
		this.role = this.authService.getUserRole();
	}

	get isLibrarian(): boolean {
		return this.role === "librarian";
	}

	get isMember(): boolean {
		return this.role === "member";
	}

	editBook(isbn: number): void {
		console.log([`/books/${isbn}`, `edit`]);
		this.router.navigate([`/book-form/${isbn}`, `edit`]);
	}

	deleteBook(isbn: number): void {
		this.bookService.deleteBook(isbn);
		this.books = this.bookService.getBooks();
	}

	checkoutBook(book: Book): void {
		if (book.available) {
			book.available = false;
			this.bookService.updateBook(book);
			this.checkoutService.checkoutBook(book);
			this.books = this.bookService.getBooks();
		}
	}

	returnBook(book: Book): void {
		book.available = true;
		this.bookService.updateBook(book);
		this.checkoutService.returnBook(book.isbn);
		this.books = this.bookService.getBooks();
	}
}
