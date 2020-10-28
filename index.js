/* eslint-disable */

'use strict';


let array=[]

function getDogImages() {
    let resultsNum = $('#resultsNumber').val();
    fetch(`https://dog.ceo/api/breeds/image/random/${resultsNum}`)
      .then(results => results.json())
      .then(resultsJson => displayResults(resultsJson))
      .catch(error => alert('Something went wrong. Try again later.'))
};

function displayResults(resultsJson){
    console.log(resultsJson);
    //replace existing image with new image
    for(let i = 0; i < resultsJson.message.length; i++){
        array.push(`<img src='${resultsJson.message[i]}' class='results-img'>`);
        $('.results-img').html(array);
        $('.results').removeClass('hidden');
      }
}

//watchForm function
function watchForm () {
    $('form').on('submit', function(evt){
        evt.preventDefault();
        getDogImages();
    })
}

$(function() {
    console.log('App loaded! Waiting for submit!');
    watchForm();
    console.log(array)
})



//template for image render

//template of the html to show the images using jquery class to populate

//for loop for displaying items in the array