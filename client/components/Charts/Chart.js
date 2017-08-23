Template.PieChart.onRendered(function(){
       // Get the context of the canvas element we want to select
       var ctx  = document.getElementById("pieChart").getContext("2d");

       var dataSet = [
        {
            value: 20,
            color:"#F7464A",
            highlight: "#FF5A5E",
            label: "Grocery"
        },
        {
            value: 50,
            color: "#46BFBD",
            highlight: "#5AD3D1",
            label: "Mortgage Repayment"
        },
        {
            value: 30,
            color: "#FDB45C",
            highlight: "#FFC870",
            label: "Education"
        }
        ];

        // For a pie chart
        var myPieChart = new Chart(ctx).Pie(dataSet,{
        animateScale: true
    });
    
});

Template.LineChart.onRendered(function(){
        // Get the context of the canvas element we want to select
        var ctx  = document.getElementById("lineChart").getContext("2d");

        // Set the options
        var options = {

            ///Boolean - Whether grid lines are shown across the chart
            scaleShowGridLines: true,

            //String - Colour of the grid lines
            scaleGridLineColor: "rgba(0,0,0,.05)",

            //Number - Width of the grid lines
            scaleGridLineWidth: 1,

            //Boolean - Whether to show horizontal lines (except X axis)
            scaleShowHorizontalLines: true,

            //Boolean - Whether to show vertical lines (except Y axis)
            scaleShowVerticalLines: true,

            //Boolean - Whether the line is curved between points
            bezierCurve: true,

            //Number - Tension of the bezier curve between points
            bezierCurveTension: 0.4,

            //Boolean - Whether to show a dot for each point
            pointDot: true,

            //Number - Radius of each point dot in pixels
            pointDotRadius: 4,

            //Number - Pixel width of point dot stroke
            pointDotStrokeWidth: 1,

            //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
            pointHitDetectionRadius: 20,

            //Boolean - Whether to show a stroke for datasets
            datasetStroke: true,

            //Number - Pixel width of dataset stroke
            datasetStrokeWidth: 2,

            //Boolean - Whether to fill the dataset with a colour
            datasetFill: true,

            //String - A legend template
            legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"

        };

        //Set the data
        var data = {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [{
                label: "Income",
                fillColor: "rgba(220,220,220,0.2)",
                strokeColor: "rgba(220,220,220,1)",
                pointColor: "rgba(220,220,220,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: [random(), random(), random(), random(), random(), random(), random()]
            }, {
                label: "Expenses",
                fillColor: "rgba(151,187,205,0.2)",
                strokeColor: "rgba(151,187,205,1)",
                pointColor: "rgba(151,187,205,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(151,187,205,1)",
                data: [random(), random(), random(), random(), random(), random(), random()]
            }]
        };

      var myLineChart = new Chart(ctx).Line(data, options);
});

function random() {
    return Math.floor((Math.random() * 100) + 1);
}
