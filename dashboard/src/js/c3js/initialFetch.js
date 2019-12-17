import setDeafDonut from "./deaf"

async function loadDeafData(url, jsonData){

    // let url ="http://192.168.35.34:7555/";
    // let jsonData = new Object();
    // jsonData.affectedUsers = "Deaf";
    let response = await fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(jsonData)
      });
    if (response.ok) { // if HTTP-status is 200-299
      // get the response body (the method explained below)
      return json = await response.json();
    //   console.log(json)
    //   let total = json.Total;
    //   let yes = json.Yes;
    //   setDeafDonut(total, yes);
    } else {
      alert("HTTP-Error: " + response.status);
      // setDeafDonut(total, yes);
    }
}
 
let url = "http://192.168.35.34:7555/";
function initLoadDeafDonut(){
    let jsonData = new Object();
    jsonData.affectedUsers = "Deaf";
    jsonResponse = loadDeafData(url,jsonData);
    console.log(jsonResponse);
}