/* CREDITS:
- Implementation adapted from David Mimno's US states box map: https://gist.github.com/mimno/4a904031a566a361f2b1
- Box map concept was inspired by Allison McCann's graphic for 538: http://fivethirtyeight.com/features/where-your-state-gets-its-money/
*/

// Load Data

counties = {
	"ALA": {
		"abrev": "ALA",
		"name": "Alameda",
		"row": 7,
		"col": 4,
		"score": 3,
		"county_pop": 1559308,
		"notes": ""
	},
	"ALP": {
		"abrev": "ALP",
		"name": "Alpine",
		"row": 5,
		"col": 5,
		"score": 1,
		"county_pop": 1202,
		"notes": ""
	},
	"AMA": {
		"abrev": "AMA",
		"name": "Amador",
		"row": 3,
		"col": 3,
		"score": 1,
		"county_pop": 37159,
		"notes": ""
	},
	"BUT": {
		"abrev": "BUT",
		"name": "Butte",
		"row": 1,
		"col": 2,
		"score": 3,
		"county_pop": 221578,
		"notes": ""
	},
	"CAL": {
		"abrev": "CAL",
		"name": "Calaveras",
		"row": 4,
		"col": 4,
		"score": 1,
		"county_pop": 44921,
		"notes": ""
	},
	"COL": {
		"abrev": "COL",
		"name": "Colusa",
		"row": 3,
		"col": 1,
		"score": 1,
		"county_pop": 21424,
		"notes": ""
	},
	"CC": {
		"abrev": "CC",
		"name": "Contra Costa",
		"row": 6,
		"col": 3,
		"score": 2,
		"county_pop": 1081232,
		"notes": ""
	},
	"DN": {
		"abrev": "DN",
		"name": "Del Norte",
		"row": 0,
		"col": 0,
		"score": 1,
		"county_pop": 28066,
		"notes": ""
	},
	"ED": {
		"abrev": "ED",
		"name": "El Dorado",
		"row": 3,
		"col": 4,
		"score": 1.5,
		"county_pop": 181465,
		"notes": ""
	},
	"FRE": {
		"abrev": "FRE",
		"name": "Fresno",
		"row": 9,
		"col": 6,
		"score": 2,
		"county_pop": 948844,
		"notes": ""
	},
	"GLE": {
		"abrev": "GLE",
		"name": "Glenn",
		"row": 2,
		"col": 0,
		"score": 1,
		"county_pop": 28019,
		"notes": ""
	},
	"HUM": {
		"abrev": "HUM",
		"name": "Humboldt",
		"row": 1,
		"col": 0,
		"score": 1,
		"county_pop": 134876,
		"notes": ""
	},
	"IMP": {
		"abrev": "IMP",
		"name": "Imperial",
		"row": 12,
		"col": 7,
		"score": 1,
		"county_pop": 177026,
		"notes": ""
	},
	"INY": {
		"abrev": "INY",
		"name": "Inyo",
		"row": 8,
		"col": 7,
		"score": 1,
		"county_pop": 18439,
		"notes": ""
	},
	"KER": {
		"abrev": "KER",
		"name": "Kern",
		"row": 10,
		"col": 7,
		"score": 2,
		"county_pop": 857730,
		"notes": ""
	},
	"KIN": {
		"abrev": "KIN",
		"name": "Kings",
		"row": 9,
		"col": 7,
		"score": 1,
		"county_pop": 151390,
		"notes": ""
	},
	"LAK": {
		"abrev": "LAK",
		"name": "Lake",
		"row": 4,
		"col": 0,
		"score": 1,
		"county_pop": 64209,
		"notes": ""
	},
	"LAS": {
		"abrev": "LAS",
		"name": "Lassen",
		"row": 1,
		"col": 4,
		"score": 1,
		"county_pop": 33356,
		"notes": ""
	},
	"LA": {
		"abrev": "LA",
		"name": "Los Angeles",
		"row": 11,
		"col": 6,
		"score": 3,
		"county_pop": 9974203,
		"notes": ""
	},
	"MAD": {
		"abrev": "MAD",
		"name": "Madera",
		"row": 8,
		"col": 6,
		"score": 1,
		"county_pop": 152452,
		"notes": ""
	},
	"MRN": {
		"abrev": "MRN",
		"name": "Marin",
		"row": 6,
		"col": 2,
		"score": 3,
		"county_pop": 256802,
		"notes": ""
	},
	"MPA": {
		"abrev": "MPA",
		"name": "Mariposa",
		"row": 7,
		"col": 6,
		"score": 1,
		"county_pop": 17946,
		"notes": ""
	},
	"MEN": {
		"abrev": "MEN",
		"name": "Mendocino",
		"row": 3,
		"col": 0,
		"score": 2,
		"county_pop": 87612,
		"notes": ""
	},
	"MER": {
		"abrev": "MER",
		"name": "Merced",
		"row": 7,
		"col": 5,
		"score": 2,
		"county_pop": 261609,
		"notes": ""
	},
	"MOD": {
		"abrev": "MOD",
		"name": "Modoc",
		"row": 0,
		"col": 4,
		"score": 1,
		"county_pop": 9335,
		"notes": ""
	},
	"MNO": {
		"abrev": "MNO",
		"name": "Mono",
		"row": 6,
		"col": 5,
		"score": 1,
		"county_pop": 14193,
		"notes": "Moving to a newer system"
	},
	"MON": {
		"abrev": "MON",
		"name": "Monterey",
		"row": 9,
		"col": 4,
		"score": 2,
		"county_pop": 424927,
		"notes": ""
	},
	"NAP": {
		"abrev": "NAP",
		"name": "Napa",
		"row": 4,
		"col": 1,
		"score": 1.5,
		"county_pop": 139253,
		"notes": ""
	},
	"NEV": {
		"abrev": "NEV",
		"name": "Nevada",
		"row": 2,
		"col": 4,
		"score": 1.5,
		"county_pop": 98606,
		"notes": "Moving to a newer system"
	},
	"ORA": {
		"abrev": "ORA",
		"name": "Orange",
		"row": 11,
		"col": 7,
		"score": 3,
		"county_pop": 3086331,
		"notes": ""
	},
	"PLA": {
		"abrev": "PLA",
		"name": "Placer",
		"row": 3,
		"col": 2,
		"score": 3,
		"county_pop": 361518,
		"notes": ""
	},
	"PLU": {
		"abrev": "PLU",
		"name": "Plumas",
		"row": 1,
		"col": 3,
		"score": 1,
		"county_pop": 19286,
		"notes": ""
	},
	"RIV": {
		"abrev": "RIV",
		"name": "Riverside",
		"row": 11,
		"col": 8,
		"score": 3,
		"county_pop": 2266899,
		"notes": ""
	},
	"SAC": {
		"abrev": "SAC",
		"name": "Sacramento",
		"row": 4,
		"col": 3,
		"score": 3,
		"county_pop": 1450277,
		"notes": ""
	},
	"SBT": {
		"abrev": "SBT",
		"name": "San Benito",
		"row": 9,
		"col": 5,
		"score": 2,
		"county_pop": 56888,
		"notes": ""
	},
	"SBD": {
		"abrev": "SBD",
		"name": "San Bernardino",
		"row": 10,
		"col": 8,
		"score": 3,
		"county_pop": 2078586,
		"notes": ""
	},
	"SD": {
		"abrev": "SD",
		"name": "San Diego",
		"row": 12,
		"col": 6,
		"score": 2,
		"county_pop": 3183143,
		"notes": ""
	},
	"SF": {
		"abrev": "SF",
		"name": "San Francisco",
		"row": 7,
		"col": 3,
		"score": 3,
		"county_pop": 829072,
		"notes": ""
	},
	"SJ": {
		"abrev": "SJ",
		"name": "San Joaquin",
		"row": 5,
		"col": 3,
		"score": 3,
		"county_pop": 701050,
		"notes": ""
	},
	"SLO": {
		"abrev": "SLO",
		"name": "San Luis Obispo",
		"row": 10,
		"col": 5,
		"score": 3,
		"county_pop": 274184,
		"notes": ""
	},
	"SM": {
		"abrev": "SM",
		"name": "San Mateo",
		"row": 8,
		"col": 4,
		"score": 3,
		"county_pop": 739837,
		"notes": ""
	},
	"SB": {
		"abrev": "SB",
		"name": "Santa Barbara",
		"row": 10,
		"col": 6,
		"score": 3,
		"county_pop": 431555,
		"notes": ""
	},
	"SCL": {
		"abrev": "SCL",
		"name": "Santa Clara",
		"row": 8,
		"col": 5,
		"score": 3,
		"county_pop": 1841569,
		"notes": ""
	},
	"SCR": {
		"abrev": "SCR",
		"name": "Santa Cruz",
		"row": 8,
		"col": 3,
		"score": 2,
		"county_pop": 267203,
		"notes": "Moving to a newer system"
	},
	"SHA": {
		"abrev": "SHA",
		"name": "Shasta",
		"row": 0,
		"col": 3,
		"score": 1,
		"county_pop": 178520,
		"notes": ""
	},
	"SIE": {
		"abrev": "SIE",
		"name": "Sierra",
		"row": 2,
		"col": 3,
		"score": 1,
		"county_pop": 3019,
		"notes": ""
	},
	"SIS": {
		"abrev": "SIS",
		"name": "Siskiyou",
		"row": 0,
		"col": 2,
		"score": 1,
		"county_pop": 44261,
		"notes": ""
	},
	"SOL": {
		"abrev": "SOL",
		"name": "Solano",
		"row": 5,
		"col": 2,
		"score": 1.5,
		"county_pop": 421624,
		"notes": "Moving to a newer system"
	},
	"SON": {
		"abrev": "SON",
		"name": "Sonoma",
		"row": 5,
		"col": 1,
		"score": 2,
		"county_pop": 491790,
		"notes": ""
	},
	"STA": {
		"abrev": "STA",
		"name": "Stanislaus",
		"row": 6,
		"col": 4,
		"score": 1,
		"county_pop": 522794,
		"notes": ""
	},
	"SUT": {
		"abrev": "SUT",
		"name": "Sutter",
		"row": 2,
		"col": 1,
		"score": 1,
		"county_pop": 95067,
		"notes": ""
	},
	"TEH": {
		"abrev": "TEH",
		"name": "Tehama",
		"row": 1,
		"col": 1,
		"score": 1,
		"county_pop": 63284,
		"notes": ""
	},
	"TRI": {
		"abrev": "TRI",
		"name": "Trinity",
		"row": 0,
		"col": 1,
		"score": 1.5,
		"county_pop": 13515,
		"notes": ""
	},
	"TUL": {
		"abrev": "TUL",
		"name": "Tulare",
		"row": 9,
		"col": 8,
		"score": 1,
		"county_pop": 451108,
		"notes": ""
	},
	"TUO": {
		"abrev": "TUO",
		"name": "Tuolumne",
		"row": 5,
		"col": 4,
		"score": 1.5,
		"county_pop": 54347,
		"notes": ""
	},
	"VEN": {
		"abrev": "VEN",
		"name": "Ventura",
		"row": 11,
		"col": 5,
		"score": 3,
		"county_pop": 835790,
		"notes": ""
	},
	"YOL": {
		"abrev": "YOL",
		"name": "Yolo",
		"row": 4,
		"col": 2,
		"score": 1,
		"county_pop": 204162,
		"notes": ""
	},
	"YUB": {
		"abrev": "YUB",
		"name": "Yuba",
		"row": 2,
		"col": 2,
		"score": 1,
		"county_pop": 73059,
		"notes": ""
	}
};

// generate array of IDs to access the counties object
var countyIDs = Object.getOwnPropertyNames(counties);



scoreDescriptions = {
	'3': "Puts filings online in a searchable format",
	'2': "Puts filings online, but only in PDF format",
	'1.5': "PDFs available by contacting the County",
	'1': "Have to visit an office to view paper filings",
	'0': "Unknown"
}

// set object of map colors
mapColors = {
	'3': '#59A464',
	'2': '#E9A100',
	'1.5': '#EA7200',
	'1': '#C85418',
	'0':'#A6AAA9'
};

// add colors to key
d3.selectAll('.key__item--value').style('background-color', function() {
	score = d3.select(this).attr('data-score');
	color = mapColors[score];
	return(color);
});

// =======
// d3 plot
// =======


// set layout parameters
var height = 500;
var width = 350;

// var height = 1000;
// var width = 700;

var cols = 9;
var rows = 13;

var gap = 4;
var countyWidth = Math.round((width / cols) - gap);


// ==========
// build scales
// ==========

// build scales
var countyXScale = d3.scale.linear().domain([0,cols]).range([0, cols * (countyWidth + gap)]);
var countyYScale = d3.scale.linear().domain([0,rows]).range([0, rows * (countyWidth + gap)]);

// scale to size boxes by population
var county_pops = Object.keys(counties).map(function(key){
	return counties[key]["county_pop"]
}); // build array of pops

var countyPopScale = d3.scale.log()
	.domain([d3.min(county_pops), d3.max(county_pops)])
	.range([0.3, 1]);


// ==========
// build plot
// ==========
var svg = d3.select("#plot").append("svg")
	.attr("height", height)
	.attr("width", width);

var countyGroup = svg.append("g");

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
		color = mapColors[countyScore];
		return color;
	});

// add labels to each county
var countyLabels = countyGroups.append("text")
	.attr("class", "countyAbbr")
	.attr("x", countyWidth / 2)
	.attr("y", countyWidth / 2)
	.attr("text-anchor", "middle")
	.attr("alignment-baseline", "central")
	.text(function (d) { return d; });

// function to make numbers more readable - from http://stackoverflow.com/questions/3883342/add-commas-to-a-number-in-jquery
function commaSeparateNumber(val) {
    while (/(\d+)(\d{3})/.test(val.toString())){
      val = val.toString().replace(/(\d+)(\d{3})/, '$1'+','+'$2');
    }
    return val;
}


// mouseover stuff
function mouseoverHandler(d, i) {
	score = counties[d]["score"];
	county_name = counties[d]["name"] + " County";
	county_pop_str = "Pop. " + commaSeparateNumber(counties[d]["county_pop"]);

	// check if notes
	if(counties[d]["notes"] != "") {
		county_notes = "Note: " + counties[d]["notes"]
		d3.select("#county_notes").text(county_notes);
	}
  
	d3.select("#county_name").text(county_name);
	d3.select("#county_pop").text(county_pop_str);
	d3.select("#county_info").text(scoreDescriptions[score]);

	// class for styling purposes
	d3.select(".map__info").classed("map__info--default", false);
}

function mouseoutHandler(d, i) {

	// reset values
    d3.select("#county_name").text("");
    d3.select("#county_pop").text("");
    d3.select("#county_notes").text("");
    d3.select("#county_info").text("Hover over a County to learn more");

    // class for styling purposes
    d3.select(".map__info").classed("map__info--default", true);
}

countyGroups.on("mouseover", mouseoverHandler).on("mouseout", mouseoutHandler);


// scale counties by pop size if button clicked
var pop_scaled = false;
var default_label_font_size = 0.75;

d3.select('#toggle-scale').on("click", function() {

	// toggle clicked class
	d3.select(this).classed("toggle-btn--clicked", !d3.select(this).classed("toggle-btn--clicked"));

	if(pop_scaled) {

		// reset to defaults
		countyRects.style("transform", "scale(1)");
		countyLabels.style("font-size", default_label_font_size + "em");

		// switch flag
		pop_scaled = false;

	} else {

		// rescale boxes
		countyRects.style("transform", function(countyID) {

			scale_factor = countyPopScale(counties[countyID].county_pop);
			return "scale(" + scale_factor + ")";
		});

		// rescale labels
		countyLabels.style("font-size", function(countyID) {

			scale_factor = countyPopScale(counties[countyID].county_pop);
			return (scale_factor * default_label_font_size ) + "em";
		});

		// switch flag
		pop_scaled = true;
	}

});




                                