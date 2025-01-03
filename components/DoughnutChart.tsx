'use client';

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);


const DoughnutChart = ({accounts}:DoughnutChartProps) => {
    const data = {
        datasets:[
            {
              label: 'Banks',
              data: [1800, 2750, 4500, 8963],
              backgroundColor: ['#41B883', '#E83E8C', '#D6007F', '#FF9F43'],
              hoverBackgroundColor: ['#3CB371', '#E91E63', '#C70059', '#FFC107']
            }
        ],
        labels: ['Bank 1', 'Bank 2', 'Bank 3', 'Bank 4']

    }
    return <Doughnut
        options={{
            cutout: '60%',
            plugins: {
                legend : {
                    display : false
                }
            }
        }}
        data={data} 
    />

}

export default DoughnutChart
