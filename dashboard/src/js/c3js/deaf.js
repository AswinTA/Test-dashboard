function setDeafDonut(total, yes) {
  let no = total - yes;
  var chart = c3.generate({
    bindto: "#deaf-chart",
    data: {
      columns: [
        ['Yes', yes],
        ['No', no],
      ],
      type: 'donut',
      onclick: function (d, i) { console.log("onclick", d, i); },
      onmouseover: function (d, i) { console.log("onmouseover", d, i); },
      onmouseout: function (d, i) { console.log("onmouseout", d, i); }
    },
    donut: {
      title: "Deaf"
    }
  });
}
export default setDeafDonut;