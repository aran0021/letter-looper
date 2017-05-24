/*global colsole*/

var letter;


while (!letter) {
    letter = prompt("Enter a letter please");

    for (i = 0; i < 10; i += 1) {
        for (k = 0; k <= i; k += 1) {
            document.write(letter);
        }
        document.write("<br>");
    }
}