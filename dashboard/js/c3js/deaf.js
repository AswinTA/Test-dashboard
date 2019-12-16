

// setTimeout(function () {
//     chart.load({
//         columns: [
//             ["Yes", 0.9, 0.2, 0.9, 0.2, 0.2, 0.4, 0.3, 0.2, 0.2, 0.9, 0.2, 0.2, 0.9, 0.9, 0.2, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0.4, 0.2, 0.5, 0.2, 0.2, 0.4, 0.2, 0.2, 0.2, 0.2, 0.4, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1, 0.2, 0.2, 0.3, 0.3, 0.2, 0.6, 0.4, 0.3, 0.2, 0.2, 0.2, 0.2],
//             ["No", 1.4, 1.5, 1.5, 1.3, 1.5, 1.3, 1.6, 1.0, 1.3, 1.4, 1.0, 1.5, 1.0, 1.4, 1.3, 1.4, 1.5, 1.0, 1.5, 1.1, 1.8, 1.3, 1.5, 1.2, 1.3, 1.4, 1.4, 1.7, 1.5, 1.0, 1.1, 1.0, 1.2, 1.6, 1.5, 1.6, 1.5, 1.3, 1.3, 1.3, 1.2, 1.4, 1.2, 1.0, 1.3, 1.2, 1.3, 1.3, 1.1, 1.3],
//         ]
//     });
// }, 1500);

// setTimeout(function () {
//     chart.unload({
//         ids: 'data1'
//     });
//     chart.unload({
//         ids: 'data2'
//     });
// }, 2500);
document.onload = loadDeafData();

async function loadDeafData(){

    let url ="http://192.168.35.34:7555/";
    let jsonData = new Object();
    jsonData.affectedUsers = "Deaf";
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
      let json = await response.json();
      console.log(json)
      let total = 126;
      let yes = total - json;
      let no = total -yes;

      var chart = c3.generate({
        bindto: "#deaf-chart",
        data: {
            columns: [
                ['Yes',yes],
                ['No', no],
            ],
            type : 'donut',
            onclick: function (d, i) { console.log("onclick", d, i); },
            onmouseover: function (d, i) { console.log("onmouseover", d, i); },
            onmouseout: function (d, i) { console.log("onmouseout", d, i); }
        },
        donut: {
            title: "Deaf"
        }
    });


    } else {
      alert("HTTP-Error: " + response.status);
    }
}
