function setAllDonutChart(total, Affected) {
    let no = total - Affected;
    let notaffected = "Not Affected";
    const allChart = c3.generate({
        bindto: "#all-chart",
        // all features
        // size: {
        //     width: 400,
        //     height: 400
        // },
        // padding: {
        //     top: 50,
        //     left: 50,
        //     right: 50,
        //     bottom: 50
        // },
        // // color: {
        // //     pattern: ['#1f77b4', '#aec7e8']
        // //   },
        // transition: {
        //     duration: 500
        // },
        // oninit: function () { console.log("Chart initialized") },
        // onrendered: function () {console.log("Chart is rendered") },
        // onresize: function () { console.log("Screen is resized")},


        // all features
        data: {
        columns: [
            ['Affected', Affected],
            ['Not Affected', no],
        ],
        type: 'donut',
        onclick: function (d, i) { /* console.log("onclick", d, i); */ },
        onmouseover: function (d, i) {/*  console.log("onmouseover", d, i); */ },
        onmouseout: function (d, i) { /* console.log("onmouseout", d, i); */ },

        // colors: {
        //     Affected: '#db0e0e',
        //     NotAffected: '#2ba11b'
        // }, 

        labels: false
    },
        donut: {
        title: "All",
        padAngle: .02
    },
    color: {
        pattern: ['#db0e0e', '#2ba11b']
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
    //         ids: 'Not Affected'
    //     });
    // }, 2500);
}

export default setAllDonutChart;

