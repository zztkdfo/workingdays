import { ReactElement } from 'react'
import { Doughnut } from 'react-chartjs-2'

export interface DoughnutChartProps {
  title?: string
  dataList: number[]
}
function DoughnutChart({ title, dataList }: DoughnutChartProps): ReactElement {
  const data = {
    labels: ['출근', '재택', '휴가', '공휴일', '기타'],
    datasets: [
      {
        label: '# of Votes',
        data: dataList,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)'
        ],
        borderWidth: 1
      }
    ]
  }
  return (
    <>
      <div
        className="header"
        style={{
          textAlign: 'left',
          fontSize: '18px',
          fontWeight: 'bold',
          marginBottom: 28
        }}
      >
        {title}
      </div>
      <div
        style={{
          maxWidth: '282px'
        }}
      >
        <Doughnut data={data} />
      </div>
    </>
  )
}

export default DoughnutChart
