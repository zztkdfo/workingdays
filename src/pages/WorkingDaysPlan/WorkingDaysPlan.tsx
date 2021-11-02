import { ReactElement, useState, useEffect } from 'react'
import { Card, CardContent, CardHeader } from '@material-ui/core'
// import EITACCordion from '../../components/EITACCordion'
import dayjs from 'dayjs'
export default function WorkingDaysList(): ReactElement {
  const dayjsDate = dayjs(new Date())
  const [year, setYear] = useState(dayjsDate.get('year'))
  const [month, setMonth] = useState(dayjsDate.get('month'))
  const [view, setView] = useState([])

  useEffect(() => {
    makeCalendar(new Date().getFullYear(), new Date().getMonth())
  }, [])

  const lastday = function (y: number, m: number): number {
    return new Date(y, m + 1, 0).getDate()
  }
  const addMonth = (add: number) => {
    const date: Date = new Date(`${year}-${month + 1}-01`)
    date.setMonth(date.getMonth() + add)
    setYear(date.getFullYear())
    setMonth(date.getMonth())
    makeCalendar(date.getFullYear(), date.getMonth())
  }

  const makeCalendar = (year: number, month: number) => {
    const days = lastday(year, month)
    const calendar: any = []

    Array.from(Array(days), (e, i) => {
      calendar.push(`${month + 1}/${i + 1}`)
    })

    setView(calendar)
  }

  return (
    <Card
      style={{
        marginTop: '20px',
        padding: '10px'
      }}
      variant="outlined"
    >
      <CardHeader
        title={
          <>
            <h1 style={{ fontSize: '1em', color: 'rgba(0, 0, 0, 0.54)' }}>
              근무계획 조회
            </h1>
          </>
        }
      />
      <CardContent>
        <div
          style={{
            textAlign: 'center',
            border: '1px solid rgba(0, 0, 0, 0.2)',
            width: '350px',
            padding: '10px',
            borderRadius: '5px'
          }}
        >
          <div
            style={{
              color: 'rgba(0, 0, 0, 0.2)',
              fontWeight: 'bold',
              fontSize: '20px',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between'
            }}
          >
            <div
              style={{ cursor: 'pointer' }}
              onClick={() => {
                addMonth(-1)
              }}
            >
              {'<'}
            </div>
            <div>
              {year}.{month + 1}
              .01 ~ {year}.{month + 1}.{lastday(year, month)}
            </div>
            <div
              style={{ cursor: 'pointer' }}
              onClick={() => {
                addMonth(1)
              }}
            >
              {'>'}
            </div>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            textAlign: 'left',
            marginTop: '20px',
            color: 'rgba(0, 0, 0, 0.2)',
            fontWeight: 'bold',
            fontSize: '20px',
            padding: '5px',
            borderBottom: '1px solid rgba(0, 0, 0, 0.1)'
          }}
        >
          <div style={{ width: '190px' }}>정산합계</div>
          <div style={{ width: '190px' }}>월</div>
          <div style={{ width: '190px' }}>화</div>
          <div style={{ width: '190px' }}>수</div>
          <div style={{ width: '190px' }}>목</div>
          <div style={{ width: '190px' }}>금</div>
        </div>
        <div
          style={{
            display: 'inline-flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            textAlign: 'left',
            marginLeft: '191px'
          }}
        >
          {view.map((v: string, index: number) => {
            let color = ' #20406b'
            let text = '기본 | 8시간'
            let time = '09:00 ~ 18:00'
            if (index !== 0 && index % 11 === 0) {
              color = '#ffa07a'
              text = '휴가'
              time = ''
            } else if (index !== 0 && index % 3 === 0) {
              color = '#2e8b57'
              text = '재택근무'
              time = '09:00 ~ 18:00'
            }
            return (
              <div
                style={{
                  display: 'inline',
                  width: '190px',
                  height: '220px',
                  whiteSpace: 'normal',
                  borderLeft: '1px solid rgba(0, 0, 0, 0.1)',

                  borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
                  padding: '5px'
                }}
                key={v}
              >
                <div>{v}</div>
                <div
                  style={{
                    border: '1px solid ' + color,
                    padding: '5px',
                    borderRadius: '5px',
                    marginTop: '40px',
                    height: '60px'
                  }}
                >
                  <div
                    style={{
                      color: color
                    }}
                  >
                    {text}
                  </div>
                  <div
                    style={{
                      color: color
                    }}
                  >
                    {time}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
