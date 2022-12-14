import React from 'react';
import { DualAxes } from '@ant-design/plots';


const BarNewGraph = () => {
    const data = [
        {
          time: '2019-03',
          value: [200, 350],
          count: 800,
        },
        {
          time: '2019-04',
          value: [400, 650],
          count: 600,
        },
        {
          time: '2019-05',
          value: [150, 350],
          count: 400,
        },
        {
          time: '2019-06',
          value: [100, 450],
          count: 380,
        },
        {
          time: '2019-07',
          value: [500, 550],
          count: 220,
        },
      ];
      const isActive= 'red';
      const inactive= 'grey';
      const config = {
        data: [data, data],
        xField: 'time',
        yField: ['value', 'count'],
        color:({title})=>{
            if(title === '2019-06'){
                return isActive;
            }
            return inactive;
        },
        geometryOptions: [
          {
            geometry: 'column',
            color: '#5B8FF9',
            isRange: true,
          },
          {
            geometry: 'line',
            color: '#5AD8A6',
            lineStyle: {
              lineWidth: 2,
              stroke: '#5AD8A6',
            },
          },
        ],
      };
  return (
    <div>
          <DualAxes {...config} />
    </div>
  )
}

export default BarNewGraph;