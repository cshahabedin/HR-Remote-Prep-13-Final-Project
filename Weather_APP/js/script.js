$(document).ready(function(){
  // sets a submit event to the element with class search(in our case the form)
  $(".search").on("submit", function(e){
    // prevents the default action, the default action here will cause a page refresh, which we don't want
    e.preventDefault()
    // grabs values from the the input fields and stores them to a variable
    var city = $(".searchCity").val()
    var state = $(".searchState").val()
    // creates a new forecast object using our Forecast constructor we define earlier.
    forecast = new Forecast({city: city, state: state})
    // calls .loadForecast to make the API call
    forecast.loadForecast().then(function(){
      // in the promise we create a new view passing in the forecast object
      view = new ForecastView(forecast)
      // empties forecast if one already exists
      view.clearContainer()
      // renders the new forecast
      view.render()
    })
  })
})