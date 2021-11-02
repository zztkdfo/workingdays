import { ReactElement, useState } from 'react'
import {
  withStyles,
  Theme,
  createStyles,
  makeStyles
} from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import TablePagination from '@material-ui/core/TablePagination'

const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: '#20406b',
      color: theme.palette.common.white
    },
    body: {
      fontSize: 14
    }
  })
)(TableCell)

const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover
      }
    }
  })
)(TableRow)

function createData(
  workingDate: string,
  startTime: string,
  endTime: string,
  lunch: string,
  dinner: string,
  workingType: string,
  breakTime: string,
  workingTypeTime: string,
  workingTime: string,
  etc: string
) {
  return {
    workingDate,
    startTime,
    endTime,
    lunch,
    dinner,
    workingType,
    breakTime,
    workingTypeTime,
    workingTime,
    etc
  }
}

const rows = [
  createData(
    '2021-11-03',
    '09:00',
    '18:00',
    '01:00',
    '',
    '기본',
    '',
    '',
    '8:00',
    ''
  ),
  createData(
    '2021-11-02',
    '09:20',
    '20:00',
    '01:00',
    '0:30',
    '기본',
    '',
    '',
    '9:20',
    ''
  ),
  createData(
    '2021-11-01',
    '09:00',
    '18:00',
    '01:00',
    '',
    '기본',
    '',
    '',
    '8:40',
    ''
  ),
  createData(
    '2021-10-31',
    '09:00',
    '18:00',
    '01:00',
    '',
    '기본',
    '',
    '',
    '8:00',
    ''
  ),
  createData(
    '2021-10-30',
    '09:30',
    '20:20',
    '01:00',
    '0:30',
    '기본',
    '0:30',
    '',
    '9:20',
    '은행 업무로 인한 휴게시간'
  ),
  createData(
    '2021-10-29',
    '09:00',
    '18:20',
    '01:00',
    '',
    '기본',
    '',
    '',
    '8:20',
    ''
  ),
  createData(
    '2021-10-28',
    '09:00',
    '18:30',
    '01:00',
    '',
    '기본',
    '',
    '',
    '8:30',
    ''
  ),
  createData(
    '2021-10-27',
    '08:50',
    '21:00',
    '01:00',
    '0:30',
    '기본',
    '0:30',
    '',
    '8:40',
    '산책'
  ),
  createData(
    '2021-10-26',
    '',
    '',
    '01:00',
    '',
    '재택근무',
    '',
    '8:00',
    '8:00',
    ''
  ),
  createData(
    '2021-10-25',
    '',
    '',
    '01:00',
    '',
    '재택근무',
    '',
    '8:00',
    '8:00',
    ''
  ),
  createData(
    '2021-10-24',
    '',
    '',
    '01:00',
    '',
    '재택근무',
    '',
    '8:00',
    '8:00',
    ''
  ),
  createData(
    '2021-10-23',
    '',
    '',
    '01:00',
    '',
    '재택근무',
    '',
    '8:00',
    '8:00',
    ''
  ),
  createData(
    '2021-10-22',
    '09:30',
    '20:20',
    '01:00',
    '0:30',
    '기본',
    '0:30',
    '',
    '9:20',
    '육아'
  ),
  createData(
    '2021-10-21',
    '09:00',
    '18:20',
    '01:00',
    '',
    '기본',
    '',
    '',
    '8:20',
    ''
  ),
  createData(
    '2021-10-20',
    '09:00',
    '18:30',
    '01:00',
    '',
    '기본',
    '',
    '',
    '8:30',
    ''
  ),
  createData(
    '2021-10-19',
    '',
    '',
    '01:00',
    '',
    '재택근무',
    '',
    '8:00',
    '8:00',
    ''
  ),
  createData(
    '2021-10-18',
    '',
    '',
    '01:00',
    '',
    '재택근무',
    '',
    '8:00',
    '8:00',
    ''
  ),
  createData(
    '2021-10-17',
    '09:30',
    '20:20',
    '01:00',
    '0:30',
    '기본',
    '0:30',
    '',
    '9:20',
    '육아'
  ),
  createData(
    '2021-10-16',
    '09:00',
    '18:20',
    '01:00',
    '',
    '기본',
    '',
    '',
    '8:20',
    ''
  ),
  createData(
    '2021-10-15',
    '09:00',
    '18:30',
    '01:00',
    '',
    '기본',
    '',
    '',
    '8:30',
    ''
  )
]

const useStyles = makeStyles({
  table: {
    minWidth: 700
  }
})

export default function List(): ReactElement {
  const classes = useStyles()
  const [rowsPerPage, setRowsPerPage] = useState(5)
  const [page, setPage] = useState(0)
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">근무일</StyledTableCell>
            <StyledTableCell align="center">시작시간</StyledTableCell>
            <StyledTableCell align="center">종료시간</StyledTableCell>
            <StyledTableCell align="center">점심시간</StyledTableCell>
            <StyledTableCell align="center">저녁시간</StyledTableCell>
            <StyledTableCell align="center">근무유형</StyledTableCell>
            <StyledTableCell align="center">휴게시간</StyledTableCell>
            <StyledTableCell align="center">근무유형시간</StyledTableCell>
            <StyledTableCell align="center">근무시간</StyledTableCell>
            <StyledTableCell align="center">비고</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.workingDate}>
              <StyledTableCell align="center" component="th" scope="row">
                {row.workingDate}
              </StyledTableCell>
              <StyledTableCell align="center">{row.startTime}</StyledTableCell>
              <StyledTableCell align="center">{row.endTime}</StyledTableCell>
              <StyledTableCell align="center">{row.lunch}</StyledTableCell>
              <StyledTableCell align="center">{row.dinner}</StyledTableCell>
              <StyledTableCell align="center">
                {row.workingType}
              </StyledTableCell>
              <StyledTableCell align="center">{row.breakTime}</StyledTableCell>
              <StyledTableCell align="center">
                {row.workingTypeTime}
              </StyledTableCell>
              <StyledTableCell align="center">
                {row.workingTime}
              </StyledTableCell>
              <StyledTableCell align="center">{row.etc}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
  )
}
