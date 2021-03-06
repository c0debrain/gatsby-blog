import React from "react"
import { navigate } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import IconButton from "@material-ui/core/IconButton"
import ClickAwayListener from "@material-ui/core/ClickAwayListener"
import Grow from "@material-ui/core/Grow"
import Paper from "@material-ui/core/Paper"
import Popper from "@material-ui/core/Popper"
import MenuItem from "@material-ui/core/MenuItem"
import MenuList from "@material-ui/core/MenuList"
import { css } from "@emotion/core"

// import { makeStyles } from "@material-ui/styles"

// const useStyles = makeStyles(theme => ({
//   root: {
//     display: "inline",
//     float: "right",
//   },
//   paper: {
//     marginRight: 2,
//   },
// }))

function MenuBurger() {
  // const classes = useStyles()
  const [open, setOpen] = React.useState(false)
  const anchorEl = React.useRef(null)

  function handleToggle() {
    setOpen(!open)
  }

  function handleClose(event) {
    if (anchorEl.current.contains(event.target)) {
      return
    }
    setOpen(false)
  }

  return (
    <div
      css={css`
        float: right;
      `}
    >
      <IconButton
        buttonRef={anchorEl}
        aria-owns={open ? "menu-list-grow" : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
        aria-label="Menu button"
      >
        <FontAwesomeIcon icon="bars" />
      </IconButton>
      <Popper
        open={open}
        anchorEl={anchorEl.current}
        transition
        disablePortal
        css={css`
          z-index: 10;
        `}
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            id="menu-list-grow"
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom",
            }}
          >
            <Paper
              css={css`
                margin-right: 50px;
              `}
            >
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList>
                  <MenuItem
                    onClick={() => {
                      setOpen(false)
                      navigate("/")
                    }}
                  >
                    Blog
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      setOpen(false)
                      navigate("/projects")
                    }}
                  >
                    Projects
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      setOpen(false)
                      navigate("/about")
                    }}
                  >
                    About
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      setOpen(false)
                      navigate("/contact")
                    }}
                  >
                    Contact
                  </MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  )
}

export default MenuBurger
