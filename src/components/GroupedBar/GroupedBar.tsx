import { ReactElement } from 'react'
import { Bar } from 'react-chartjs-2'

export function GroupedBar(): ReactElement {
  const data = {
    labels: [
      '1월',
      '2월',
      '3월',
      '4월',
      '5월',
      '6월',
      '7월',
      '8월',
      '9월',
      '10월',
      '11월',
      '12월'
    ],

    datasets: [
      {
        label: '실제 근무 시간',
        data: [168, 154, 186, 174, 150, 186, 177, 176, 152, 188, 20, 0],
        backgroundColor: 'rgb(255, 99, 132)',
        stack: '근무'
      },
      {
        label: '월별 근무 시간(하루 8시간 기준)',
        data: [160, 144, 176, 176, 152, 176, 176, 176, 152, 168, 176, 184],
        backgroundColor: 'rgb(32, 64, 107)',
        stack: '근무 계획'
      }
    ]
  }

  // const options = {
  //   scales: {
  //     yAxes: [
  //       {
  //         ticks: {
  //           beginAtZero: true
  //         }
  //       }
  //     ]
  //   }
  // }
  return (
    <>
      <div>
        <h1>2021년도 근무 비교 그래프</h1>
      </div>
      <Bar data={data} />
    </>
  )
}

export default GroupedBar
