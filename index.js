const books = [
  {
    name: "To Kill a Mockingbird",
    authorFirst: "Harper",
    authorLast: "Lee",
    publishDate: 1960,
    genre: ["mystery", "historical", "fiction"],
  },
  {
    name: "The Great Gatsby",
    authorFirst: "F. Scott",
    authorLast: "Fitzgerald",
    publishDate: 1925,
    genre: ["mystery", "historical", "fiction"],
  },
  {
    name: "The Hobbit",
    authorFirst: "JRR",
    authorLast: "Tolkien",
    publishDate: 1937,
    genre: ["fantasy", "fiction"],
  },
  {
    name: "Harry Potter and the Deathly Hallows",
    authorFirst: "JK",
    authorLast: "Rowling",
    publishDate: 1997,
    genre: ["fantasy", , "fiction"],
  },
  {
    name: "Ulysses",
    authorFirst: "James",
    authorLast: "Joyce",
    publishDate: 1918,
    genre: ["historical", "non-fiction"],
  },
  {
    name: "War and Peace",
    authorFirst: "Leo",
    authorLast: "Tolstoy",
    publishDate: 1867,
    genre: ["historical", "fiction"],
  },
  {
    name: "Pride and Prejudice",
    authorFirst: "Jane",
    authorLast: "Austen",
    publishDate: 1813,
    genre: ["fiction"],
  },
  {
    name: "The Catcher in the Rye",
    authorFirst: "JD",
    authorLast: "Salinger",
    publishDate: 1951,
    genre: ["fiction"],
  },
  {
    name: "Great Expectations",
    authorFirst: "Charles",
    authorLast: "Dickens",
    publishDate: 1861,
    genre: ["historical", "fiction"],
  },
  {
    name: "Little Women",
    authorFirst: "Lousia May",
    authorLast: "Alcott",
    publishDate: 1868,
    genre: ["womens", "historical", "fiction"],
  },
];

const titles = [
  "To Kill a Mockingbird",
  "The Great Gatsby",
  "The Hobbit",
  "Harry Potter and the Deathly Hallows",
  "Ulysses",
  "War and Peace",
  "Pride and Prejudice",
  "The Catcher in the Rye",
  "Great Expectations",
  "Little Women",
];

//Array of authors and the book they wrote
// "--- wrote --- in ---"
books.forEach((book) => {
  console.log(`${book.authorFirst} ${book.authorLast} wrote ${book.name} in ${book.publishDate}`);
});

//Sort books from oldest to most recent
const dates = [];
const oldToNew = [];
books.forEach((book) => {
  dates.push(book.publishDate);
  dates.sort();
});

dates.forEach((date) => {
  books.forEach((book) => {
    if (date === book.publishDate) {
      oldToNew.push({ name: book.name, publishDate: book.publishDate });
    }
  });
});
console.log(oldToNew);

//sort books alphabetically
titles.forEach((title) => {
  titles.sort();
});
console.log(titles);

//Find who wrote War and Peace
books.forEach((book) => {
  if (book.name ==="War and Peace"){
    console.log(`${book.authorFirst} ${book.authorLast} wrote ${book.name}`)
  }
})

//how many books were written before 1900?
const beforeYear = []
books.forEach((book) => {
  if (book.publishDate < 1900) {
    beforeYear.push(book);
  }
})
console.log(beforeYear.length + 'books were written before 1900');

//was there at least one book published within the last 100 years?
const date = new Date();
const lastHundred = []
books.forEach((book) => {
  if (book.publishDate > date.getFullYear() - 100) {
    lastHundred.push(book);
  }
})
console.log(lastHundred.length + ' books were written in the last 100 years');
//was every book published within the last 100 years?

if (lastHundred.length === books.length) {
  console.log("Every book was published in the last 100 years");
} else {
  console.log("Not every book was published in the last 100 years");
}

//print a list of books that "includes" the genre historical
const historical = []

books.forEach((book) => {
  console.log(book.genre);
  if (book.genre.includes('historical')) {
    historical.push(book.name);
  }
})
console.log(`books with genre historical: ${historical}`)