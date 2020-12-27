import React from "react"
import { Typography, Avatar, Grid, Box, makeStyles } from "@material-ui/core"
import avatar from "../images/avataaars.png"
import Typed from "react-typed"

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(15),
  },
  title: {
    color: "white",
  },
  subtitle: {
    color: "white",
    marginBottom: "3rem",
  },
  typedContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100vw",
    textAlign: "center",
    zIndex: 1,
  },
}))

const Header = () => {
  const classes = useStyles()
  return (
    <Box className={classes.typedContainer}>
      <Grid container justify='center'>
        <Avatar className={classes.avatar} src={avatar} alt='seb Alam' />
      </Grid>
      <Typography className={classes.title} variant='h4'>
        <Typed strings={["Seb Alam"]} typeSpeed={40} />
      </Typography>
      <br />
      <Typography className={classes.subtitle} variant='h5'>
        <Typed
          strings={["Finance", "Accounting", "Tech", "Mern Stack"]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
      </Typography>
    </Box>
  )
}

export default Header
