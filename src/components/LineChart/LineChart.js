import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HighchartsMore from "highcharts/highcharts-more";
import Boost from "highcharts/modules/boost";

HighchartsMore(Highcharts);
Boost(Highcharts);

const LineChart = ({data}) => {
    const options = {
        boost: {
            useGPUTranslations: true,
            usePreallocated: true,
        },
        chart: {
            type: 'spline'
        },
        title: {
            text: 'Monthly money investing'
        },
        credits:{
          enabled: false
        },
        xAxis: {
            labels: {
                enabled: false,
            },
            crosshair: true,
            tickWidth: 0,
            min: 0,
            tickInterval: 1,
            maxPadding: 0,
        },
        yAxis: {
            title: {
                text: 'Money'
            },
            labels: {
                formatter: function () {
                    return this.value;
                }
            }
        },
        tooltip: {
            crosshairs: true,
            headerFormat: `<b>{series.name}</b><br/>`,
            pointFormatter: function () {
                return `${this.date}<br/>${this.y}UAN`;
            }
            },
        plotOptions: {
            spline: {
                marker: {
                    radius: 4,
                    lineColor: '#666666',
                    lineWidth: 1
                }
            }
        },
        series: [...data]
    }
  return(
      <HighchartsReact
          highcharts={Highcharts}
          options={options}
      />

  )
}

export default LineChart;