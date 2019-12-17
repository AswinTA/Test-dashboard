import setDeafDonut from "./deaf";
import setBlindDonut from "./blind";
import setLowVisionDonut from "./lowVision";
import setMotorDonut from "./motor";
import setCognitiveDonut from "./cognitive";
import setColorBlindnessDonut from "./colorBlindness";

async function loadDataByFetchApi(url, jsonData){
    let response = await fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(jsonData)
      });
    if (response.ok) {
      let json = await response.json();
      return json;
    } else {
      alert("HTTP-Error: " + response.status);
    }
}
 
let url = "http://192.168.35.34:7555/";

 document.onload = loadAllCharts();

async function initLoadDeafDonut(){
    let jsonData = new Object();
    jsonData.affectedUsers = "Deaf";
   let jsonResponse = await loadDataByFetchApi(url,jsonData);
    // console.log(jsonResponse);
    setDeafDonut(jsonResponse.Total, jsonResponse.Yes);
}
async function initLoadBlindDonut(){
  let jsonData = new Object();
  jsonData.affectedUsers = "Blind";
  let jsonResponse = await loadDataByFetchApi(url,jsonData);
  console.log(jsonResponse);
  setBlindDonut(jsonResponse.Total, jsonResponse.Yes);
}
async function initLoadLowVisionDonut(){
  let jsonData = new Object();
  jsonData.affectedUsers = "Low_Vision";
  let jsonResponse = await loadDataByFetchApi(url,jsonData);
  console.log(jsonResponse);
  setLowVisionDonut(jsonResponse.Total, jsonResponse.Yes);
}
async function initLoadMotorDonut(){
  let jsonData = new Object();
  jsonData.affectedUsers = "Motor";
  let jsonResponse = await loadDataByFetchApi(url,jsonData);
  console.log(jsonResponse);
  setMotorDonut(jsonResponse.Total, jsonResponse.Yes);
}
async function initLoadCognitiveDonut(){
  let jsonData = new Object();
  jsonData.affectedUsers = "Cognitive";
  let jsonResponse = await loadDataByFetchApi(url,jsonData);
  console.log(jsonResponse);
  setCognitiveDonut(jsonResponse.Total, jsonResponse.Yes);
}
async function initLoadColorBlindnessDonut(){
  let jsonData = new Object();
  jsonData.affectedUsers = "Color_Blindness";
  let jsonResponse = await loadDataByFetchApi(url, jsonData);
  console.log(jsonResponse);
  setColorBlindnessDonut(jsonResponse.Total,jsonResponse.Yes);
}

function loadAllCharts(){
  initLoadDeafDonut();
  initLoadBlindDonut();
  initLoadLowVisionDonut();
  initLoadMotorDonut();
  initLoadCognitiveDonut();
  initLoadColorBlindnessDonut();
}
