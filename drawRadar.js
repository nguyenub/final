window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

var margin = { top: 100, right: 700, bottom: 100, left: 100 },
  width = Math.min(1200, window.innerWidth - 10) - margin.left - margin.right,
  height = Math.min(
    width,
    window.innerHeight - margin.top - margin.bottom - 20
  );


var data = [
  [
    //Finland
       {
        "axis":"GDP Per Capita",
        "value":0.265084075
      },
      {
        "axis":"Social Support",
        "value":0.313946588
      },
      {
        "axis":"Life Expectancy",
        "value":0.195054402
      },
      {
        "axis":"Human Freedom",
        "value":0.117903066
      },
      {
        "axis":"Generosity",
        "value":0.030267062
      },
      {
        "axis":"Perceptions of Corruption",
        "value":0.077744807
      }
  ],  [
    //Domincan Republic
      {
        "axis":"GDP Per Capita",
        "value":0.259856631
      },
      {
        "axis":"Social Support",
        "value":0.358678955
      },
      {
        "axis":"Life Expectancy",
        "value":0.199436764
      },
      {
        "axis":"Human Freedom",
        "value":0.127240143
      },
      {
        "axis":"Generosity",
        "value":0.028929852
      },
      {
        "axis":"Perceptions of Corruption",
        "value":0.025857655
      }
    ],[ 
      //South Sudan
      {
        "axis":"GDP Per Capita",
        "value":0.206896552
      },
      {
        "axis":"Social Support",
        "value":0.3887762
      },
      {
        "axis":"Life Expectancy",
        "value":0.199459094
      },
      {
        "axis":"Human Freedom",
        "value":0.006761325
      },
      {
        "axis":"Generosity",
        "value":0.136578769	
      },
      {
        "axis":"Perceptions of Corruption",
        "value":0.061528059
      }]
];


var color = d3.scaleOrdinal()
				.range(["#EDC951","#CC333F","#00A0B0"]);


//var color = d3.scaleThreshold()
    //.range(d3.schemeBlues[3]);

var radarChartOptions = {
  w: width,
  h: height,
  margin: margin,
  maxValue: .4,
  levels: 5,
  roundStrokes: true,
  color: color,
  value: "value"
};

RadarChart(".radarChart", data, radarChartOptions);



