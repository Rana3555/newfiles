import { Component, OnInit } from '@angular/core';
import * as Plotly from 'plotly.js';

@Component({
  selector: 'app-graphs',
  templateUrl: './graphs.component.html',
  styleUrls: ['./graphs.component.sass']
})
export class GraphsComponent implements OnInit {
  trace9: any;
  traace: any;
    ngOnInit(): void {
      throw new Error('Method not implemented.');
    }
  // constructor() { }
    title = 'dynamic-plots';
    // Bar Chart
    graph1 = {
      data: [
        { x: [1, 2, 3,5], y: [2, 3, 4], type: 'bar' },
      ],
      layout: {
        title: 'Bar Plot',
        width: 700,
        height: 500
      }
    };
    // Line chart
    graph2 = {
      data: [
        { x: [1, 2, 3, 4, 5], y: [1, 4, 9, 4, 1], type: 'scatter' },
        { x: [1, 2, 3, 4, 5], y: [1, 3, 6, 9, 6], type: 'scatter' },
        { x: [1, 2, 3, 4, 5], y: [1, 2, 4, 5, 6], type: 'scatter' },
      ],
      layout: {
        title: 'Scatter Plot',
        width: 700,
        height: 500
      }
    };
    graph3 = {
      data: [
        {
          values: [16, 15, 12, 6, 5, 4, 42],
          labels: ['US', 'China', 'European Union', 'Russian Federation', 'Brazil', 'India', 'Rest of World'],
          domain: { column: 0 },
          name: 'GHG Emissions',
          hoverinfo: 'label+percent+name',
          hole: .4,
          type: 'pie'
        }, {
          values: [27, 11, 25, 8, 1, 3, 25],
          labels: ['US', 'China', 'European Union', 'Russian Federation', 'Brazil', 'India', 'Rest of World'],
          text: 'CO2',
          textposition: 'inside',
          domain: { column: 1 },
          name: 'CO2 Emissions',
          hoverinfo: 'label+percent+name',
          hole: .4,
          type: 'pie'
        }
      ],
      layout: {
        title: 'Global Emissions 1990-2011 Pie(Donut Chart)',
        annotations: [
          {
            font: {
              size: 20
            },
            showarrow: false,
            text: 'GHG',
            x: 0.17,
            y: 0.5
          },
          {
            font: {
              size: 20
            },
            showarrow: false,
            text: 'CO2',
            x: 0.82,
            y: 0.5
          }
        ],
        height: 400,
        width: 600,
        showlegend: false,
        grid: { rows: 1, columns: 2 }
      }
    }
    graph9 = {
      data: [
        {
          type: "sunburst",
          labels: ["Eve", "Cain", "Seth", "Enos", "Noam", "Abel", "Awan", "Enoch", "Azura"],
          parents: ["", "Eve", "Eve", "Seth", "Seth", "Eve", "Eve", "Awan", "Eve"],
          values: [10, 14, 12, 10, 2, 6, 6, 4, 4],
          outsidetextfont: { size: 20, color: "#377eb8" },
          leaf: { opacity: 0.4 },
          marker: { line: { width: 2 } },
        }
      ],
      layout: {
        title: 'Bar Plot',
        width: 500,
        height: 500
      }
    };
    graph5 = {
      data: [{
        x: [1, 2, 3, 4],
        y: [10, 11, 12, 13],
        mode: 'markers',
        marker: {
          size: [40, 60, 80, 100]
        }
      }],
      layout: [{
        title: 'Marker Size',
        showlegend: true,
        width: 500,
        height: 500
      }]
    }

    private zoom = {
      x:['2020-10-04', '2021-11-04', '2023-12-04'],
      y: [90, 40, 60],
      type: 'scatter'
    };

    data = [this.zoom];
     layout = {
    title: 'Scroll and Zoom',
    showlegend: false
    };
    config={
    scrollZoom: true
  }

  trace = {
    x:['INDIA', 'USA', 'RUSSIA'],
    y: [90, 40, 60],
    type: 'bar',
    name: 'Old Zoo'
  }
  trace2 = {
    x:['INDIA', 'USA', 'RUSSIA'],
    y: [10, 80, 45],
    type: 'bar',
    name: 'New Zoo'
  }
    chart={
   data : [this.trace,this.trace2],
   layout : {
    title: 'Hide the Modebar',
    showlegend: true
  },
  config:{
    displayModeBar:false
  }
  }
  graph6= {
    data: [ { type: "indicator",
    mode: "number+delta",
    value: 492,
    delta: { reference: 512, valueformat: ".0f" },
    ticker: { showticker: true },
    vmax: 500,
    domain: { y: [0, 1], x: [0.25, 0.75] },
    title: { text: "Users online" }
  },
  {
    y: [325, 324, 405, 400, 424, 404, 417, 432, 419, 394, 410, 426, 413, 419, 404, 408, 401, 377, 368, 361, 356, 359, 375, 397, 394, 418, 437, 450, 430, 442, 424, 443, 420, 418, 423, 423, 426, 440, 437, 436, 447, 460, 478, 472, 450, 456, 436, 418, 429, 412, 429, 442, 464, 447, 434, 457, 474, 480, 499, 497, 480, 502, 512, 492]
  }
],

 layout :[{ width: 600, height: 450, xaxis: { range: [0, 62]}}]  
 }

 graph4 = {
  data: [{type: "sunburst",
      labels: ["Eve", "Cain", "Seth", "Enos", "Noam", "Abel", "Awan", "Enoch", "Azura"],
      parents: ["", "Eve", "Eve", "Seth", "Seth", "Eve", "Eve", "Awan", "Eve"],
      values: [10, 14, 12, 10, 2, 6, 6, 4, 4],
      outsidetextfont: { size: 20, color: "#377eb8" },
      leaf: { opacity: 0.4 },
      marker: { line: { width: 2 } },
    }
  ],
  layout: {
    title: 'Bar Plot',
    width: 500,
    height: 500
  }
}
  // new/
   trace1 = {
    x:['trees', 'flowers', 'hedges'],
    y: [90, 130, 40],
    type: 'bar'
  
  };
  modebar ={
    data : [this.trace1],
     layout : {
        title: 'Hide the Plotly Logo on the Modebar',
        showlegend: false
    },
      config:{
        displaylogo: false
      }
      }
// new2/
 trae1 = {
  type: "scatter",
  mode: "lines",
  x: ['2018-01-01', '2018-08-31'],
  y: [10, 5],
  line: {color: '#17BECF'}
};
 trae2 = {
  type: "scatter",
  mode: "lines",
  x: ['2018-01-01', '2018-08-31'],
  y: [3,7],
  line: {color: '#7F7F7F'}
};
custom ={
  data : [this.trae1,this.trae2],

  layout : {
   title: 'Custom Locale',
 },
 config : {locale: 'fr'}
   }
  //  new3/
  Chartstudiomodebar ={
    data : [{
      values: [19, 26, 55],
      labels: ['Residential', 'Non-Residential', 'Utility'],
      type: 'pie'
    }],
    layout: {
        title: 'Show Edit in Chart Studio Modebar Button'
    },
    config: {
      showEditInChartStudio: true,
      plotlyServerURL: "https://chart-studio.plotly.com"
    }
  }
  //  new4/
  Customizetheeditchartlinktext ={
    data : [{
      z: [[0, 1, 2, 3, 4, 5, 6],
          [1, 9, 4, 7, 5, 2, 4],
          [2, 4, 2, 1, 6, 9, 3]],
      type: 'heatmap'}],
    layout: {title: 'Customize The Edit Chart Link Text'},
    config: {
      showLink: true,
      plotlyServerURL: "https://chart-studio.plotly.com",
    }
  }
  //  new5/
  AlwaysdisplaytheModebar ={
    data : [{
      y:['Marc', 'Henrietta', 'Jean', 'Claude', 'Jeffrey', 'Jonathan', 'Jennifer', 'Zacharias'], 
        x: [90, 40, 60, 80, 75, 92, 87, 73],
        type: 'bar',
        orientation: 'h'}],
  layout : {
      title: 'Always Display the Modebar',
      showlegend: false},
      config: {
        displayModeBar: true
      }
  }
  // new6/
  trace6 = {
    x: [0, 1, 2, 3, 4, 5, 6],
    y: [1, 9, 4, 7, 5, 2, 4],
    mode: 'lines+markers',
    type: 'scatter'
  }
  Displaytheeditchartlink ={
    
    data : [ this.trace6 ],
    layout : {
      title: 'Display the Edit Chart Link'
    },
    
    config : {
      showLink: true,
      plotlyServerURL: "https://chart-studio.plotly.com"
    },
  }
  // new7/
  trace5 = {
    type: 'bar',
    x: [1, 2, 3, 4],
    y: [5, 10, 2, 8],
    marker: {
    color: '#C8A2C8',
    line: {
         width: 2.5
        },
    },
}
  Responsivetowindowsize ={
    
  data : [ this.trace5 ],
   layout : {
    title: 'Responsive to window size!',
    font: {size: 18}
  },
  config : {responsive: true}
  }
  
  // new8/
  DownloadChartasSVGinsteadofPNG ={
    trace : {
      x: [0, 1, 2, 3, 4, 5, 6],
      y: [1, 9, 4, 7, 5, 2, 4],
      mode: 'markers',
      marker: {
          size: [20, 40, 25, 10, 60, 90, 30],
      }
  }, 
  data : [ this.trace ],
  layout : {
      title: 'Download Chart as SVG instead of PNG',
      showlegend: false
  },
  config : {
    toImageButtonOptions: {
      format: 'svg', // one of png, svg, jpeg, webp
      filename: 'custom_image',
      height: 500,
      width: 700,
      scale: 1 // Multiply title/legend/axis/canvas sizes by this factor
    }
  }
}
// new9/
CreateaStaticChart ={
  trace1 : {
    x: [0, 1, 2, 3, 4, 5, 6],
    y: [1, 9, 4, 7, 5, 2, 4],
    mode: 'markers',
    marker: {
        size: [20, 40, 25, 10, 60, 90, 30],
    },
    },
    data : [this.trace1],
    layout : {
    title: 'Create a Static Chart',
    showlegend: false
   },
   config : {staticPlot: true}
}
// polar charts
public polarChartOptions = {
    
};
public polarChartLabels = [
  'Red',
  'Green',
  'Yellow',
  'Grey',
  'Blue'
];
public polarChartType = 'polarArea';
public polarChartLegend = true;
public polarChartData = [
  {data: [11, 16, 7, 3, 14], label: 'Polar Chart'}
];
public polarChartBackgrounds =  [
  'rgb(255, 99, 132)',
  'rgb(75, 192, 192)',
  'rgb(255, 205, 86)',
  'rgb(201, 203, 207)',
  'rgb(54, 162, 235)'
];

// polar bar charts

public barChartOptions = {
  scaleShowVerticalLines: false,
  responsive: true
};
public barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
public barChartType = 'bar';
public barChartLegend = true;
public barChartData = [
  {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
  {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
];

   
}


