function setLowVisionDonut(total, Affected){
    let no = total - Affected;
    var chart = c3.generate({
        bindto: "#low-vision-chart",
        data: {
            columns: [
                ['Affected', Affected],
                ['Not Affected', no],
            ],
            type : 'donut',
            onclick: function (d, i) { console.log("onclick", d, i); },
            onmouseover: function (d, i) { console.log("onmouseover", d, i); },
            onmouseout: function (d, i) { console.log("onmouseout", d, i); }
        },
        donut: {
            title: "Low Vision",
            padAngle: .02
        },
        color: {
            pattern: ['#db0e0e', '#2ba11b']
        }
    });
}
export default setLowVisionDonut;

