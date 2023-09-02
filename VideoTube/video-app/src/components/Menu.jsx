import React from 'react'
import styled from "styled-components"
import Logo1 from "../Images/logo.png"
import HomeIcon from "@mui/icons-material/Home";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import SportsBasketballOutlinedIcon from "@mui/icons-material/SportsBasketballOutlined";
import MovieOutlinedIcon from "@mui/icons-material/MovieOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import SettingsBrightnessOutlinedIcon from "@mui/icons-material/SettingsBrightnessOutlined";
import { Link } from "react-router-dom";

const Container = styled.div`
flex:1;
background:${({ theme }) => theme.bgLighter};
 height: 100%;
color:${({ theme }) => theme.text}
 text-align: center;
 padding: 10px 0;
position: sticky;
  top: 0;

`;
const Wrapper = styled.div`
color:${({ theme }) => theme.bgLighter}
 height:95%;
 margin: 15px 9px;
`;
const Logo = styled.div`
  color:white;
   display:flex; 
   margin:8px 10px;
    font-weight: bold;
     align-items:center;
     color: ${({ theme }) => theme.text};

`
const Img = styled.img`
 height:35px;
  border-radius:20%;
  margin-right:5px;
`
const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;
const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  padding: 7.5px 0px;
  color: ${({ theme }) => theme.text};
  &:hover {
    background-color: ${({ theme }) => theme.textSoft};
  }
`;
const Login = styled.div`color: ${({ theme }) => theme.text};`;
const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  margin-top: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Title = styled.h2`
  font-size: 14px;
  font-weight: 500;
  color: #aaaaaa;
  margin-bottom: 20px;
`;
const Menu = ({ darkMode, setDarkMode }) => {

    return (
        <Container>
            <Wrapper>
                <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                    <Logo>
                        <Img src={Logo1} />
                        VideoTube
                    </Logo>
                </Link>
                <Item>
                    <HomeIcon />
                    Home
                </Item>
                <Link to="/trends" style={{ textDecoration: "none", color: "inherit" }}>
                    <Item>
                        <ExploreOutlinedIcon />
                        Explore
                    </Item></Link>

                <Link to="/subChannels" style={{ textDecoration: "none", color: "inherit" }}>
                    <Item>
                        <SubscriptionsOutlinedIcon />
                        Subscriptions
                    </Item>
                </Link>

                <Hr />
                <Item>
                    <VideoLibraryOutlinedIcon />
                    Library
                </Item>
                <Item>
                    <HistoryOutlinedIcon />
                    History
                </Item>
                <Hr />
                <Login>
                    Sign in to like videos, comment, and subscribe.
                    <Link to="signin" style={{ textDecoration: "none" }}>
                        <Button>
                            <AccountCircleOutlinedIcon />
                            SIGN IN
                        </Button>
                    </Link>
                </Login>
                <Hr />
                <Title>BEST OF VIDEOTUBE</Title>
                <Item>
                    <LibraryMusicOutlinedIcon />
                    Music
                </Item>
                <Item>
                    <SportsBasketballOutlinedIcon />
                    Sports
                </Item>
                <Item>
                    <SportsEsportsOutlinedIcon />
                    Gaming
                </Item>
                <Item>
                    <MovieOutlinedIcon />
                    Movies
                </Item>
                <Item>
                    <ArticleOutlinedIcon />
                    News
                </Item>
                <Item>
                    <LiveTvOutlinedIcon />
                    Live
                </Item>
                <Hr />
                <Item>
                    <SettingsOutlinedIcon />
                    Settings
                </Item>
                <Item>
                    <FlagOutlinedIcon />
                    Report
                </Item>
                <Item>
                    <HelpOutlineOutlinedIcon />
                    Help
                </Item>
                <Item onClick={() => setDarkMode(!darkMode)}>
                    <SettingsBrightnessOutlinedIcon />
                    {darkMode ? "Light" : "Dark"} Mode
                </Item>
            </Wrapper>
        </Container >
    )
}

export default Menu
