// STEP 1: Initialize game variables
			// STEP 1a: Pick random number
			
            let randomNumber = Math.floor(Math.random() * 100) + 1;
            //console.log(randomNumber);

			// STEP 1b: Create variables to represent the three paragraphs above that will contain user feedback
			
            let guesses = document.querySelector('p#guesses');
            let lastResult = document.querySelector('p#lastResult');
            let lowOrHi = document.querySelector('p#lowOrHi');

			// STEP 1c: Create variables to represent the guessing form

            let guessField = document.querySelector('input#guessField')
            let guessSubmit = document.querySelector('button')

			// STEP 1d: Create variables to initialize counter for number of guesses
			
            let guessCount = 1;

			// STEP 2: Put focus on the field that allows user to type in guesses
			
            guessField.focus();

			// STEP 3: Build a function to check the user's guess
			
            function checkGuess(){

				// STEP 3b: Create a variable to contain what number the user entered
				
                let userGuess = Number(guessField.value);

				// STEP 3c: If this is the first guess, add some text to the screen as a label for listing previous guesses for reference
				
                if(guessCount === 1){
                   guesses.textContent = 'Previous Guesses: ';
                }
            
				
				// STEP 3d: Add the user's current guess to that list, plus a space
				
				guesses.textContent += userGuess + '';

				// STEP 3e: Conditional - the user guessed correctly
				if(userGuess === randomNumber){
					// Output a success message, then end the game
					lastResult.textContent = 'You guessed the number';
					lastResult.style.backgroundcolor = 'green';
                    lowOrHi.textContent = '';
                    gameOver();

                }else if(guessCount === 10){	
					
				// STEP 3f: Conditional - the user is all out of guesses
                    lastResult.textContent = 'You are out of guesses';
                    gameOver();
					// Output an appropriate message, then end the game
                }else{	
					
				// STEP 3g: Conditional - the user's guess is incorrect
                        lastResult.textContent = 'wrong';
                        lastResult.style.backgroundcolor = 'red';
					// Output an appropriate message
					
					
					// If the guess is too low, let the user know
					    if (userGuess < randomNumber) {
                         lowOrHi.textContent = 'Too low';
                        }else{
                        lowOrHi.textContent = 'Too high';
                        }
					// Else if the guess is too high, let the user know
					
					
				
				// STEP 3h: Increment the guess count, move focus to the guess field for the next guess, and clear out the old input
				guessCount ++;
                guessField.value = '';
                guessField.focus();
            }
        }
			// STEP 4: Build a function called gameOver() to end the game
			function gameOver(){
				// STEP 4a: Disable the guessing field and submit button
				guessField.disabled = true;
                guessSubmit.disabled = true;
				
				// STEP 4b: Change the textContent of the #lowOrHi paragraph to a short phrase indicating that the game is over, and that the user can start a new game by refreshing the browser page or tab
				lowOrHi.textContent = 'Game over! refresh the webpage to play again'
            }
			// STEP 3a: Add an event listener for the guess form button that calls the checkGuess function, then test that the event listener is working and that it invokes the function
			guessSubmit.addEventListener('click', checkGuess)
			// This page inspired by and adapted from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/A_first_splash