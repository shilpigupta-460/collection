import React from 'react'
import { useState, useEffect } from 'react';
import styled from "styled-components"
import Card from './Card';
import axios from 'axios'
const Container = styled.div`

  display:flex;
  justify-content: space-between;
   flex-wrap:wrap;
  
`;
// const Container = styled.div`

// display: grid;

// grid-template-columns: repeat(5, 1fr);

// grid-auto-rows: auto;

// grid-gap: 1.5rem;

// `;
const Home = ({ type }) => {
    const [videos, setVideos] = useState([])

    useEffect(() => {

        const fetchVideos = async () => {
            const res = await axios.get(`/videos/${type}`)
            setVideos(res.data)
            console.log(res.data);
        }

        fetchVideos()
    }, [type])


    return (
        <Container>
            {videos.map(video => (
                <Card key={video._id} video={video} />
            ))}

        </Container>
    )
}

export default Home