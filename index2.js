function getDogImage() {
    let imageNumber = $('#getDog').val();
    if(imageNumber < 3) {
      imageNumber = 3;
    }
    let breed = ($('#breed').val().toLowerCase());
    fetch(`https://dog.ceo/api/breed/${breed}/images/random/${imageNumber}`) 
    // adding to the end of the URL says how many numbers are added and then pass the argument into the function
    .then(response => response.json()) 
    .then(responseJson => displayResults(responseJson))
    .catch(error => alert('Something went wrong! Try again later!'));
  }
  
  function displayResults(responseJson){
    let dogs = [];
    for(let i = 0; i < responseJson.message.length; i++){
      dogs.push(`<img src='${responseJson.message[i]}' class='results-image'>`);
    }
    $('.results-img').html(dogs);
  }
  
  
  function watchForm() {
    $('form').submit(event => {
      event.preventDefault();
      getDogImage();
    });
  }
  
  
  
  $(function() {
    console.log('App loaded! Waiting for submit!');
    watchForm();
  });
  