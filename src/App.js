import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import HowItWorks from "./pages/HowItWorks";
import Faq from "./pages/Faq";
import Apply from "./pages/Apply";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import Footer from "./component/Footer";
import { grey } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#1FCF6E",
    },
    secondary: {
      main: "#128E5A",
    },
    info: {
      main: "#1F28CF",
    },
    disabled: {
      main: "#4B4F51",
    }
  },
  typography: {
    h1: {
      fontSize: "1.9rem",
      fontWeight: "700",
    },
    h2: {
      fontSize: "1.7rem",
      fontWeight: "700",
    },
    h3: {
      fontSize: "1.5rem",
      fontWeight: "500",
    },
    h4: {
      fontSize: "1.2rem",
      fontWeight: "600",
    },
    h5: {
      fontSize: "1rem",
      fontWeight: "600",
    },
    h6: {
      fontSize: "0.8rem",
      fontWeight: "600",
    },
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>  
      <Router>
        <div className="app">
          <Navbar />
          <div className="content">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/About" component={About} />
              <Route exact path="/HowItWorks" component={HowItWorks}/>
              <Route exact path="/Faq" component={Faq} />
              <Route exact path="/Apply" component={Apply} />
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
