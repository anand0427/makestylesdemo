import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

function App() {
  const useStyles = makeStyles(theme => ({

    root:{
      flexGrow:1,
    },
    paper:{
      padding : theme.spacing(2),
      textAlign : 'center',
      color : theme.palette.text.secondary,
    }

  }));
  const theme = createMuiTheme({
  palette : {
    background : {
      default : "#f5f5f5"
    }
  }
});

    const classes = useStyles();
    return (
      <MuiThemeProvider theme={theme}> <CssBaseline />
      <div className={classes.root}>

        <Grid container spacing = {3}>
              <Grid item xs = {3}>
              <Paper className = {classes.paper} > Paper with padding space 2 and
              color secondary </Paper>
              </Grid>
              <Grid item xs = {3}>
              <Paper className = {classes.paper} > Paper gives material design.
              makestyles method
              is called along with the theme which internally calls
              stylequeryselector which checks if
              we send a function which is why theme is a function </Paper>
              </Grid>
          </Grid>

      </div>
      </MuiThemeProvider>
    );
}
export default App;
