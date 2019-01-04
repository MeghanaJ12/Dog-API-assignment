'use strict'

$(function () {
  console.log('app loaded waiting for submit!')
  formSubmit();
  form2Submit();
})

// function formSubmit(){
//   $('.dogForm').submit(event =>{
//     event.preventDefault();
//     console.log("clicked");
//     let number = $('.inputBtn').val();

//     getDogImages(number);
//   });
// }
function formSubmit() {
  $('#randomImg').on('click', function (e) {
    e.preventDefault();
    console.log('clicked');
    let number = $('.inputBtn').val();
    getDogImages(number);
  });
}
function form2Submit() {
  $('#selectDogBreed').on('click', function (e) {
    e.preventDefault();
    console.log('clicked');
    let breed = $('.dogBreed').val();
    console.log(breed);
    getDogBreedImage(breed);

  });
}

function displayResults(responseJson) {
  $('.searchResults').empty();
  var response = responseJson.message.map(function (imageUrl) { return `<img src ="${imageUrl}" class ="results">` });
  console.log(response);
  // $('.results-img').hide();
  // $('.results').val("");
  $('.searchResults').append(response);
  $('.results').removeClass('hidden');
}

function displayresults2(responseJson) {
  $('.searchResults').empty();
  console.log(responseJson);
  var breedImg = responseJson.message;

  if (responseJson.code == "404") {
    $('.searchResults').append(responseJson.message);
    $('.results').removeClass('hidden');
    }
  else {
    $('.searchResults').append(`<img src="${breedImg}" class ="results">`);
    $('.results').removeClass('hidden');
  }
}
function getDogImages(number) {
  console.log(number);
  fetch(`https://dog.ceo/api/breeds/image/random/${number}`)
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson))
    .catch(error => alert('Something went wrong, try agin later'))

}
function getDogBreedImage(breed) {
  console.log(breed)
  fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
    .then(response => response.json())
    .then(responseJson => displayresults2(responseJson))
    .catch(error => alert('Something went wrong, try agin later'))

}


