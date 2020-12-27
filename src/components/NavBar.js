import React from "react"
import { AppBar, Toolbar, IconButton, Box, Typography } from "@material-ui/core"
import MenuIcon from "@material-ui/icons/Menu"

const NavBar = ({ toggle }) => {
  return (
    <div>
      <Box component='div'></Box>
      <Box component='nav'>
        <AppBar position='static' style={{ background: "#FF007F" }}>
          <Toolbar>
            <IconButton onClick={toggle}>
              <MenuIcon style={{ color: "#000099" }} />
            </IconButton>
            <Typography variant='h5'>Portfolio CV</Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  )
}

export default NavBar
