import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Comment from '../Comment/Comment';

const PostDetails = () => {

    let { id } = useParams()


    // Post API
    const [postDetail, setPostDetail] = useState({})
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${id}`
        axios(url).then(data => setPostDetail(data.data))
    }, [])

    const { body, title } = postDetail



    // Random User API

    const [user, setUser] = useState([])
    useEffect(() => {
        axios(`https://randomuser.me/api`)
            .then(data => setUser(data.data.results))
    }, [])


    return (
        <div>
            {
                user.map(user =>
                    <section>
                        <div className="container">
                            <div className="box text">
                                <div className="box-header">
                                    <h3> <a href="/"><img src={user.picture.medium} alt="" />{` ${user.name.last}`}</a>
                                        <span>@ {user.email} <i className="fa fa-globe"></i></span>
                                    </h3>
                                    <span><i className="ion-more"></i></span>
                                    <div className="window"><span></span></div>
                                </div>
                                <div className="box-content">
                                    <div className="content">
                                        <h3>{title}</h3>
                                        <h5>{body}</h5>
                                    </div>
                                </div>
                                <hr/>
                                <Comment ></Comment>
                            </div>
                        </div>
                    </section>)
            }

        </div>
    );
};

export default PostDetails;