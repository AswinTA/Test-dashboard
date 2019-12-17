import setDeafDonut from "./deaf"
import setBlindDonut from "./blind"

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

function loadAllCharts(){
  initLoadDeafDonut();
  initLoadBlindDonut()
}