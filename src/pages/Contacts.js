import React from "react"
import {
  makeStyles,
  withStyles,
  TextField,
  Typography,
  Button,
  Grid,
  Box,
  Input,
} from "@material-ui/core"
import { Send } from "@material-ui/icons"

const useStyles = makeStyles((theme) => ({
  button: {
    marginTop: "1rem",
    color: "#FFFFFF",
    borderColor: "#FF007F",
  },
  container: {
    width: "90%",
    marginTop: 50,
    margin: "auto",
    border: "1px dashed",
  },
  input: {
    border: "2px solid #348ceb",
    borderRadius: "4px",
    paddingLeft: 8,
  },
  textField: {
    border: "2px solid #FFFFFF",
  },
  textInput: {
    padding: 8,
    fontSize: "14px",
  },

  multilineColor: {
    color: "white",
  },
  form: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    position: "absolute",
  },
}))

const Contacts = () => {
  const classes = useStyles()
  return (
    <Box component='div'>
      <Grid container justify='center'>
        <Box component='form' className={classes.form}>
          <Typography
            variant='h3'
            style={{ color: "white", textAlign: "center" }}
            gutterBottom
          >
            Hire or contact me...
          </Typography>
          <TextField
            style={{ marginTop: "1rem" }}
            fullWidth={true}
            InputProps={{
              className: classes.multilineColor,
            }}
            variant='outlined'
            name='name'
            value='Name'
            className={classes.textField}
            style={{ marginBottom: "1rem" }}
          />
          <TextField
            fullWidth={true}
            InputProps={{
              className: classes.multilineColor,
            }}
            variant='outlined'
            name='Email'
            value='Emails'
            className={classes.textField}
            style={{ marginBottom: "1rem" }}
          />
          <TextField
            fullWidth={true}
            InputProps={{
              className: classes.multilineColor,
            }}
            InputLabelProps={{
              className: classes.floatingLabelFocusStyle,
            }}
            variant='outlined'
            name='Company'
            value='Company'
            className={classes.textField}
            style={{ marginBottom: "1rem" }}
          />

          <Button
            className={classes.button}
            variant='contained'
            color='#FF007F'
            fullWidth={true}
            endIcon={<Send />}
            style={{
              border: "2px solid #FFFF",
              textColor: "white",
              background: "#FF007F",
              height: 45,
              padding: "0 30px",
            }}
          >
            Conatct me
          </Button>
        </Box>
      </Grid>
    </Box>
  )
}

export default Contacts
