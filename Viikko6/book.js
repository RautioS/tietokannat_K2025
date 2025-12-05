const book = {
    bookArray:[
    {'idBook' : 1,'name' : 'Dune','author' : 'Frank Herbert','isbn' : '978-0-441-17271-9'},
    {'idBook' : 2,'name' : 'Lord Of The Rings','author' : 'J.R.R. Tolkien','isbn' : '978-0-618-00222-8'},
    {'idBook' : 3,'name' : 'Game Of Thornes','author' : 'George R.R. Martin','isbn' : '978-0-553-10354-0'},
],

getAllBooks() {
    console.log(this.bookArray);
},

getOneBook(x) {
    console.log(this.bookArray[x]);
},

addBook(idBook, name, author, isbn) {
    this.bookArray.push({'idBook': idBook, name, author, isbn});
}

};

//Tulostetaan kaikki kirjat
book.getAllBooks();

//Tulostetaan taulukon toinen kirja Lord Of The Rings
book.getOneBook(1);

//Lisätään uusi kirja
book.addBook(4, '1984', 'George Orwell', '978-0-452-28423-4');

//Tulostetaan George Orwellin kirja 1984 jotta nähdään että lisäys onnistui
book.getOneBook(3);
