import styled, { ThemeProvider } from "styled-components"
import Navbar from "./components/Navbar";
import Menu from "./components/Menu"
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./components/SignIn";
import Video from "./components/Video";
import Home from "./components/Home";
import { darkTheme, lightTheme } from "./Theme/Theme";
import Search from "./components/Search";

const Container = styled.div`
display:flex
`;


const Wrapper = styled.div`
 padding: 15px 20px;
`;
const Main = styled.div`
flex: 7;
 background: ${({ theme }) => theme.bg};

`;

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container>
        <BrowserRouter>
          <Menu darkMode={darkMode} setDarkMode={setDarkMode} />
          <Main  >
            <Navbar />
            <Wrapper>
              <Routes>
                <Route path="/">
                  <Route index element={<Home type="random" />} />
                  <Route path="trends" element={<Home type="trends" />} />
                  <Route path="subChannels" element={<Home type="subChannels" />} />
                  <Route path="search" element={<Search />} />
                  <Route path="signin" element={<SignIn />} />
                  <Route path="video">
                    <Route path=":id" element={<Video />} />
                  </Route>
                </Route>
              </Routes>
            </Wrapper>
          </Main>
        </BrowserRouter>
      </Container></ThemeProvider>
  );
}

export default App;
