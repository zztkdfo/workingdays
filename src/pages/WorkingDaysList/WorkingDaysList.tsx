import React, { ReactElement, useState } from 'react'
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  MenuItem,
  Select
} from '@material-ui/core'

import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import List from '../../components/List'

export default function WorkingDaysList(): ReactElement {
  const [month, setMonth] = useState(3)
  const [workingType, setWorkingType] = useState('')
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())

  const StartDateInput = React.forwardRef(
    ({ value, onClick }: any, ref: any) => (
      <button
        style={{
          marginTop: '8px',
          padding: '10px 15px',
          marginRight: '10px',
          border: 0,
          borderRadius: '4px',
          backgroundColor: '#20406b',
          color: '#fff'
        }}
        onClick={onClick}
        ref={ref}
      >
        {value}
      </button>
    )
  )

  const EndDateInput = React.forwardRef(({ value, onClick }: any, ref: any) => (
    <button
      style={{
        marginTop: '8px',
        padding: '10px 15px',
        border: 0,
        borderRadius: '4px',
        backgroundColor: '#20406b',
        color: '#fff'
      }}
      onClick={onClick}
      ref={ref}
    >
      {value}
    </button>
  ))

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setWorkingType(event.target.value as string)
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
              근무내역 조회
            </h1>
          </>
        }
      />
      <CardContent>
        <Card variant="outlined">
          <CardContent
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around'
            }}
          >
            <div>
              <div>근무유형</div>
              <div
                style={{
                  marginTop: '10px'
                }}
              >
                <Select value={workingType} onChange={handleChange}>
                  <MenuItem value={'기본'}>기본</MenuItem>
                  <MenuItem value={'재택근무'}>재택근무</MenuItem>
                  <MenuItem value={'휴가'}>휴가</MenuItem>
                  <MenuItem value={'반차'}>반차</MenuItem>
                  <MenuItem value={'휴무일'}>휴무일</MenuItem>
                </Select>
              </div>
            </div>
            <div>저녁시간 유무</div>
            <div>휴게시간 유무</div>
            <div>
              <div>근무일 조회</div>
              <div
                style={{
                  marginTop: '10px'
                }}
              >
                <Button
                  variant="outlined"
                  style={{
                    color: month === 3 ? '#20406b' : '#f0f0f0',
                    borderColor: month === 3 ? '#20406b' : '#f0f0f0',
                    marginRight: '3px'
                  }}
                  onClick={() => {
                    setMonth(3)
                  }}
                >
                  3개월
                </Button>
                <Button
                  variant="outlined"
                  style={{
                    color: month === 6 ? '#20406b' : '#f0f0f0',
                    borderColor: month === 6 ? '#20406b' : '#f0f0f0',
                    marginRight: '3px'
                  }}
                  onClick={() => {
                    setMonth(6)
                  }}
                >
                  6개월
                </Button>
                <Button
                  variant="outlined"
                  style={{
                    color: month === 12 ? '#20406b' : '#f0f0f0',
                    borderColor: month === 12 ? '#20406b' : '#f0f0f0'
                  }}
                  onClick={() => {
                    setMonth(12)
                  }}
                >
                  12개월
                </Button>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row'
                  }}
                >
                  <DatePicker
                    selected={startDate}
                    onChange={(date: any) => setStartDate(date)}
                    customInput={<StartDateInput />}
                  />
                  <DatePicker
                    selected={endDate}
                    onChange={(date: any) => setEndDate(date)}
                    customInput={<EndDateInput />}
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </CardContent>
      <CardContent>
        <List />
      </CardContent>
    </Card>
  )
}
