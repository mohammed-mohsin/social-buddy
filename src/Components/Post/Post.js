import React, { useState, useEffect } from 'react';
import './Post.css'
import { Button } from '@material-ui/core';
import axios from 'axios';
import { Link } from 'react-router-dom';




const Post = (props) => {

    const { title, id } = props.post


    // Random User

    const [user, setUser] = useState([])
    useEffect(() => {
        axios(`https://randomuser.me/api/?results=1`)
            // .then(data => console.log(data.data))
            .then(data => setUser(data.data.results))
    }, [])

    return (
        <div>

            {
                user.map(user => <section>
                    <div className="container">
                        <div className="box text">
                            <div className="box-header">
                                <h3> <a href=""><img src={user.picture.large} alt="" />{user.name.last}</a>
                                    <span>{`@ ${user.email}`}<i className="fa fa-globe"></i></span>
                                </h3>
                                <span><i className="ion-more"></i></span>
                                <div className="window"><span></span></div>
                            </div>
                            <div className="box-content">
                                <div className="content">
                                    <h3>{title}</h3>
                                </div>
                            </div>
                            <div className="box-buttons">
                                <div className="row">
                                    <Link to={`/post/${id}`}>
                                        <Button style={{
                                            color: "#9197A3",
                                            marginLeft: "35%",

                                        }} variant="outlined">Full Post</Button>
                                    </Link>

                                </div>
                            </div>

                        </div>

                    </div>
                </section>)
            }

        </div>
    );
};

export default Post;