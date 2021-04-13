import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ThemeContext, {
  GlobalStyles,
  theme,
} from "./components/context/ThemeContext";
import Header from "./components/Header";
import Hotels from "./pages/Hotels";
import hotelsData from "./data/hotelsData";
import NavBar from "./components/NavBar";
import About from "./pages/About";
import HotelExtended from "./pages/HotelExtended";
import Contact from "./pages/Contact";

function App() {
  const [hotels, setHotels] = useState(hotelsData);
  const [themeMode, setThemeMode] = useState("light");
  const searchHandler = (term) => {
    setHotels(
      hotelsData.filter((hotel) =>
        hotel.name.toLowerCase().includes(term.toLowerCase())
      )
    );
  };

  return (
    <Router>
      <ThemeProvider
        theme={themeMode === "dark" ? theme.darkTheme : theme.lightTheme}
      >
        <Container>
          <GlobalStyles />
          <Header />
          <ThemeContext.Provider value={{ themeMode, setThemeMode }}>
            <NavBar searchHandler={searchHandler} />
          </ThemeContext.Provider>
          <Switch>
            <Route path='/Booking-App/hotel/:id' component={HotelExtended} />
            <Route path='/Booking-App/about' component={About} />
            <Route path='/Booking-App/contact' component={Contact} />
            <Route path='/Booking-App/'>
              <Hotels hotels={hotels} />
            </Route>
          </Switch>
        </Container>
      </ThemeProvider>
    </Router>
  );
}

export default App;

const Container = styled.div``;
