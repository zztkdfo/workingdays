import { ReactElement } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import HorizontalBarChart from '../../components/HorizontalBarChart'
import DoughnutChart from '../../components/DoughnutChart'
import GroupedBar from '../../components/GroupedBar/GroupedBar'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 10,
    padding: 10
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
}))

export default function DashBoard(): ReactElement {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Paper className={classes.paper} variant="outlined">
            <HorizontalBarChart title="ITSM TFT" />
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper} variant="outlined">
            <DoughnutChart title="11월 근무현황" dataList={[12, 19, 5, 3, 2]} />
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper} variant="outlined">
            <DoughnutChart
              title="2021년 근무현황"
              dataList={[50, 264, 15, 33, 3]}
            />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper} variant="outlined">
            <GroupedBar />
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper} variant="outlined">
            기획
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper} variant="outlined">
            기획
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper} variant="outlined">
            기획
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper} variant="outlined">
            기획
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}
