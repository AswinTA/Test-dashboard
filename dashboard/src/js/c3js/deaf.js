function setDeafDonut(total, Affected) {
  let no = total - Affected;
  var chart = c3.generate({
    bindto: "#deaf-chart",
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
    donut: {
      title: "Deaf"
    },
    color: {
      pattern: ['#db0e0e', '#2ba11b']
    }
  });
}
export default setDeafDonut;