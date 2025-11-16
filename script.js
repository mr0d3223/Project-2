$(function() { // Makes sure that your function is called once all the DOM elements of the page are ready to be used.
    
    // Called function to update the name, happiness, and weight of our pet in our HTML
    checkAndUpdatePetInfoInHtml();
  
    // When each button is clicked, it will "call" function for that button (functions are below)
    $('.treat-button').click(clickedTreatButton);
    $('.play-button').click(clickedPlayButton);
    $('.exercise-button').click(clickedExerciseButton);
    $('.nap-button').click(clickedNapButton);
  
  })
  
    // Add a variable "pet_info" equal to a object with the name (string), weight (number), and happiness (number) of your pet
    var pet_info = {
      name: "Mr. Definitely not Eevee",
      weight: 10,
      happiness: 5,
      tiredness: 2,
      fitness: "normal" , // tracks fitness state
      exerciseCount: 0
      };
  
    function clickedTreatButton() {
 
      // Increase pet happiness
      pet_info.happiness += 2;
      // Increase pet weight
      pet_info.weight += 1;

      // .attr("src", ...) changes the 'src' attribute of the <img> with class "pet-image".
      // This lets us swap the picture/GIF shown on the page without reloading the whole page.
      $(".pet-image")
      // .fadeOut() hides the image with a fade animation, then in the callback we change the src.
      // .fadeIn() then shows the new image smoothly, so the pet's image transitions look nicer.
      .fadeOut(200, function () {
        $(this).attr("src", "images/eating.gif");
      })
      .fadeIn(200);

      $("#pet-messages").html("<p>Your pet enjoyed the treat! 🍪</p>");
      
      updateFitnessState(); 
      checkAndUpdatePetInfoInHtml();
    }
    
    function clickedPlayButton() {
      // If weight is too low, block play
      if (pet_info.weight <= 3) {
        $("#pet-messages").html("<p>" + pet_info.name + " is too hungry to play — feed him some more!</p>");
        return; // stop here, do not update stats
      }

      // Block if too tired
      if (pet_info.tiredness >= 12) {
          $(".pet-image")
          .fadeOut(200, function () {
            $(this).attr("src", "images/tired.gif");
          })
          .fadeIn(200); 

        $("#pet-messages").html(
          "<p>" + pet_info.name + " is too tired to play — let him rest! 😴</p>"
        );
        return;
      }

      // Increase pet happiness
      pet_info.happiness += 3;
      // Decrease pet weight
      pet_info.weight -= 1;
      // Increase tiredness
      pet_info.tiredness += 1;

      $(".pet-image")
      .fadeOut(200, function () {
        $(this).attr("src", "images/playing.gif");
      })
      .fadeIn(200);

      $("#pet-messages").html("<p>Your pet loved playing! 🎾</p>");

      updateFitnessState();  
      checkAndUpdatePetInfoInHtml();
    }
    
    function clickedExerciseButton() {

      // If weight is too low, block exercise
      if (pet_info.weight <= 3) {
        $("#pet-messages").html(
          "<p>" + pet_info.name + " is too hungry to exercise — feed him some more!</p>"
        );
        return; // prevent updates
      }

      // Block if too tired
      if (pet_info.tiredness >= 12) {

        $(".pet-image")
          .fadeOut(200, function () {
            $(this).attr("src", "images/tired.gif");
          })
          .fadeIn(200);

        $("#pet-messages").html(
          "<p>" + pet_info.name + " is too tired to exercise — let him nap! 😴</p>"
        );
        return; // stop here, no stat changes
      }

        // Allowed to exercise:

        // Decrease pet happiness
        pet_info.happiness -= 3;
        // Decrease pet weight
        pet_info.weight -= 2;
        // Working out
        pet_info.exerciseCount += 1;
        // Getting tired
        pet_info.tiredness += 2;

      $(".pet-image")
        .fadeOut(200, function () {
          $(this).attr("src", "images/exercise.gif");
        })
        .fadeIn(200);

      $("#pet-messages").html("<p>Your pet exercised hard! 🏃‍♂️</p>");

      updateFitnessState();
      checkAndUpdatePetInfoInHtml();
    }

    function clickedNapButton() {

      // Decrease pet happiness
      pet_info.happiness -= 2;      
      // Decrease pet tiredness 
      pet_info.tiredness -= 3;

      $(".pet-image")
      .fadeOut(200, function () {
        $(this).attr("src", "images/nap.gif");
      })
      .fadeIn(200);

      $("#pet-messages").html("<p>Your pet has gone mimis 😴</p>");      
      
      checkAndUpdatePetInfoInHtml();
    }
    function updateFitnessState() {
      // If weight is very high → fat
      if (pet_info.weight >= 20) {
        pet_info.fitness = "fat";

        $(".pet-image")
        .fadeOut(200, function () {
          $(this).attr("src", "images/fat.gif");
        })
        .fadeIn(200);

        $("#pet-messages").html("<p>" + pet_info.name + " got a little too THICCC! 🍔</p>");
      }

      else if (pet_info.weight >= 10 && pet_info.weight < 20 && pet_info.exerciseCount >= 5) {
          pet_info.fitness = "buff";

          $(".pet-image")
            .fadeOut(200, function () {
              $(this).attr("src", "images/buff.jpg");
            })
            .fadeIn(200);

          $("#pet-messages").html("<p>Your pet is BUFF. 💪🔥</p>");
      }

      // Otherwise → NORMAL
      else {
          pet_info.fitness = "normal";
      }
   }

  
    function checkAndUpdatePetInfoInHtml() {
      checkWeightAndHappinessBeforeUpdating();  
      updatePetInfoInHtml();
    }
    
    function checkWeightAndHappinessBeforeUpdating() {
      // Add conditional so if weight is lower than zero.
      if (pet_info.weight < 0) pet_info.weight = 0;
      if (pet_info.happiness < 0) pet_info.happiness = 0;
      if (pet_info.tiredness < 0) pet_info.tiredness = 0;
    }
    
    // Updates your HTML with the current values in your pet_info object
    function updatePetInfoInHtml() {
      $('.name').text(pet_info['name']);
      $('.weight').text(pet_info['weight']);
      $('.happiness').text(pet_info['happiness']);
      $('.tiredness').text(pet_info['tiredness']);
      $('.fitness').text(pet_info['fitness']);
    }
  