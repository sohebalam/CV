import React from "react"
import {
  makeStyles,
  BottomNavigation,
  BottomNavigationAction,
  Button,
} from "@material-ui/core"
import { Facebook, Twitter, Instagram } from "@material-ui/icons"

const Footer = () => {
  return (
    <BottomNavigation
      width='auto'
      style={{
        background: "inherit",
        position: "absolute",
        bottom: "0",
        width: "100%",
        height: "2.5rem",
      }}
    >
      <Button>
        <BottomNavigationAction
          style={{ padding: 0, color: "white" }}
          icon={<Facebook />}
        />
      </Button>
      <Button>
        <BottomNavigationAction
          style={{ padding: 0, color: "white" }}
          icon={<Twitter />}
        />
      </Button>
      <Button>
        <BottomNavigationAction
          style={{ padding: 0, color: "white" }}
          icon={<Instagram />}
        />
      </Button>
    </BottomNavigation>
  )
}

export default Footer
