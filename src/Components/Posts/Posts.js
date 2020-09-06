import React, { useEffect, useState, } from 'react';
import Post from '../Post/Post';
import axios from 'axios';

const Posts = () => {

    // Post api 
    const [post, setPost] = useState([])
    useEffect(() => {
        axios(`https://jsonplaceholder.typicode.com/posts`)
            .then(data => setPost(data.data))
    }, [])





    return (
        <div>
            {
                post.map(post => <Post key={post.id} post={post}  ></Post>)
            }

        </div>
    );
};

export default Posts;