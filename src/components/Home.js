import { useState, useEffect } from 'react';
import useFetch from '../useFetch';
import Newslist from './Newslist';
import Posts from './Posts';
import '../styles/home.css'

const Home = ({ resizeContent }) => {
    const { data: news, isPending, error } = useFetch(`https://newsapi.org/v2/top-headlines?sources=bbc-news&pageSize=4&apiKey=e8b5910d0c7b4295a518c1d72fc16dfd`);

    return (
        <div className={`home-content ${resizeContent ? 'show' : ''}`}>
            {news && <Newslist news={news} />}
            {/* <Posts /> */}
        </div>
    );
}

export default Home;