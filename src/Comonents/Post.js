import {Button, Card, CardActionArea, CardActions, CardContent, CardMedia, makeStyles, Typography } from "@material-ui/core";
import image from '../data/coorg.jpeg'

const useStyles = makeStyles((theme) => ({
    media: {
        height: '250px',
        [theme.breakpoints.down('sm')]: {
            height: 150
        }
    },
    card: {
        marginBottom: theme.spacing(5)
    }
}))

const Post = (props) => {
    const classes = useStyles()
    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia 
                    className={classes.media} 
                    image={image}
                    title='Uploaded Image'
                />
                <CardContent>
                    <Typography gutterBottom variant="h5">
                        My first profile post
                    </Typography>
                    <Typography variant="body2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">Share</Button>
                <Button size="small" color="primary">Learn more...</Button>
            </CardActions>
        </Card>
    )
  
  }
  export default Post