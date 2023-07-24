// Counting word repetition
function checkRepetition(myParagraph) {
    myParagraph = myParagraph.toLowerCase(); //turned to lowercase to avaoid strict euqality
    let words = myParagraph.split(" "); //turn paragraph into array
    let repetitionsFound = {}; //create object to store repeating words
  
    // Loop through each word
    for (let i = 0; i < words.length; i++) {
      let word = words[i];
      if (word !== "") {
        // If the word is already in the repetitionsFound object, increase its count
        if (repetitionsFound[word]) {
          repetitionsFound[word]++;
        } else {
          // add word not present in Found object, add it with count 1
          repetitionsFound[word] = 1;
        }
      }
    }
  
    return repetitionsFound;
  }


  // Function to highlight the most often occurring words
  function hightighter(myParagraph, num) {
    let repetitionsFound = checkRepetition(myParagraph);
    let rearranged = Object.keys(repetitionsFound).sort((a, b) => repetitionsFound[b] - repetitionsFound[a]);
    let repeatingWord = rearranged.slice(0, num);
  
    let matchMakerRegExpression = new RegExp(`\\b(${repeatingWord.join('|')})\\b`, 'gi');
  
    return myParagraph.replace(matchMakerRegExpression, match => {
      if (match.charAt(0).match(/[A-Z]/)) {
        return `<u>${match}</u>`;
      } else {
        return `<mark>${match}</mark>`;
      }
    });
  }


  //====TEST=======
  // Get the paragraph element and text from html page
  let paragraph = document.querySelector('p');
  let textOfParagraph = paragraph.textContent;
  
  // Highlight and underline the 5 most often repeating words
  let newParagraph = hightighter(textOfParagraph, 5);
  
  // Replace the original paragraph with the highlighted one
  paragraph.innerHTML = newParagraph;
  
