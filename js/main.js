var allData=[]

var searchInput=document.getElementById("searchInput")
 var weather="egypt";

function getWeather(weather){
    
var myHttp= new XMLHttpRequest()
myHttp.open("GET",`https://api.weatherapi.com/v1/forecast.json?key=0dd743d15df6473fafb170453240712&q=${weather}&days=3`)
myHttp.send()
myHttp.addEventListener("readystatechange",function(){
  if(myHttp.readyState==4){
    console.log(JSON.parse(myHttp.response).location);
    allData=JSON.parse(myHttp.response)
    displayWeather()
  }
})}

getWeather(weather)

searchInput.addEventListener("blur",function(){
   console.log(searchInput.value);
   getWeather(searchInput.value)
})

function displayWeather(){
    
   
    
    document.getElementById("name").innerHTML=allData.location.name
    document.getElementById("temp").innerHTML=allData.current.temp_c
    document.getElementById("mood").innerHTML=allData.current.condition.text
    document.getElementById("temp2").innerHTML=allData.current.temp_c
    document.getElementById("mood2").innerHTML=allData.current.condition.text
    document.getElementById("temp3").innerHTML=allData.current.temp_c
    document.getElementById("mood3").innerHTML=allData.current.condition.text
    
}

// function searchByName(term){
// var cartona=""
//   for(var i =0; i<allData.length; i++){
//     if(allData[i].location.name.toLowerCase().includes(term.toLowerCase().trim())){
        
//     cartona+=`
//     <div class="col-md-4">
          
//   <div class="card border-dark mb-3 bg-dark" ">
//     <div class="card-header d-flex justify-content-between">
//       <h6>Saturday</h6>
//       <h6>7December</h6>
//     </div>
//     <div class="card-body">
//       <h5 class="card-title">
//         <h2>${allData[i].location.name}</h2>
//        <h2>
//         22.1 C
//        </h2>
//        <div>
//         <i class="fa-solid fa-sun"></i>
//        </div>
//       </h5>
//       <p>sunny</p>
//       <div class="icons d-flex justify-content-between">
//         <div>
//           <i class="fa-solid fa-umbrella">20%</i>
//         </div>
//         <div>
//           <i class="fa-solid fa-wind">18km/h</i>
//         </div>
//   <div>
//     <i class="fa-solid fa-compass">west</i>
//   </div>
//       </div>
//     </div>
//   </div>
//         </div>
//         <div class="col-md-4">
          
//           <div class="card border-dark mb-3 bg-dark" style=>
//             <div class="card-header">
//               <p class="text-center">sunday</p>
//             </div>
//             <div class="card-body text-center">
//              <div  class="d-flex justify-content-center align-items-center">
//               <i class="fa-solid fa-sun"></i>
//              </div>
//               <h3>22.8oC</h3>
//               <h6>14.7</h6>
//               <p class=" mb-5">sunny</p>
//             </div>
//           </div>
//                 </div>
//    <div class="col-md-4">
//                   <div class="card border-dark mb-3 bg-dark" style>
//                     <div class="card-header">
//                       <p class="text-center">monday</p>
//                     </div>
//                     <div class="card-body text-center">
//                      <div  class="d-flex justify-content-center align-items-center">
//                       <i class="fa-solid fa-sun"></i>
//                      </div>
//                       <h3>23 c</h3>
//                       <h6>13.9o</h6>
//                       <p class=" mb-5">sunny</p>
//                     </div>
//                   </div>
//       </div>`
//     }
//   }document.getElementById("rowData").innerHTML=cartona
// }