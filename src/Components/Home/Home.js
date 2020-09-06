import React from 'react';
import Header from '../Header/Header';
import Posts from '../Posts/Posts';

const Home = () => {
    return (
        <div style={{
            padding:"0",
            margin:"0",
            boxSizing:"border-box",
            backgroundColor: '#18191A',
            height: '100%',
            width: '100%'
        }}>
            <Header></Header>
            <Posts></Posts>
        </div>
    );
};

export default Home;