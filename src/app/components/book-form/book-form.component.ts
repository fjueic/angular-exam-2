import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { BookService } from "src/app/services/book.service";

@Component({
	selector: "app-book-form",
	templateUrl: "./book-form.component.html",
	styleUrls: ["./book-form.component.css"],
})
export class BookFormComponent {
	isbn: number = 0;
	title: string = "";
	author: string = "";
	available: boolean = false;
	message: string = "";
	constructor(
		private router: Router,
		private route: ActivatedRoute,
		private bookService: BookService,
	) {}
	ngOnInit() {
		this.route.params.subscribe((params) => {
			this.isbn = parseInt(params["isbn"]);
			if (this.isbn) {
				const book = this.bookService.getBook(this.isbn);
				if (!book) {
					console.error(book);
					this.router.navigate(["/book-list"]);
					return;
				}
				this.title = book.title;
				this.author = book.author;
				this.available = book.available;
			}
		});
	}
	onSubmit() {
		this.route.params.subscribe((params) => {
			if (params["isbn"]) {
				this.bookService.updateBook({
					isbn: this.isbn,
					title: this.title,
					author: this.author,
					available: this.available,
				});
			} else {
				if (this.bookService.getBook(this.isbn)) {
					this.message = "Book already exists";
					return;
				}
				this.bookService.addBook({
					isbn: this.isbn,
					title: this.title,
					author: this.author,
					available: this.available,
				});
			}
			this.router.navigate(["/book-list"]);
		});
	}
}
