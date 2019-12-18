function setMotorDonut(total,Affected){
    let no = total - Affected;
    var chart = c3.generate({
        bindto: "#motor-chart",
        data: {
            columns: [
                ['Affected', Affected],
                ['Not_Affected', no],
            ],
            colors: {
                Affected: '#db0e0e',
                Not_Affected: '#2ba11b'
            }, 
            type : 'donut',
            onclick: function (d, i) { console.log("onclick", d, i); },
            onmouseover: function (d, i) { console.log("onmouseover", d, i); },
            onmouseout: function (d, i) { console.log("onmouseout", d, i); }
        },
        donut: {
            title: "Motor"
        }
    });
}
export default setMotorDonut;