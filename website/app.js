//import { promises } from "fs";

/* Global Variables */
const btn=document.getElementById('generate');
const zipCode=document.getElementById('zip');
const feeling=document.getElementById('feelings');
const obj={};
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

// Personal API Key for OpenWeatherMap
const APIKey='ef93aaf0f66805f7178b14255b2b136d';



// Event listener to add function to existing HTML DOM element

btn.addEventListener('click',function(){
    
    if((zipCode.value)&&(feeling.value)){
       getweather()  
       .then((data)=>{
        postData('/addData',{
           date:newDate,
           feelings:feeling.value,
           temp:data
        })
    }).then(()=>{
        updateUi();
    });
    }else{
        if((zipCode.value)||(feeling.value)){
           if((!feeling.value)&&(zipCode.value)){
             alert("please write  feelings");
          }
          else {
             alert("please enter the zip code");
          }
        }
       else{
           alert("please enter the required data");
        }
    }

});

/*Function  to Get weather data */

 async function getweather(){
    const zipCode=document.getElementById('zip').value;
    const APIKey='ef93aaf0f66805f7178b14255b2b136d';
    const url=`https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${APIKey}`;
    const request=await fetch(url);
    try{
        const allData=await request.json();
         let temperature=allData.main.temp;
         return temperature;
     }
     catch(error){
         console.log(error);
     }
}


       




/* Function to POST data */

 const postData=async(url=' ',data={})=>{
    const response=await fetch(url,{
        method: 'POST', 
        credentials: 'same-origin', 
        headers: {
            'Content-Type': 'application/json',
     },
     
     body: JSON.stringify(data),      
       
 });
  try{ 
      const postedData=await response.json();
      return postedData;
  }catch(error){
      console.log(error);
  }
}
//Function to get the data posted to the server and update the webpage

const updateUi=async()=>{
    const request=await fetch(`/getData`);
   try{
        const serverData=await request.json();
        document.getElementById("date").innerHTML="date: "+serverData.date;
        document.getElementById("temp").innerHTML="temprature: "+serverData.temperature;
        document.getElementById("content").innerHTML="feelings: "+serverData.feelings;
  }catch(error){
      console.log(error);
   }

}

