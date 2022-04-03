function getCurrentWeather(){
    var city = document.getElementById("search").value;
    var units = document.getElementById("units").value;
    
    fetch(`http://api.weatherstack.com/current?${params}`+"&query="+
    city+"&units="+units)
    .then(a=>a.json())
    .then(response =>{
        document.getElementById("image").src=response.current.weather_icons[0];
        document.getElementById("output").innerHTML="<h1>"+
        response.current.weather_descriptions[0]+
        "</h1><table><tr><th>City</th><th>Country</th>"+
        "<th>State/Region</th><th>Time of request</th>"+
        "<th>Temperature</th><th>Feels like</th><th>UV Index</th>"+
        "<th>Humidity</th><th>Cloud cover</th></tr><tr><td>"+
        response.location.name+"</td><td>"+
        response.location.country+"</td><td>"+
        response.location.region+"</td><td>"+
        response.location.localtime+"</td><td>"+
        response.current.temperature+"</td><td>"+
        response.current.feelslike+"</td><td>"+
        response.current.uv_index+"</td><td>"+
        response.current.humidity+"</td><td>"+
        response.current.cloudcover+"</td></tr></table>";
    })
}

let params = new URLSearchParams({
    access_key:"dbc5fd5328e7d389e6fc9c219f5e704a"
    // query: "Minneapolis, MN",
    // units: "f"
})
fetch(`http://api.weatherstack.com/current?${params}`)
.then(res => res.json()).then(console.log);


// function getCurrentWeather(){
//     var city = document.getElementById("search").value;
//     var units = document.getElementById("units").value;

//     fetch(`http://api.weatherstack.com/current?${params}`+"&query="+
//     city+"&units="+units)
//     .then(a=>a.json())
//     .then(response =>{
//         document.getElementById("image").src=response.current.weather_icons[0];
//         document.getElementById("output").innerHTML="<h1>"+
//         response.current.weather_descriptions[0]+
//         "</h1>Temperature: "+response.current.temperature+
//         "<br>Feels like: "+response.current.feelslike+
//         "<br>UV index: "+response.current.uv_index+
//         "<br>Humidity: "+response.current.humidity+
//         "<br>Cloud cover: "+response.current.cloudcover;
//     })
// }