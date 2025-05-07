export type Role = "librarian" | "member";

export interface User {
	name: string;
	email: string;
	pass: string;
	role: Role;
}

// Title, Author, ISBN, and Availability
export interface Book {
	title: string;
	author: string;
	isbn: number;
	available: boolean;
}
