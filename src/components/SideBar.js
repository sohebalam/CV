import React from "react"
import {
  ListItemText,
  Avatar,
  ListItemIcon,
  List,
  makeStyles,
  Drawer,
  ListItem,
} from "@material-ui/core"
import avatar from "../images/avataaars.png"
import { AssignmentInd, Home, Apps, ContactMail } from "@material-ui/icons"
import { Link } from "react-router-dom"
import Footer from "./Footer"

const useStyles = makeStyles((theme) => ({
  avatar: {
    display: "block",
    margin: "0.5rem auto",
    width: theme.spacing(13),
    height: theme.spacing(13),
  },

  paper: {
    background: "#FF0097",
  },
  listItem: {
    color: "white",
  },
}))

const menuItems = [
  { id: 1, listIcon: <Home />, listText: "Home", listPath: "/" },
  { id: 2, listIcon: <AssignmentInd />, listText: "CV", listPath: "/resume" },
  { id: 3, listIcon: <Apps />, listText: "Projects ", listPath: "/projects" },
  {
    id: 4,
    listIcon: <ContactMail />,
    listText: "Contacts",
    listPath: "/contacts",
  },
]

const SideBar = ({ isOpen, toggle }) => {
  const classes = useStyles()
  return (
    <>
      <Drawer
        classes={{ paper: classes.paper }}
        anchor='left'
        open={isOpen}
        onClick={toggle}
      >
        <div style={{ width: "15rem" }}></div>
        <Avatar className={classes.avatar} src={avatar} alt='Seb avatar' />
        <List>
          {menuItems.map((lsItem, key) => (
            <>
              <ListItem
                button
                key={lsItem.id}
                component={Link}
                to={lsItem.listPath}
              >
                <ListItemIcon className={classes.listItem}>
                  {lsItem.listIcon}
                </ListItemIcon>
                <ListItemText className={classes.listItem}>
                  {lsItem.listText}
                </ListItemText>
              </ListItem>
            </>
          ))}
        </List>
        <Footer />
      </Drawer>
    </>
  )
}

export default SideBar
