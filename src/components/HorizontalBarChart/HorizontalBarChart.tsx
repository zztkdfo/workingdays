import { ReactElement } from 'react'
import { Bar } from 'react-chartjs-2'

const data = {
  labels: ['방기준', '김정현', '이상래', '김민정'],
  datasets: [
    {
      label: '주 40시간 기준 ',
      data: [48, 44, 46, 40],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)'
      ],
      borderWidth: 1
    }
  ]
}

const options = {
  indexAxis: 'y' as 'x',
  // Elements options apply to all of the options unless overridden in a dataset
  // In this case, we are setting the border of each horizontal bar to be 2px wide
  elements: {
    bar: {
      borderWidth: 2
    }
  },
  responsive: true,
  plugins: {
    legend: {
      position: 'r' as 'right'
    },
    title: {
      display: true,
      text: '금주 업무 시간',
      align: 'start' as 'end'
    }
  }
}
export interface HorizontalBarChartProps {
  title?: string
}
const HorizontalBarChart = ({
  title
}: HorizontalBarChartProps): ReactElement => (
  <>
    <div
      style={{
        textAlign: 'left'
      }}
    >
      <h1 className="title">{title}</h1>
    </div>
    <div
      style={{
        maxWidth: '520px'
      }}
    >
      <Bar data={data} options={options} />
    </div>
  </>
)

export default HorizontalBarChart
