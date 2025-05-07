import { Injectable } from "@angular/core";
import { Book } from "../models/type";

@Injectable({
	providedIn: "root",
})
export class CheckoutService {
	private storageKey = "checkedOutBooks";

	getCheckedOutBooks(): Book[] {
		const books = localStorage.getItem(this.storageKey);
		return books ? JSON.parse(books) : [];
	}

	checkoutBook(book: Book): void {
		const books = this.getCheckedOutBooks();
		books.push(book);
		localStorage.setItem(this.storageKey, JSON.stringify(books));
	}

	returnBook(bookId: number): void {
		const books = this.getCheckedOutBooks().filter(
			(book) => book.isbn !== bookId,
		);
		localStorage.setItem(this.storageKey, JSON.stringify(books));
	}
}
