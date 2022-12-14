import { Button, Container, Fab, FormControlLabel, FormLabel, makeStyles, MenuItem, Modal, Radio, RadioGroup, Snackbar, TextField, Tooltip } from "@material-ui/core";
import { Add as AddIcon } from "@material-ui/icons";
import { useState } from "react";
import MuiAlert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
    feb: {
        position: "fixed",
        bottom: 10,
        right: 10,
    }, 
    Container: {
        width: 500,
        height: 550,
        backgroundColor: "white",
        position: 'absolute',
        bottom: 0,
        top :0,
        left :0,
        right: 0,
        margin: "auto"
    },
    form: {
        padding: theme.spacing(2)
    }, 
    item: {
        marginBottom: theme.spacing(3)
    }
}))

const Add = (props) => {
    const classes = useStyles()
    const [open, setOpen] = useState(false)
    const [openAlert, setOpenAlert] = useState(false)

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpenAlert(false);
      }

    return (
        <div>
            <Tooltip title="Add" aria-label="add">
                <Fab color="primary" className={classes.feb}>
                    <AddIcon onClick={() => setOpen(true)}/>
                </Fab>
            </Tooltip>
            <Modal open={open}>
                <Container className={classes.Container}>
                    <form className={classes.form} autoComplete="off">
                        <div className={classes.item}>
                        <TextField id="standard-basic" label="Title" size="small" style={{width: '100%'}} />
                        </div>
                        <div>
                        <TextField id="outlined-multiline-static"
                            multiline
                            rows={4}
                            defaultValue="Tell your story"
                            variant="outlined"
                            label="Discription" 
                            size="small" 
                            style={{width: '100%'}} />
                        </div>
                        <div className={classes.item}>
                            <TextField select  label="visibility" value="Public">
                                <MenuItem value='Public'>Public</MenuItem>
                                <MenuItem value='Private'>Private</MenuItem>
                                <MenuItem value='Untitled'>Untitled</MenuItem>
                            </TextField>
                        </div>
                        <div className={classes.item}>
                            <FormLabel component="legend">Who can comment?</FormLabel>
                            <RadioGroup aria-label="gender" name="gender1">
                                <FormControlLabel value="Everybody" control={<Radio />} size="small" label="Everybody" />
                                <FormControlLabel value="My friends" control={<Radio />} size="small" label="My friends" />
                                <FormControlLabel value="nobody" control={<Radio />} size="small" label="nobody" />
                                <FormControlLabel value="Custom" disabled control={<Radio />} size="small" label="Custom (Premium)" />
                            </RadioGroup>
                        </div>
                        <div className={classes.item}>
                                <Button variant="outlined" color="primary" style={{marginRight:20}} onClick={() => setOpenAlert(true)} >Create</Button>
                                <Button variant="outlined" color="Secondary" onClick={() => setOpen(false)}>Cancel</Button>
                        </div>
                    </form>
                </Container>
            </Modal>
            <Snackbar open={openAlert} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}>
                <MuiAlert onClose={handleClose} severity="success">
                    This is a success message!
                </MuiAlert>
            </Snackbar>
        </div>
    )
  
  }
  export default Add