$(function(){
	$('form').on('submit', function(event){
		// prevents the form from refreshing on submit
		event.preventDefault();

		//store data-character info
		var character = $('input[name="character"]:checked', 'form').val(); 
		
		// //store data-warmup info
		var warmup = $('input[name="warmup"]:checked', 'form').val(); 

		// //store data- Signature look info
		var look = $('input[name="look"]:checked', 'form').val(); 
		
		// //store date- Finisher
		var finisher = $('input[name="finisher"]:checked', 'form').val(); 

		/// choose at random whetherthe user wins or looses
		var randomNumber = Math.round(Math.random() * 1);
		if (randomNumber == 0) {
			var end = 'lose';
		}
		else {
			var end = 'win';
		}
		
		var class1  = "." + character + warmup;
		var class2 = "." + character + look;
		var class3 = "." + character + finisher;
		var class4 = "." + character + 'undies';
		var class5 = "." + character + end;

		console.log(class1);
		console.log(class2);
		console.log(class3);
		console.log(class4);
		console.log(class5);
		
		$('.dance').addClass('reveal');

//keep track of how many times the next button is clicked
		function click() {
               countClicks = countClicks + 1;
            }
 		var countClicks = 0;

		// 1. Go find a button with the class of next
		// 2. When that button is clicked 
		


		$('.next').on('click', function(){
			// 1.b find out how many times the button has been clicked
			click();
			console.log(countClicks);
			// 3. Add the class of 'show' to something with the class of flash
			// 5. Wait for 500ms and then remove the class of 'show' from something with the class of flash.
			$('.flash').addClass('show').delay(500).queue(function(){
				$(this).removeClass('show').dequeue();
			});
			// 4. AND add the class of show to something with the class of ('class' + number of times the next button has been clicked + 1)
			var responsiveClass = 'class' + countClicks;
			 console.log(responsiveClass);
			// console.log(class1);
		
		if (responsiveClass === 'class1') {
			$(class1).addClass('show');
			console.log(class1);
			$('.next').text('Next Move!');
		}
		else if (responsiveClass === 'class2') {
			$(class2).addClass('show');
			$(class1).removeClass('show');
			console.log(class2);
		}
		else if (responsiveClass === 'class3'){
			$(class3).addClass('show');
			$(class2).removeClass('show');
			console.log(class3);
		}
		else if (responsiveClass === 'class4'){
			$(class4).addClass('show');
			$(class3).removeClass('show');
			$('.next').text('Prepare...');
			console.log(class4);
		}
		else if (responsiveClass === 'class5'){
			$(class5).addClass('show');
			$(class4).removeClass('show');
			$('.next').text('Play Again!');
			$('.share').addClass('show');
			console.log(class5);
		}
		else {
			$('.dance').removeClass('reveal');
			location.reload();
		}

			

		});



	}); 




});








				// $('.' + options[i]).delay(lag)
			// .queue(function(){
			// 	$(this).animate({ left:"50px" }, 700 );
			// 	});
				// delay(lag);
				// $(this).removeClass('show');

			
			// $('.' + options[i]).show('slow');
			// $( "p" ).show( "slow" );

			// $('.transparent').fadeIn().delay(500).queue(function(){
//   $('.transparent').addClass('yourclass');
// });

		// if "."+ character + "." + warmup === (the class of the div) then div equals display block.

		// if (character = 'derek') {
		// 	console.log(character);

			// $('div.trial.derek').addClass('show');

		




			// if (character === 'derek' && warmup === 'leg'){
			// 	$('.trial.derek').addClass('show');
			// 	}
			// else {
			// $('.trial.hansel').addClass('show');
			// 	}



		



//if walkOff[0] is equal to derek_leg
//then add the class .show to div.derek.move.leg

		






	// var walkOff = ['move1', 'move2', 'move3']
	// // on click of button run array loop with animations
	// for(var i = 0; i < walkOff.length; i++) {
	// 	console.log(i);
	// 	console.log(walkOff[i])
	// }
// </script>

// <script>
//  //FORM

// 	// CHARACTER CHOICE
// 	// 1. User chooses character.
// 	// 2. Make a var of the character choice from the form input radio buttons. 
// 	// 3. We need that to match with one the classes on our divs containing the animations.

// // WARM UP CHOICE
// 	// 1. User chooses warm up option from three choices.
// 	// 2. Make a var of the warm choice from the form input radio buttons. 
// 	// 3. We need that to match with the other class on our divs containing the animations.
// 	// For warm up we have 6 div animation possibilities

// // SIGNATURE LOOK CHOICE
// 	// 1. User chooses signature option from 4 choices.
// 	// 2. Make a var of the warm choice from the form input radio buttons. 
// 	// 3. We need that to match with the other class on our divs containing the animations.
// 	// For signature we have 8 div animation possibilities.

// // FINISHER CHOICE
// 	// 1. User chooses finisher from three choices.
// 	// 2. Make a var of the finisher choice from the form input radio buttons. 
// 	// 3. We need that to match with the other class on our divs containing the animations.
// 	// For finisher we have 6 div animation possibilities.


// 	// ___________________________________________________
// //DANCE SEQUENCE 
// 	// 1. System shows Warm-up Dance Move
// 	// 1.b. Flash Animation 
// 	// 2. System shows Signature Look
// 	// 2.b. Flash Animation 
// 	// 3. Systen shows Finisher Dance Move 
// 	// 3.b. Flash Animation
// 	// 4. Transition hand in pants 
// 	// 5. System shows win or lose 








	





