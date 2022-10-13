import {Grid, makeStyles } from "@material-ui/core";
import React from "react";
import Add from "./Comonents/Add";
import Feed from "./Comonents/Feed";
import Leftbar from "./Comonents/Leftbar";
import Navbar from "./Comonents/Navbar";
import Rightbar from "./Comonents/Rightbar";



const useStyles = makeStyles( theme => ({
    right: {
      [theme.breakpoints.down('sm')]: {
        display: 'none'
      }
    }
}))


const App = (props) => {
  const classes = useStyles()
  return (
    <div >
    <Navbar/>
    <div>
    <Grid container>
      <Grid item sm={2} xs={2}>
        <Leftbar/>
      </Grid>
      <Grid item sm={7} xs={10}>
        <Feed/>
      </Grid>
      <Grid item sm={3} className={classes.right}>
        <Rightbar/>
      </Grid>
    </Grid>
    <Add/>
    </div>
    </div>
  )

}
export default App