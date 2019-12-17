document.getElementById("nav-gov").addEventListener('click', gotoGovContent);
document.getElementById("nav-uni").addEventListener('click', gotoUniContent);
document.getElementById("nav-others").addEventListener('click', gotoOthersContent);
if(document.getElementById("nav-gov").classList.contains("active")){
    gotoGovContent()
}

function gotoGovContent(){
    // alert("clicked on gov");

    document.getElementById("nav-uni").classList.contains("active")?document.getElementById("nav-uni").classList.remove("active") : true;
    document.getElementById("nav-others").classList.remove("active")?document.getElementById("nav-others").classList.remove("active") : true;
    document.getElementById("nav-gov").classList.add("active");
    const allChart = c3.generate({
        bindto: "#all-chart-content",
        data: {
            columns: [
                ['Yes',40],
                ['No', 120],
            ],
            type : 'donut',
            onclick: function (d, i) { console.log("onclick", d, i); },
            onmouseover: function (d, i) { console.log("onmouseover", d, i); },
            onmouseout: function (d, i) { console.log("onmouseout", d, i); }
        },
        donut: {
            title: "Gov"
        }
    });
}
function gotoUniContent(){
    document.getElementById("nav-gov").classList.contains("active")?document.getElementById("nav-gov").classList.remove("active") : true;
    document.getElementById("nav-others").classList.contains("active")?document.getElementById("nav-others").classList.remove("active") : true;
    document.getElementById("nav-uni").classList.add("active");
    const allChart = c3.generate({
        bindto: "#all-chart-content",
        data: {
            columns: [
                ['Yes',40],
                ['No', 120],
            ],
            type : 'donut',
            onclick: function (d, i) { console.log("onclick", d, i); },
            onmouseover: function (d, i) { console.log("onmouseover", d, i); },
            onmouseout: function (d, i) { console.log("onmouseout", d, i); }
        },
        donut: {
            title: "University"
        }
    });
}
function gotoOthersContent(){
    document.getElementById("nav-gov").classList.contains("active")?document.getElementById("nav-gov").classList.remove("active") : true;
    document.getElementById("nav-uni").classList.contains("active")?document.getElementById("nav-uni").classList.remove("active") : true;
    document.getElementById("nav-others").classList.add("active");
    const allChart = c3.generate({
        bindto: "#all-chart-content",
        data: {
            columns: [
                ['Yes',40],
                ['No', 120],
            ],
            type : 'donut',
            onclick: function (d, i) { console.log("onclick", d, i); },
            onmouseover: function (d, i) { console.log("onmouseover", d, i); },
            onmouseout: function (d, i) { console.log("onmouseout", d, i); }
        },
        donut: {
            title: "Others"
        }
    });
}



function govChart(){

}