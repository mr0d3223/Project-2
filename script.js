$(function() { // Makes sure that your function is called once all the DOM elements of the page are ready to be used.
    
    // Called function to update the name, happiness, and weight of our pet in our HTML
    checkAndUpdatePetInfoInHtml();
  
    // When each button is clicked, it will "call" function for that button (functions are below)
    $('.treat-button').click(clickedTreatButton);
    $('.play-button').click(clickedPlayButton);
    $('.exercise-button').click(clickedExerciseButton);
    $('nap-button').click(clickedNapButton);
  

  
    
  })
  
    // Add a variable "pet_info" equal to a object with the name (string), weight (number), and happiness (number) of your pet
    var pet_info = {
      name: "Mr. Definetly not Eevee",
      weight: 10,
      happiness: 5
      };
  
    function clickedTreatButton() {
 
      // Increase pet happiness
      pet_info.happiness += 2;
      // Increase pet weight
      pet_info.weight += 1;

      $("#pet-messages").append("<p>Your pet enjoyed the treat! 🍪</p>");
      $(".pet-image").attr("src", "images/eating.gif");
       
      checkAndUpdatePetInfoInHtml();
    }
    
    function clickedPlayButton() {
      // If weight is too low, block play
      if (pet_info.weight <= 3) {
        $("#pet-messages").append("<p>" + pet_info.name + " is too hungry to play — feed him some more!</p>");
        return; // stop here, do not update stats
      }

      // Increase pet happiness
      pet_info.happiness += 3;
      // Decrease pet weight
      pet_info.weight -= 1;

      $(".pet-image").attr("src", "images/playing.gif");
      $("#pet-messages").append("<p>Your pet loved playing! 🎾</p>");
     
      checkAndUpdatePetInfoInHtml();
    }
    
    function clickedExerciseButton() {

      // If weight is too low, block exercise
      if (pet_info.weight <= 3) {
        $("#pet-messages").append("<p>" + pet_info.name + " is too hungry to exercise — feed him some more!</p>");
        return; // prevent updates
      }

      // Decrease pet happiness
      pet_info.happiness -= 2;
      // Decrease pet weight
      pet_info.weight -= 3;

      $(".pet-image").attr("src", "images/exercise.gif");
      $("#pet-messages").append("<p>Your pet exercised hard! 🏃‍♂️</p>");      
      
      checkAndUpdatePetInfoInHtml();
    }

    function clickedNapButton() {

      // Increase pet happiness
      pet_info.happiness += 1;
      // Decrease pet tiredness 
      pet_info.tiredness -= 1;

      $(".pet-image").attr("src", "images/nap.gif");
      $("#pet-messages").append("<p>Your pet has gone mimis 😴</p>");      
      
      checkAndUpdatePetInfoInHtml();
    }

  
    function checkAndUpdatePetInfoInHtml() {
      checkWeightAndHappinessBeforeUpdating();  
      updatePetInfoInHtml();
    }
    
    function checkWeightAndHappinessBeforeUpdating() {
      // Add conditional so if weight is lower than zero.
      if (pet_info.weight < 0) pet_info.weight = 0;
      if (pet_info.happiness < 0) pet_info.happiness = 0;
    }
    
    // Updates your HTML with the current values in your pet_info object
    function updatePetInfoInHtml() {
      $('.name').text(pet_info['name']);
      $('.weight').text(pet_info['weight']);
      $('.happiness').text(pet_info['happiness']);
    }
  