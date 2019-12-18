import setDeafDonut from "./deaf";
import setBlindDonut from "./blind";
import setLowVisionDonut from "./lowVision";
import setMotorDonut from "./motor";
import setCognitiveDonut from "./cognitive";
import setColorBlindnessDonut from "./colorBlindness";
import setIlliterateDonut from "./illiterate";
import setAllDonutChart from "./allCharts";

// data fetch url
let url = "http://192.168.35.16:7555/";

document.onload = loadAllCharts();


// to load all charts
function loadAllCharts() {
  initLoadDeafDonut();
  initLoadBlindDonut();
  initLoadLowVisionDonut();
  initLoadMotorDonut();
  initLoadCognitiveDonut();
  initLoadColorBlindnessDonut();
  initLoadIlliterateDonut();
  initLoadAllDonut();
}


// function to fetch the data
async function loadDataByFetchApi(url, jsonData) {
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


// to load data for deaf donut chart
async function initLoadDeafDonut() {
  let jsonData = new Object();
  jsonData.affectedUsers = "Deaf";
  let jsonResponse = await loadDataByFetchApi(url, jsonData);
  // console.log(jsonResponse);
  setDeafDonut(jsonResponse.Total, jsonResponse.Affected);
}

// to load data for blind donut chart
async function initLoadBlindDonut() {
  let jsonData = new Object();
  jsonData.affectedUsers = "Blind";
  let jsonResponse = await loadDataByFetchApi(url, jsonData);
  console.log(jsonResponse);
  setBlindDonut(jsonResponse.Total, jsonResponse.Affected);
}


// to load data for low vision donut chart
async function initLoadLowVisionDonut() {
  let jsonData = new Object();
  jsonData.affectedUsers = "Low_Vision";
  let jsonResponse = await loadDataByFetchApi(url, jsonData);
  console.log(jsonResponse);
  setLowVisionDonut(jsonResponse.Total, jsonResponse.Affected);
}

// to load data for motor donut chart
async function initLoadMotorDonut() {
  let jsonData = new Object();
  jsonData.affectedUsers = "Motor";
  let jsonResponse = await loadDataByFetchApi(url, jsonData);
  console.log(jsonResponse);
  setMotorDonut(jsonResponse.Total, jsonResponse.Affected);
}


// to load data for cognitive donut chart
async function initLoadCognitiveDonut() {
  let jsonData = new Object();
  jsonData.affectedUsers = "Cognitive";
  let jsonResponse = await loadDataByFetchApi(url, jsonData);
  console.log(jsonResponse);
  setCognitiveDonut(jsonResponse.Total, jsonResponse.Affected);
}

// to load data for color blindness donut chart
async function initLoadColorBlindnessDonut() {
  let jsonData = new Object();
  jsonData.affectedUsers = "Color_Blindness";
  let jsonResponse = await loadDataByFetchApi(url, jsonData);
  console.log(jsonResponse);
  setColorBlindnessDonut(jsonResponse.Total, jsonResponse.Affected);
}

// to load data for illiterate donut chart
async function initLoadIlliterateDonut() {
  let jsonData = new Object();
  jsonData.affectedUsers = "Illiterate";
  let jsonResponse = await loadDataByFetchApi(url, jsonData);
  setIlliterateDonut(jsonResponse.Total, jsonResponse.Affected);
}

async function initLoadAllDonut(){
  let jsonData = new Object();
  jsonData.affectedUsers = "All_User";
  let jsonResponse = await loadDataByFetchApi(url, jsonData);
  console.log(jsonResponse);
  setAllDonutChart(jsonResponse.Total,jsonResponse.Affected);
}