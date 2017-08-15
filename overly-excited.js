// Create an addExcitement function that should console.log() rows of words. It should take an array containing the words of a sentence and output them in the developer console.

// Create an array that contains the words in the sentence
let sentence = ['The', 'walrus', 'danced', 'through', 'the', 'trees', 'in', 'the', 'light', 'of', 'the', 'moon'];

// The addExcitement function should accept the array as the sole argument
function addExcitement (theWordArray) {
	let currentSentence = sentence[0];
	for (let i = 1; i <= 12; i++) {
		if (i % 3 === 0 && i < 6) {
			currentSentence += "!";	
		} else if (i / 3 === 2) {
			currentSentence += "!!";
		} else if (i / 3 === 3) {
				currentSentence += "!!!";
		} else if (i / 3 === 4) {
			currentSentence += "!!!!";
			console.log(currentSentence)
			break;
		};
		console.log(currentSentence)
		currentSentence += " " + theWordArray[i];		
	};   
};

// Invoke the function and pass in the array
addExcitement(sentence);