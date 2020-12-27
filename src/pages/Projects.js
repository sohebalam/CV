import React from "react"
import {
  Box,
  CardMedia,
  Grid,
  makeStyles,
  CardActionArea,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@material-ui/core"

import project1 from "../images/html-css-javascript-lg.jpg"
import project2 from "../images/javascript-fullstack.jpg"
import project3 from "../images/mern-stack.jpg"
import project4 from "../images/react-redux.jpg"

const useStyles = makeStyles({
  mainContainer: {
    // background: "#233",
    height: "100%",
  },
  cardContainer: {
    maxWidth: 345,
    maxHeight: 500,
    margin: "3rem",

    // margin: "5rem auto",
  },
})

const Projects = () => {
  const classes = useStyles()

  return (
    <>
      <Box component='div' className={classes.mainContainer}>
        <Grid container spacing={1}>
          <Grid container item xs={12} sm={6} spacing={1} justify='center'>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component='img'
                  alt='Project 1'
                  height='240'
                  image={project1}
                ></CardMedia>
                <CardContent>
                  <Typography gutterBottom variant='h6'>
                    Project 1
                  </Typography>
                  <Typography
                    gutterBottom
                    variant='body2'
                    color='textSecondary'
                    component='p'
                  >
                    They floated in the human system. That was Wintermute,
                    manipulating the lock the way it had manipulated the drone
                    micro and the amplified breathing of the bright void beyond
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size='small' color='primary'>
                  Share
                </Button>
                <Button size='small' color='primary'>
                  Live Demo
                </Button>
              </CardActions>
            </Card>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component='img'
                  alt='Project 2'
                  height='240'
                  image={project2}
                ></CardMedia>
                <CardContent>
                  <Typography gutterBottom variant='h6'>
                    Project 2
                  </Typography>
                  <Typography
                    gutterBottom
                    variant='body2'
                    color='textSecondary'
                    component='p'
                  >
                    They floated in the human system. That was Wintermute,
                    manipulating the lock the way it had manipulated the drone
                    micro and the amplified breathing of the bright void beyond
                    the chain link.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size='small' color='primary'>
                  Share
                </Button>
                <Button size='small' color='primary'>
                  Live Demo
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid container item xs={12} sm={6} spacing={1} justify='center'>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component='img'
                  alt='Project 3'
                  height='240'
                  image={project3}
                ></CardMedia>
                <CardContent>
                  <Typography gutterBottom variant='h6'>
                    Project 3
                  </Typography>
                  <Typography
                    gutterBottom
                    variant='body2'
                    color='textSecondary'
                    component='p'
                  >
                    They floated in the human system. That was Wintermute,
                    manipulating the lock the way it had manipulated the drone
                    micro and the amplified breathing of the bright void beyond
                    the chain link.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size='small' color='primary'>
                  Share
                </Button>
                <Button size='small' color='primary'>
                  Live Demo
                </Button>
              </CardActions>
            </Card>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component='img'
                  alt='Project 4'
                  height='240'
                  image={project4}
                ></CardMedia>
                <CardContent>
                  <Typography gutterBottom variant='h6'>
                    Project 4
                  </Typography>
                  <Typography
                    gutterBottom
                    variant='body2'
                    color='textSecondary'
                    component='p'
                  >
                    They floated in the human system. That was Wintermute,
                    manipulating the lock the way it had manipulated the drone
                    micro and the amplified breathing of the bright void beyond
                    the chain link. A narrow wedge of light from a half-open
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size='small' color='primary'>
                  Share
                </Button>
                <Button size='small' color='primary'>
                  Live Demo
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Projects
