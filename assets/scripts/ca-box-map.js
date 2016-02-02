/* CREDITS:
- Implementation based on David Mimno's US states box map: https://gist.github.com/mimno/4a904031a566a361f2b1
- Box map concept was inspired by Allison McCann's graphic for 538: http://fivethirtyeight.com/features/where-your-state-gets-its-money/
*/

// Load Data

counties = {
	"ALA": {
		"abrev": "ALA",
		"name": "Alameda",
		"row": 7,
		"col": 4,
		"score": 3
	},
	"ALP": {
		"abrev": "ALP",
		"name": "Alpine",
		"row": 5,
		"col": 5,
		"score": 1
	},
	"AMA": {
		"abrev": "AMA",
		"name": "Amador",
		"row": 3,
		"col": 3,
		"score": 1
	},
	"BUT": {
		"abrev": "BUT",
		"name": "Butte",
		"row": 1,
		"col": 2,
		"score": 3
	},
	"CAL": {
		"abrev": "CAL",
		"name": "Calaveras",
		"row": 4,
		"col": 4,
		"score": 1
	},
	"COL": {
		"abrev": "COL",
		"name": "Colusa",
		"row": 3,
		"col": 1,
		"score": 1
	},
	"CC": {
		"abrev": "CC",
		"name": "Contra Costa",
		"row": 6,
		"col": 3,
		"score": 2
	},
	"DN": {
		"abrev": "DN",
		"name": "Del Norte",
		"row": 0,
		"col": 0,
		"score": 1
	},
	"ED": {
		"abrev": "ED",
		"name": "El Dorado",
		"row": 3,
		"col": 4,
		"score": 1.5
	},
	"FRE": {
		"abrev": "FRE",
		"name": "Fresno",
		"row": 9,
		"col": 6,
		"score": 2
	},
	"GLE": {
		"abrev": "GLE",
		"name": "Glenn",
		"row": 2,
		"col": 0,
		"score": 1
	},
	"HUM": {
		"abrev": "HUM",
		"name": "Humboldt",
		"row": 1,
		"col": 0,
		"score": 1
	},
	"IMP": {
		"abrev": "IMP",
		"name": "Imperial",
		"row": 12,
		"col": 7,
		"score": 1
	},
	"INY": {
		"abrev": "INY",
		"name": "Inyo",
		"row": 8,
		"col": 7,
		"score": 1
	},
	"KER": {
		"abrev": "KER",
		"name": "Kern",
		"row": 10,
		"col": 7,
		"score": 2
	},
	"KIN": {
		"abrev": "KIN",
		"name": "Kings",
		"row": 9,
		"col": 7,
		"score": 0
	},
	"LAK": {
		"abrev": "LAK",
		"name": "Lake",
		"row": 4,
		"col": 0,
		"score": 0
	},
	"LAS": {
		"abrev": "LAS",
		"name": "Lassen",
		"row": 1,
		"col": 4,
		"score": 0
	},
	"LA": {
		"abrev": "LA",
		"name": "Los Angeles",
		"row": 11,
		"col": 6,
		"score": 3
	},
	"MAD": {
		"abrev": "MAD",
		"name": "Madera",
		"row": 8,
		"col": 6,
		"score": 1
	},
	"MRN": {
		"abrev": "MRN",
		"name": "Marin",
		"row": 6,
		"col": 2,
		"score": 3
	},
	"MPA": {
		"abrev": "MPA",
		"name": "Mariposa",
		"row": 7,
		"col": 6,
		"score": 0
	},
	"MEN": {
		"abrev": "MEN",
		"name": "Mendocino",
		"row": 3,
		"col": 0,
		"score": 2
	},
	"MER": {
		"abrev": "MER",
		"name": "Merced",
		"row": 7,
		"col": 5,
		"score": 2
	},
	"MOD": {
		"abrev": "MOD",
		"name": "Modoc",
		"row": 0,
		"col": 4,
		"score": 1
	},
	"MNO": {
		"abrev": "MNO",
		"name": "Mono",
		"row": 6,
		"col": 5,
		"score": 1
	},
	"MON": {
		"abrev": "MON",
		"name": "Monterey",
		"row": 9,
		"col": 4,
		"score": 0
	},
	"NAP": {
		"abrev": "NAP",
		"name": "Napa",
		"row": 4,
		"col": 1,
		"score": 1.5
	},
	"NEV": {
		"abrev": "NEV",
		"name": "Nevada",
		"row": 2,
		"col": 4,
		"score": 1.5
	},
	"ORA": {
		"abrev": "ORA",
		"name": "Orange",
		"row": 11,
		"col": 7,
		"score": 3
	},
	"PLA": {
		"abrev": "PLA",
		"name": "Placer",
		"row": 3,
		"col": 2,
		"score": 3
	},
	"PLU": {
		"abrev": "PLU",
		"name": "Plumas",
		"row": 1,
		"col": 3,
		"score": 1
	},
	"RIV": {
		"abrev": "RIV",
		"name": "Riverside",
		"row": 11,
		"col": 8,
		"score": 3
	},
	"SAC": {
		"abrev": "SAC",
		"name": "Sacramento",
		"row": 4,
		"col": 3,
		"score": 3
	},
	"SBT": {
		"abrev": "SBT",
		"name": "San Benito",
		"row": 9,
		"col": 5,
		"score": 2
	},
	"SBD": {
		"abrev": "SBD",
		"name": "San Bernardino",
		"row": 10,
		"col": 8,
		"score": 3
	},
	"SD": {
		"abrev": "SD",
		"name": "San Diego",
		"row": 12,
		"col": 6,
		"score": 2
	},
	"SF": {
		"abrev": "SF",
		"name": "San Francisco",
		"row": 7,
		"col": 3,
		"score": 3
	},
	"SJ": {
		"abrev": "SJ",
		"name": "San Joaquin",
		"row": 5,
		"col": 3,
		"score": 3
	},
	"SLO": {
		"abrev": "SLO",
		"name": "San Luis Obispo",
		"row": 10,
		"col": 5,
		"score": 3
	},
	"SM": {
		"abrev": "SM",
		"name": "San Mateo",
		"row": 8,
		"col": 4,
		"score": 3
	},
	"SB": {
		"abrev": "SB",
		"name": "Santa Barbara",
		"row": 10,
		"col": 6,
		"score": 3
	},
	"SCL": {
		"abrev": "SCL",
		"name": "Santa Clara",
		"row": 8,
		"col": 5,
		"score": 3
	},
	"SCR": {
		"abrev": "SCR",
		"name": "Santa Cruz",
		"row": 8,
		"col": 3,
		"score": 2
	},
	"SHA": {
		"abrev": "SHA",
		"name": "Shasta",
		"row": 0,
		"col": 3,
		"score": 0
	},
	"SIE": {
		"abrev": "SIE",
		"name": "Sierra",
		"row": 2,
		"col": 3,
		"score": 0
	},
	"SIS": {
		"abrev": "SIS",
		"name": "Siskiyou",
		"row": 0,
		"col": 2,
		"score": 1
	},
	"SOL": {
		"abrev": "SOL",
		"name": "Solano",
		"row": 5,
		"col": 2,
		"score": 1.5
	},
	"SON": {
		"abrev": "SON",
		"name": "Sonoma",
		"row": 5,
		"col": 1,
		"score": 2
	},
	"STA": {
		"abrev": "STA",
		"name": "Stanislaus",
		"row": 6,
		"col": 4,
		"score": 1
	},
	"SUT": {
		"abrev": "SUT",
		"name": "Sutter",
		"row": 2,
		"col": 1,
		"score": 0
	},
	"TEH": {
		"abrev": "TEH",
		"name": "Tehama",
		"row": 1,
		"col": 1,
		"score": 0
	},
	"TRI": {
		"abrev": "TRI",
		"name": "Trinity",
		"row": 0,
		"col": 1,
		"score": 0
	},
	"TUL": {
		"abrev": "TUL",
		"name": "Tulare",
		"row": 9,
		"col": 8,
		"score": 0
	},
	"TUO": {
		"abrev": "TUO",
		"name": "Tuolumne",
		"row": 5,
		"col": 4,
		"score": 1.5
	},
	"VEN": {
		"abrev": "VEN",
		"name": "Ventura",
		"row": 11,
		"col": 5,
		"score": 3
	},
	"YOL": {
		"abrev": "YOL",
		"name": "Yolo",
		"row": 4,
		"col": 2,
		"score": 1
	},
	"YUB": {
		"abrev": "YUB",
		"name": "Yuba",
		"row": 2,
		"col": 2,
		"score": 1
	}
};

// generate array of IDs to access the counties object
var countyIDs = Object.getOwnPropertyNames(counties);






scoreDescriptions = {
	'3': "Puts filings online in a machine-readable format",
	'2': "Puts filings online, but only in PDF format",
	'1.5': "PDFs available by contacting the County",
	'1': "Have to visit an office to view paper filings",
	'0': "Unknown"
}


// =======
// d3 plot
// =======

// set array of map colors
mapColors = ['#C85418', '#EA7200', '#E9A100', '#59A464', '#A6AAA9'];

// set layout parameters
var height = 500;
var width = 350;

// var height = 1000;
// var width = 700;

var cols = 9;
var rows = 13;

var gap = 5;
var countyWidth = Math.round((width / cols) - gap);

// build plot
var xScale, yScale, xDomain, yDomain;

var svg = d3.select("#plot").append("svg")
	.attr("height", height)
	.attr("width", width);

var countyGroup = svg.append("g");

var countyXScale = d3.scale.linear().domain([0,cols]).range([0, cols * (countyWidth + gap)]);
var countyYScale = d3.scale.linear().domain([0,rows]).range([0, rows * (countyWidth + gap)]);


var countyGroups = countyGroup.selectAll("g").data(countyIDs)
	.enter().append("g")
	.attr("transform", function (countyID) { 
		return "translate(" + countyXScale(counties[countyID].col) + "," + (countyYScale(counties[countyID].row) - 2) + ")"; 
	});

var countyRects = countyGroups.append("rect")
	.attr("width", countyWidth).attr("height", countyWidth)
	// .style("fill", "#ccc")
	.style("fill", function (countyID) { 

		// access score from object
		countyScore = counties[countyID]["score"];
        

		switch(countyScore) {
			case 3:
				color = mapColors[3];
				break;
			case 2:
				color = mapColors[2];
				break;
			case 1.5:
				color = mapColors[1];
				break;
			case 1:
				color = mapColors[0];
				break;
			default:
				color = mapColors[4];
		}

		return color;
	});

function mouseoverHandler(d, i) {  // Add interactivity
          //console.log(d, i);
            // Use D3 to select element
//          id = d3.select(this).attr("width", function (id) {console.log(id);});
          updateBox(d);
          }

function updateBox(id) {
      score = counties[id]["score"];
      console.log(counties[id]["name"]);
      console.log(counties[id]["score"]);
      console.log(scoreDescriptions[score]);
  
      d3.select("#display_title").text(counties[id]["name"]);
      d3.select("#display_info").text(scoreDescriptions[score]);
    }

function mouseoutHandler(d, i) {  // Add interactivity

            // Use D3 to select element, change color and size
      d3.select("#display_title").text("");
      d3.select("#display_info").text("");
          }



	//	countyFullName = counties[countyID]["name"];
    //    countyScore = counties[countyID]["score"];
/*
		switch(countyScore) {
			case 3:
				description = "Puts filings online in a machine-readable format";
				break;
			case 2:
				description = "Puts filings online, but only in PDF format";
				break;
			case 1.5:
				description = "PDFs available by contacting the County";
				break;
			case 1:
				description = "Have to visit an office to view paper filings";
				break;
			default:
				description = "Unknown";
		}

		return description;
	});

*/

// add labels to each county
countyGroups.append("text")
	.attr("class", "countyAbbr")
	.attr("x", countyWidth / 2)
	.attr("y", countyWidth / 2)
	.attr("text-anchor", "middle")
	.attr("alignment-baseline", "central")
	.text(function (d) { return d; });

countyGroups.on("mouseover", mouseoverHandler)
    .on("mouseout", mouseoutHandler);

countyGroups.append("rect")
    .attr("width", countyWidth)
    .attr("height", countyWidth)
    .style("fill", "rgba(0,0,0,0)");

                                