let url = 'https://swapi.co/api/people/1/'


fetch(url) // Call the fetch function passing the url of the API as a parameter
.then((resp) => resp.json())
.then(function(data) {
   console.log(data)
})
.catch(function() {
    // This is where you run code if the server returns any errors
});