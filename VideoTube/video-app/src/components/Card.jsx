import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components"
import { format } from "timeago.js" // to show time in ago format
const Container = styled.div`
 
 width: ${(props) => props.type !== "sm" && "360px"};
  margin-bottom: ${(props) => (props.type === "sm" ? "10px" : "45px")};
  cursor: pointer;
  display: ${(props) => props.type === "sm" && "flex"};
  gap: 10px;
`;
const Img = styled.img`
 width:100%;
 height: ${(props) => (props.type === "sm" ? "120px" : "202px")};
  background: gray;

`
const Detail = styled.div`
  margin:5px;
  display:flex;
  margin-top: ${(props) => props.type !== "sm" && "16px"};
  
`
const ChannelImage = styled.div`

background: gray;
width:36px;
height:36px;
border-radius: 50%;
margin: .4rem;
display: ${(props) => props.type === "sm" && "none"};

`
const Texts = styled.div``;
const Name = styled.h3`
font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
  margin: 9px 0px;`
const Info = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
`;
const Card = ({ type, video }) => {
  const [channel, setChannel] = useState({})

  useEffect(() => {

    const fetchChannel = async () => {
      const res = await axios.get(`/users/find/${video.userId}`)
      setChannel(res.data)
      console.log(res.data);
    }

    fetchChannel()
  }, [video.userId])

  return (
    <Link to="video/test" style={{ textDecoration: "none", color: "black" }}>
      <Container type={type}>

        <Img src="https://i9.ytimg.com/vi_webp/k3Vfj-e1Ma4/mqdefault.webp?v=6277c159&sqp=CIjm8JUG&rs=AOn4CLDeKmf_vlMC1q9RBEZu-XQApzm6sA" />
        <Detail type={type}>
          <ChannelImage src="" type={type} />
          <Texts>  {video.title}
            <Name> {channel.name}</Name>
            <Info>{video.views} views • {format(video.createdAt)}</Info>
          </Texts>
        </Detail>
      </Container></Link>
  )
}

export default Card