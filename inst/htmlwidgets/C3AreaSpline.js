HTMLWidgets.widget({

  name: 'C3AreaSpline',

  type: 'output',

  factory: function(el, width, height) {

    return {

        renderValue: function(x) {
        
        i = 0;
        values = x.values;
        x.data.forEach(function(item) {
          item.unshift(values[i]);
          i += 1;
        })
        
        // Check if we have a reference to our chart

        	// create a chart and set options
        	// note that via the c3.js API we bind the chart to the element with id equal to chart1
        	
        	
        	var chart = c3.generate({
        		bindto: el,
        		data: {
              x: 'x',
              columns: x.data,
              type: 'area-spline'
            },
            axis: {
              x: {
                  type: 'timeseries',
                  tick: {
                      culling: {
                          max: 4 // the number of tick texts will be adjusted to less than this value
                      },
                  }
              }
            }
        	});

  	      el.chart = chart;
      },

      resize: function(width, height) {

        // TODO: code to re-render the widget with a new size

      }

    };
  }
});