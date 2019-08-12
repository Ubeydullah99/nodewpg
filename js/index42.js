const message=" Ready Player One is a 2011 science fiction novel, and the debut novel of American author Ernest Cline.\n The story, set in a dystopian 2044, follows protagonist Wade Watts on his search for an Easter egg in a worldwide virtual \n reality game, the discovery of which will lead him to inherit the game creator's fortune.\n Cline sold the rights to publish the novel in June 2010, in a bidding war to the Crown Publishing Group \n (a division of Random House).\n The book was published on August 16, 2011. An audiobook was released the same day; it was narrated by Wil Wheaton, \n who was mentioned briefly in one of the chapters.Ch. 20 In 2012, the book received an Alex Award from the Young Adult \n Library Services Association division of the American Library Association and won the 2012 Prometheus Award.";
console.log(message.toUpperCase());
console.log(message.toLowerCase());

const text1=" Ready Player One is a 2011 science fiction novel, and the debut novel of American author Ernest Cline.\n The story, set in a dystopian 2044, follows protagonist Wade Watts on his search for an Easter egg in a worldwide \nvirtual reality game, the discovery of which will lead him to inherit the game creator's fortune.";
console.log(text1.toUpperCase());

const text2=" Cline sold the rights to publish the novel in June 2010, in a bidding war to the Crown Publishing Group\n (a division of Random House)].\n The book was published on August 16, 2011. An audiobook was released the same day; it was narrated by Wil Wheaton, \n who was mentioned briefly in one of the chapters.Ch. 20 In 2012, the book received an Alex Award from the Young Adult \n Library Services Association division of the American Library Association and won the 2012 Prometheus Award.";
console.log(text2.toLowerCase());
console.log(text1.concat('\n',text2));

const chars=text1.length+text2.length;
console.log(`The message has ${chars} characters long`)


