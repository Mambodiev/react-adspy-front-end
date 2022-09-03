import React from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Brightness4Icon from '@material-ui/icons/Brightness4';
import "./ToggleTheme.css";

const themeLight = createTheme({
  palette: {
    background: {
      default: "#222222!important"
    },
    text: {
      primary: "#fff!important"
    },
  }
});

const themeDark = createTheme({
  palette: {
    background: {
      default: "#fff"
    },
    text: {
      primary: "#222222"
    },
  
  }
});

const App = () => {
  const [light, setLight] = React.useState(true);
  return (
    <MuiThemeProvider theme={light ? themeLight : themeDark}>
      <CssBaseline />
      <Button onClick={() => setLight(prev => !prev)} className={'brightnessIcon'} color='inherit'>
        <Brightness4Icon />
        </Button>
    </MuiThemeProvider>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;