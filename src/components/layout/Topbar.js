import React from "react";
import clsx from "clsx";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import MenuIcon from "@material-ui/icons/Menu";
import NotificationsIcon from "@material-ui/icons/Notifications";
import RouterLink from "react-router-dom";
import Box from "@material-ui/core/Box";

export default function Topbar(props) {
  return (
    <>
      <CssBaseline />
      <AppBar
        position={props.position}
        className={clsx(
          props.classes.appBar,
          props.open && props.classes.appBarShift
        )}
      >
        <Box>
          <Toolbar className={props.classes.toolbar}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={props.handleDrawerOpen}
              className={clsx(
                props.classes.menuButton,
                props.open && props.classes.menuButtonHidden
              )}
            >
              <MenuIcon />
            </IconButton>

            <Toolbar className={props.classes.toolIBar}>
              <img src="src/icons/logo.svg" />
            </Toolbar>

            <div className={props.classes.flexGrow} />
            <Toolbar>
              <IconButton color="inherit">
                <Badge badgeContent={4} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
            </Toolbar>
          </Toolbar>
        </Box>
      </AppBar>
    </>
  );
}
