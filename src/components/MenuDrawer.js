import React from "react";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  banner: {
    fontWeight: "700",
    fontSize: "30px"
  }
}));

export default function MenuDrawer() {
  const classes = useStyles();

  return (
    <div>
      <List>
        <ListItem text>
          <ListItemText primary="Gallery" className={classes.banner} />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Year 2018" />
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Year 2019" />
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Year 2020" />
        </ListItem>
      </List>
    </div>
  );
}
