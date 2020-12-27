import React from "react"
import { Drawer } from "@material-ui/core"

const SideBar = ({ setOpen, handelDrawer }) => {
  const [open, setOpen] = useState(false)

  const handelDrawer = () => {
    setOpen(true)
  }

  return (
    <div>
      <Drawer
        classes={{ paper: classes.paper }}
        anchor='left'
        open={open}
        onClose={() => setOpen(false)}
        onClick={() => setOpen(false)}
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
    </div>
  )
}

export default SideBar
