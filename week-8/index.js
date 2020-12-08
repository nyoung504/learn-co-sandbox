//const title = document.querySelector('.title');
//const myLocation = document.querySelector('.location');

// async request
/*
let data = fetch('https://api.github.com/users/mirandamon').then((response) => {
  return response.json()
}).then((responseJson) => {
  title.innerHTML = responseJson.login
  myLocation.innerHTML = responseJson.location
})*/

let input = document.querySelector('#search-box')
input.addEventListener('keydown', (event) => {
  // start searching
  let value = input.value
  // fetch
  const configuration = {
    mode: 'no-cors',
    //must change token in github..generate new token
    headers: {
      'Authorization': 'token mirandamon:edf9d05378169b6361dc4e928a3dd9b52ea3224d' 
    }
  }
  fetch('https://api.github.com/search/repositories?q=' + value, configuration)
    .then(apiResponse => apiResponse.json())
    .then(responseJson => console.log(responseJson))
})

// search