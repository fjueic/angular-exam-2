// services/book.service.ts
import { Injectable } from "@angular/core";

import { Book } from "../models/type";
import { AuthService } from "./auth.service";
@Injectable({
	providedIn: "root",
})
export class BookService {
	private storageKey = "libraryBooks";
	constructor(private authService: AuthService) {}

	getBooks(): Book[] {
		const books = localStorage.getItem(this.storageKey);
		return books ? (JSON.parse(books) as Book[]) : [];
	}

	saveBooks(books: Book[]): void {
		localStorage.setItem(this.storageKey, JSON.stringify(books));
	}

	addBook(book: Book): void {
		const books = this.getBooks();
		books.push(book);
		this.saveBooks(books);
	}

	updateBook(updatedBook: Book): void {
		const books = this.getBooks().map((book) =>
			book.isbn === updatedBook.isbn ? updatedBook : book,
		);
		this.saveBooks(books);
	}

	deleteBook(bookId: number): void {
		const books = this.getBooks().filter((book) => book.isbn !== bookId);
		this.saveBooks(books);
	}
	getBook(isbn: number): Book | undefined {
		console.log(isbn);
		return this.getBooks().filter((b: Book) => b.isbn === isbn)[0];
	}
}
