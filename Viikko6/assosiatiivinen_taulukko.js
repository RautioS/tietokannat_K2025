const bookData=[
    {'idBook' : 1,'name' : 'Dune','author' : 'Frank Herbert','isbn' : '978-0-441-17271-9'},
    {'idBook' : 2,'name' : 'Lord Of The Rings','author' : 'J.R.R. Tolkien','isbn' : '978-0-618-00222-8'},
    {'idBook' : 3,'name' : 'Game Of Thornes','author' : 'George R.R. Martin','isbn' : '978-0-553-10354-0'},
]


console.log ("2. Taulukon tietotyyppi on:", typeof bookData);

console.log ("3. Koko taulukon sisältö: ",bookData);
console.log ("4. Taulukon ensimmäinen rivi: ",bookData[0]);
console.log ("5. Taulukon ensimmäisen kirjan nimi: ",bookData[0].name);
console.log ("6. Taulukon rivien määrä: ",bookData.length);
console.log ("7. Taulukon kaikkien kirjojen nimet: ");

for (let i = 0; i < bookData.length; i++){
    console.log(bookData[i].name); 
}

