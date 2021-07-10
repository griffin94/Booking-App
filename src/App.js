import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import ThemeContext, {
  GlobalStyles,
  theme,
} from "./components/context/ThemeContext";
import Header from "./components/Header";
import Hotels from "./pages/Hotels";
import NavBar from "./components/NavBar";
import About from "./pages/About";
import HotelExtended from "./pages/HotelExtended";
import Contact from "./pages/Contact";
import Search from "./components/Search";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  return (
    <Router>
      <ThemeProvider
        theme={themeMode === "dark" ? theme.darkTheme : theme.lightTheme}
      >
        <Container>
          <GlobalStyles />
          <Header />
          <ThemeContext.Provider value={{ themeMode, setThemeMode }}>
            <NavBar />
          </ThemeContext.Provider>
          <Switch>
            <Route path='/hotel/:id' component={HotelExtended} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <Route path='/search/:term' component={Search} />
            <Route path='/' component={Hotels} />
          </Switch>
        </Container>
      </ThemeProvider>
    </Router>
  );
}

export default App;

const Container = styled.div``;
