import IconBar from "./NavBar"
import React, { useState } from "react"
import SideBar from "./SideBar"

const TopBar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div>
      <IconBar toggle={toggle} />
      <SideBar isOpen={isOpen} toggle={toggle} />
    </div>
  )
}

export default TopBar
