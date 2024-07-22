const obj1 = {
  title: "A man being a man",
  author: "B.Tharun",
  publicationYear: 2029,
  genre: "reality,slef help",
};

console.log(obj1);
console.log(typeof obj1);

console.log(typeof obj1.title);

console.log("Title: " + obj1.title);

console.log(JSON.stringify(obj1));

console.log(typeof obj1);

console.log("Title: " + obj1["title"]);

console.log(obj1.author);

console.log(obj1.publicationYear);

// --->shallow copy
obj2 = obj1;
console.log(obj2.title);
obj2.title = "A man being a woman";
console.log(obj1.title);

// ----->deep copy
// obj2 = Object.create(obj1);
// console.log(obj2.title);
// obj2.title = "A woman being a woman";
// console.log(obj1.title);

console.log(this);
obj1["method"] = function () {
  console.log("Hello from method");
  console.log(obj1.title);
  console.log(obj1.author);
  console.log(this === obj1);
  console.log(this === obj2);
  //   console.log(this === window);
  console.log(obj2);
  console.log(this);
};

obj1.method();
console.log(obj1);
console.log(obj2);

obj1.changedata = function (para) {
  this.publicationYear = para;
  console.log(this.publicationYear);
};

obj1.changedata(2030);

console.log(obj1);

let bookScript = {
  title: "Advanced JavaScript",
  author: "John Doe",
  year: 2021,
  getDetails: function () {
    return `${this.title} by ${this.author} (${this.year})`;
  },
};

console.log(bookScript.getDetails());

for (let key in bookScript) {
  if (bookScript.hasOwnProperty(key)) {
    console.log(`${key}: ${bookScript[key]}`);
  }
}

let libraryScript = {
  name: "Tech Library",
  books: [
    {
      title: "JavaScript: The Good Parts",
      author: "Douglas Crockford",
      year: 2008,
    },
    { title: "Eloquent JavaScript", author: "Marijn Haverbeke", year: 2018 },
    { title: "You Don't Know JS", author: "Kyle Simpson", year: 2015 },
  ],
  getLibraryDetails: function () {
    console.log("Library Name:", this.name);
    this.books.forEach((book) => {
      console.log(`Book: ${book.title} by ${book.author} (${book.year})`);
    });
  },
};

for (let key in libraryScript) {
  if (libraryScript.hasOwnProperty(key)) {
    console.log(`${key}: ${libraryScript[key]}`);
  }
}

console.log("Library Keys:", Object.keys(libraryScript));
console.log("Library Values:", Object.values(libraryScript));

libraryScript.books.forEach((book) => {
  for (let key in book) {
    if (book.hasOwnProperty(key)) {
      console.log(`${key}: ${book[key]}`);
    }
  }

  console.log("Book Keys:", Object.keys(book));
  console.log("Book Values:", Object.values(book));
});

libraryScript.getLibraryDetails();

console.log("Keys:", Object.keys(bookScript));
console.log("Values:", Object.values(bookScript));
