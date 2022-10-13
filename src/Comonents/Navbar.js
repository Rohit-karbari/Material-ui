import { alpha, AppBar, Badge,InputBase, makeStyles, Toolbar, Typography, Avatar } from "@material-ui/core";
import { Mail, Search,Notifications, Cancel} from "@material-ui/icons";
import image from "../data/Rohit.jpeg"
import MenuIcon from '@material-ui/icons/Menu';
import { useState } from "react";
const useStyles = makeStyles((theme) => ({
    toolbar: {
        display: "flex",
        justifyContent: "space-between"
    },
    logoLg:{
        display: "none",
        [theme.breakpoints.up("sm")]:{
            display: "block" 
        }
    },
    logoSm: {
        display: "block",
        [theme.breakpoints.up('sm')]: {
            display: "none"
        }
    },
    search: {
        display:'flex',
        alignItems: "center",
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        "&:hover": {
            backgroundColor: alpha(theme.palette.common.white, 0.25)
        },
        borderRadius: theme.shape.borderRadius, width: "50%",
        [theme.breakpoints.down('sm')]: {
            display: (props) => props.open ? "flex" : "none",
            width: "70%"
        }
    },
    input: {
        color: 'white',
        marginLeft: theme.spacing(1)
    },
    searchButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: "none"
        }
    },
    icons: {
        alignItems:'center',
            display: (props) => props.open ? "none" : "flex"
    },
    badges: {
        marginRight: theme.spacing(2)
    },
    cancel: {
       [theme.breakpoints.up('sm')]: {
        display: 'none'
       }
    }
}))

const Navbar = (props) => {
    const [open, setOpen] = useState(false)
    const classes = useStyles({open})
    return (
      <div>
        <AppBar position="fixed"><Toolbar className={classes.toolbar}>
        <MenuIcon/>
            <Typography variant="h6" className={classes.logoLg}>
                RKBOOK
            </Typography>
            <Typography variant="h6" className={classes.logoSm}>
                    SHIVA
            </Typography>
            <div className={classes.search}>
                <Search/>
                <InputBase placeholder="search..." className={classes.input}/>
                <Cancel className={classes.cancel} onClick={() => setOpen(false)}/>
            </div>
            <div className={classes.icons}>
                <Search className={classes.searchButton} onClick={() => setOpen(true)}/>
                <Badge badgeContent={1996} color='secondary'  className={classes.badges}>
                    <Mail/>
                </Badge>
                <Badge badgeContent={4} color='secondary'  className={classes.badges}>
                    <Notifications/>
                </Badge>
                <Avatar alt="Rohit K" src={image} className={classes.icons}/>
            </div>
        </Toolbar></AppBar>
      </div>
    )
  
  }
  export default Navbar