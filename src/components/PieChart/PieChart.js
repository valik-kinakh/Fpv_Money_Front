import React from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import HC_more from 'highcharts/highcharts-more';

HC_more(Highcharts);

const PieChart = ({data}) => {
    const options = {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Money invested in FPV-World'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.y:.1f} UAN</b>'
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        credits:{
            enabled: false
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
            }
        },
        series: [{
            name: 'Money',
            colorByPoint: true,
            data: [...data]
        }]
    }

    return (
       <div>
          <HighchartsReact highcharts={Highcharts} options={options}/>
       </div>
    )
};

export default PieChart;


