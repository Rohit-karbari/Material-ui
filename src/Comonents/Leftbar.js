import {Container, Link, makeStyles } from "@material-ui/core";
import {Apps, Camera, Collections, ExitToApp, Home, List, Person, Restaurant, Settings,VideoLabel} from "@material-ui/icons"

const useStyles = makeStyles((theme) => ({
    container: {
      height: "100vh",
      color:'white', 
      paddingTop: theme.spacing(10),
      backgroundColor: theme.palette.primary.main,
      position: "sticky",
      top: 0,
      [theme.breakpoints.up('sm')]: {
        backgroundColor: "white",
        color: "#555",
        border: "1px solid #ece7e7"
      }
    }, 
    item: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: theme.spacing(4),
      [theme.breakpoints.up('sm')]: {
        marginBottom: theme.spacing(3),
        cursor: "pointer"
      }
    }, 
    text: {
      fontWeight: 500,
      [theme.breakpoints.down('sm')]: {
          display: 'none'
      },
      color: '#555'
    },
    icon: {
      marginRight: theme.spacing(1),
      [theme.breakpoints.up("sm")]: {
        fontsize: "18px",
      }
    }
}))

const Leftbar = (props) => {
    const classes = useStyles()
    return (
      <Container className={classes.container}>
          <div className={classes.item}>
            <Home className={classes.icon }/>
            <Link className={classes.text}>
                Home Page
            </Link>
          </div>
          <div className={classes.item}>
            <Person className={classes.icon }/>
            <Link className={classes.text}>
                Friends
            </Link>
          </div>
          <div className={classes.item}>
            <List className={classes.icon }/>
            <Link className={classes.text}>
                Lists
            </Link>
          </div>
          <div className={classes.item}>
            <Camera className={classes.icon }/>
            <Link className={classes.text}>
                Camera
            </Link>
          </div>
          <div className={classes.item}>
            <VideoLabel className={classes.icon }/>
            <Link className={classes.text}>
                Videos
            </Link>
          </div>
          <div className={classes.item}>
            <Apps className={classes.icon }/>
            <Link className={classes.text}>
                Apps
            </Link>
          </div>
          <div className={classes.item}>
            <Collections className={classes.icon }/>
            <Link className={classes.text}>
                Collections
            </Link>
          </div>
          <div className={classes.item}>
            <Restaurant className={classes.icon }/>
            <Link className={classes.text}>
                Restaurant
            </Link>
          </div>
          <div className={classes.item}>
            <Settings className={classes.icon }/>
            <Link className={classes.text}>
                Settings
            </Link>
          </div>
          <div className={classes.item}>
            <ExitToApp className={classes.icon }/>
            <Link className={classes.text}>
                LogOut
            </Link>
          </div>
      </Container>
    )
  
  }
  export default Leftbar