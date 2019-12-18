function setBlindDonut(total, Affected) {
    let no = total - Affected;
    var chart = c3.generate({
        bindto: "#blind-chart",
        data: {
            columns: [
                ['Affected', Affected],
                ['Not Affected', no],
            ],
            type: 'donut',
            onclick: function (d, i) { console.log("onclick", d, i); },
            onmouseover: function (d, i) { console.log("onmouseover", d, i); },
            onmouseout: function (d, i) { console.log("onmouseout", d, i); }
        },
        color: {
            pattern: ['#db0e0e', '#2ba11b']
        },
        donut: {
            title: "Blind"
        }
    });
}
export default setBlindDonut;