import { Avatar,Container, ImageListItem, makeStyles, Typography, ImageList, Link, Divider } from "@material-ui/core";
import AvatarGroup from '@material-ui/lab/AvatarGroup'
import image1 from '../data/Rohit.jpeg'
import image2 from '../data/coorg.jpeg'

const useStyles = makeStyles((theme) => ({
    container: {
      paddingTop: theme.spacing(10),
      position: "sticky",
      top: 0,
    },
    title:{
      fontSize:16,
      fontWeight: 500,
      color: "#555",
    },
    imageList: {
      display:"flex",
    },
    link: {
      marginRight: theme.spacing(2),
      color: "#555",
      fontSize: 16
    }
    
}))

const Rightbar = (props) => {
    const classes = useStyles()
    return (
      <Container className={classes.container}>
          <Typography className={classes.title} gutterBottom>Online Friends</Typography>
          <AvatarGroup max={6} style={{marginBottom: 10}} className={classes.item}>
              <Avatar alt="Rohit Kabari" src={image1} />
              <Avatar alt="Travis Howard" src="https://material-ui.com/static/images/avatar/2.jpg" />
              <Avatar alt="Cindy Baker" src={image2} />
              <Avatar alt="Agnes Walker" src="" />
              <Avatar alt="Trevor Henderson" src="https://material-ui.com/static/images/avatar/5.jpg" />
              <Avatar alt="Trevor Henderson" src="https://material-ui.com/static/images/avatar/6.jpg" />
              <Avatar alt="Trevor Henderson" src="https://material-ui.com/static/images/avatar/7.jpg" />
          </AvatarGroup>
            <Typography className={classes.title} gutterBottom>Uploaded Photos</Typography>
            <ImageList rowHeight={100} className={classes.imageList} cols={3}>
              <ImageListItem>
                <img src="https://v4.mui.com/static/images/image-list/burgers.jpg" alt=""/>
              </ImageListItem>
              <ImageListItem>
                <img src="https://v4.mui.com/static/images/image-list/hats.jpg" alt=""/>
              </ImageListItem>
              <ImageListItem>
                <img src="https://v4.mui.com/static/images/image-list/olive.jpg" alt=""/>
              </ImageListItem>
              <ImageListItem>
                <img src="https://v4.mui.com/static/images/image-list/morning.jpg" alt=""/>
              </ImageListItem>
              <ImageListItem>
                <img src="https://v4.mui.com/static/images/image-list/breakfast.jpg" alt=""/>
              </ImageListItem>
              <ImageListItem>
                <img src="https://v4.mui.com/static/images/image-list/honey.jpg" alt=""/>
              </ImageListItem>
          </ImageList>
          <Typography className={classes.title} gutterBottom style={{marginTop:20}}>Catagories</Typography>
                <Link className={classes.link} variant="body2">
                  Sport
                </Link>
                <Link className={classes.link} variant="body2">
                  Food
                </Link>
                <Link className={classes.link} variant="body2">
                  Music
                </Link>
                <Divider flexItem style={{margingBottom: 20}}/>
                <Link className={classes.link} variant="body2">
                  Movies
                </Link>
                <Link className={classes.link} variant="body2">
                  Science
                </Link>
                <Link className={classes.link} variant="body2">
                  Life
                </Link>
      </Container>
    )
  
  }
  export default Rightbar