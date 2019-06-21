HTMLWidgets.widget({

  name: 'C3Gauge',

  type: 'output',

  factory: function(el, width, height) {

    return {

        renderValue: function(x) {
          
          if (x.rev === true) {
        	  x.pattern = x["pattern"].reverse();
        	}

        // Check if we have a reference to our chart
        if(typeof(el.chart) == 'undefined'){
        	// create a chart and set options
        	// note that via the c3.js API we bind the chart to the element with id equal to chart1
        	
        	
        	var chart = c3.generate({
        		bindto: el,
        		data: {
            json: [
                x,
            ],
            keys: {
//                x: 'name', // it's possible to specify 'x' when category axis
                value: ['data'],
            }, 
            type: "gauge"
            },
        		gauge: {
        			label:{
        				//returning here the value and not the ratio
        				format: function(value, ratio){ return value;}
        			},
        			min: x["minimum"],
        			max: x["maximum"],
        			width: 15,
        			units: x["units"] //this is only the text for the label
        		},
        		color: {
              pattern: x["pattern"], // the three color levels for the percentage values.
              threshold: {
//            unit: 'value', // percentage is default
//            max: 200, // 100 is default
              values: x["thres"]
            }
          }
        	});

  	      el.chart = chart;

        }else{

          // Update the chart if it already exists
          el.chart.load({
            json: [
                x,
            ],
            keys: {
//                x: 'name', // it's possible to specify 'x' when category axis
                value: ['data'],
            }, 
            type: "gauge",
        		gauge: {
        			label:{
        				//returning here the value and not the ratio
        				format: function(value, ratio){ return value;}
        			},
        			min: x["minimum"],
        			max: x["maximum"],
        			width: 15,
        			units: x["units"] //this is only the text for the label
        		},
        		color: {
              pattern: x["pattern"], // the three color levels for the percentage values.
              threshold: {
//            unit: 'value', // percentage is default
//            max: 200, // 100 is default
              values: x["thres"]
            }
          }
        	});
        }

      },

      resize: function(width, height) {

        // TODO: code to re-render the widget with a new size

      }

    };
  }
});