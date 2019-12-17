function setAllDonutChart(total, yes){
    let no = total - yes;
    const allChart = c3.generate({
        bindto: "#all-chart",
        data: {
            columns: [
                ['Yes',30],
                ['No', 60],
            ],
            type : 'donut',
            onclick: function (d, i) { console.log("onclick", d, i); },
            onmouseover: function (d, i) { console.log("onmouseover", d, i); },
            onmouseout: function (d, i) { console.log("onmouseout", d, i); },

            colors: {
                Yes:'#000000',
                No: '#99965c'
              },
              labels: false
        },
        donut: {
            title: "All",
            padAngle : .03
        }
        // size:{
        //     width:200,
        //     height:200
        // }
    });
    // setTimeout(function () {
    //     allChart.load({
    //         columns: [
    //             ["d1", 5,5,5,5,5,5,5,5,5,5],
    //             ["d2",25,25],
    //             ["d3",10,10,10,10,10]

    //         ]
    //     });
    // }, 1500);
    // setTimeout(function () {
    //     allChart.unload({
    //         ids: 'Yes'
    //     });
    //     allChart.unload({
    //         ids: 'No'
    //     });
    // }, 2500);
}

export default setAllDonutChart;

