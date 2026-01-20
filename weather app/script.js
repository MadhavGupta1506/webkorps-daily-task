async function getData(location) {
    if(location===""){
        location="Indore"
    }
    try {
    const response = await fetch(BASE_URL+`&q=${location}`);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    return result
  } catch (error) {
    console.error(error.message);
  }
}


function entryFill(location,current){
  console.log(location.name)
  $("#cityName").html(location.name);
  $("#dateTime").html(location.localtime);
  $("#country").html(location.country);
  $("#region").html(location.region);
  $("#windSpeed").html(current.wind_kph);
  $("#temperature").html(current.temp_c);
  $("#humidity").html(current.humidity);
  $("#weatherDescription").html(current.condition.text+`<img src='${current.condition.icon}'>`);
  $("#pressure").html(current.pressure_mb);
  $("#precipitation").html(current.precip_mm)
  $("#timeZone").html(location.tz_id)
  
}


async function getWeather(){
  const city=$("#cityInput").val()
  obj=await getData(city)
  const location=obj.location
  const current=obj.current
  // for(data in current){
    //   console.log(data)
    // }
    for(data in location){
      console.log(data)
    }
    
    $("body").load("weatherResult.html",()=>{
      entryFill(location,current);
    })
    console.log(obj)

}
