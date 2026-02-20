export function getBooksByGenre(books, genre) {
  return books.filter((book) => book.genre === genre);
}

export function getAveragePages(books) {
  const total = books.reduce((sum, book) => sum + book.pages, 0);
  return books.length ? total / books.length : 0;
}

export function getOldestBook(books) {
  return books.reduce((oldest, book) =>
    book.year < oldest.year ? book : oldest
  );
}

export default class BookCollection {
  constructor(books = []) {
    this.books = [...books];
  }

  getSortedByYear() {
    return [...this.books].sort((a, b) => a.year - b.year);
  }

  addBook(book) {
    this.books.push(book);
  }

  get count() {
    return this.books.length;
  }
}
