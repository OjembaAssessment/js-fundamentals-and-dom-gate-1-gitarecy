function createWordCloud() {
    let text = document.getElementById("myParagraph").textContent;
    let words = text.split(" ");
  //==========================================================
    // Count repeating words
    let countedWords = {};
    for (let i = 0; i < words.length; i++) {
      let word = words[i];
      if (countedWords[word] === undefined) {
        countedWords[word] = 0;
      }
      countedWords[word]++;
    }
  //======================================================
    // Get the 12 most frequently occurring words.
    let mostRepeatingWords = Object.keys(countedWords).sort(function(a, b) {
      return countedWords[b] - countedWords[a];
    });
    mostRepeatingWords = mostRepeatingWords.slice(0, 13);
  //=========================================================
    // generating word cloud.
    let wordCloud = [];
    for (let i = 0; i < mostRepeatingWords.length; i++) {
      let word = mostRepeatingWords[i];
      let size = 64 - (i * 4);
      wordCloud.push({
        word: word,
        size: size,
      });
    }
    return wordCloud;
  }

//================================================
  
  // Create the word actual word cloud.
  let newWordCloud = createWordCloud();

//================================================
  
  // Printing the word cloud to the html page.
  let cloud = document.getElementById("myWordCloud");
  cloud.innerHTML = "";
  for (let i = 0; i < newWordCloud.length; i++) {
    let word = newWordCloud[i];
    let span = document.createElement("span");
    span.textContent = word.word;
    span.style.fontSize = word.size + "px";
    cloud.appendChild(span);
  }
