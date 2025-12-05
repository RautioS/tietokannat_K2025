const { read } = require('fs');

const readline = require('readline').createInterface({
     input: process.stdin,
     output: process.stdout
 });    

 readline.question("Anna ensimmäinen luku: ", (x) => {
    readline.question("Anna toinen luku: ", (y) => {
        if (x > y) {
            console.log ("Luku " + x + " on suurempi kuin luku " + y);
        } else if (x < y) {
            console.log ("Luku " + y + " on suurempi kuin luku " + x);
        } else {
            console.log ("Luvut ovat yhtä suuret.");
        }
        readline.close();
    });
}); 
