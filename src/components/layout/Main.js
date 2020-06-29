import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import AboutPage from "../about/AboutPage";
import CoursePage from "../courses/coursesPage";
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";
import ManageCoursePage from "../courses/ManagrCoursePage";
const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    maxWidth: "100%",
    maxHeight: "100%"
  },

  toolbar: {
    paddingRight: 24,
    minHeight: 56
  },
  toolIBar: {
    backgroundColor: "#FF5C39",
    marginTop: 0,
    minHeight: 55
  },
  toolCBar: {
    backgroundColor: "#FF5C39",

    border: 0,
    boxShadow: "none",
    marginTop: "0",
    alignItems: "center",
    justifyContent: "flex-end"
  },
  toolbarIcon: {
    minHeight: 54,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end"
  },
  iconStyle: {
    backgroundColor: "#FF5C39"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: "#3F4A58",
    minHeight: 58,

    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: 36
  },
  menuButtonHidden: {
    display: "none"
  },
  title: {
    flexGrow: 1
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9)
    }
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto"
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column"
  },
  fixedHeight: {
    height: 640
  },
  flexGrow: {
    flexGrow: 1
  }
}));

export default function Main() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [redirectToAddCourse, setAddCourse] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleManageCoursePage = () => {
    setAddCourse(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>
      <Topbar
        classes={classes}
        handleDrawerOpen={handleDrawerOpen}
        open={open}
        position="absolute"
      />
      <Sidebar
        classes={classes}
        open={open}
        handleDrawerClose={handleDrawerClose}
      />

      <main className={classes.content} position="absolute">
        <div className={classes.appBarSpacer} position="absolute" />

        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            {/* Main Course Page */}
            <Grid>
              <CoursePage />
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <ManageCoursePage />
              </Paper>
            </Grid>
            {/* About Page */}
            <Grid item xs={12}>
              <Paper className={classes.paper}>{/*<AboutPage />*/}</Paper>
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  );
}
/*
<Paper className={fixedHeightPaper}></Paper>
*/
