import { LIBRARY_NAME, books } from "./data.js";
import BookCollection from "./utils.js";
import {
  getBooksByGenre as filterByGenre,
  getAveragePages,
  getOldestBook,
} from "./utils.js";

console.log("=== Завдання 5: Модулі ===");

console.log("Бібліотека:", LIBRARY_NAME);
console.log("Всього книг:", books.length);

console.log(
  "Programming книги:",
  filterByGenre(books, "programming")
);

console.log("Середня кількість сторінок:", getAveragePages(books));

console.log("Найстаріша книга:", getOldestBook(books));

const collection = new BookCollection(books);

console.log("Кількість у колекції:", collection.count);

console.log("Відсортовано за роком:");
console.log(collection.getSortedByYear());

collection.addBook({
  title: "Новa книга",
  author: "Автор",
  year: 2023,
  pages: 250,
  genre: "fiction",
});

console.log("Після додавання:", collection.count);
