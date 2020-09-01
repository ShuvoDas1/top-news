import React, { useEffect, useState } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import News from '../News/News';

const TopHeadline = () => {
    const [topHeadline,setTopHeadline]=useState([])
    useEffect(() => {
        fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=5c6a4fe8a4ab4f9d914ef269a02bd00f')
        .then(res => res.json())
        .then(data => (setTopHeadline(data.articles)))
    },[])
    console.log(topHeadline)
    return (
        <div>
            <h1>Top Headlines: {topHeadline.length}</h1>
            {
                topHeadline.map(news => <News news={news}></News>)
            }
        </div>
    );
};

export default TopHeadline;