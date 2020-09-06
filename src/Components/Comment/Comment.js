import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import "./Comment"

const Comment = (props) => {


    let { id } = useParams()


    // Comment Api
    const [comment, setComment] = useState([])
    useEffect(() => {
        axios(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
            .then(data => setComment(data.data))

    }, [])



    // Random User

    const [user, setUser] = useState([])
    useEffect(() => {
        axios(`https://randomuser.me/api`)
            .then(data => setUser(data.data.results))
    }, [])



    return (
        <div>
            {
                comment.map(comment =>
                    <div>
                        <section>
                            <div className="container">
                                <div className="box text">
                                    <div className="box-comments">
                                        <div className="comment"> {user.map(user => <img src={user.picture.thumbnail} alt="" />)}
                                            <div className="content">
                                                <h5>{`@  ${comment.email}`}</h5>
                                                <p> {comment.name} </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>)
            }
        </div>
    );
};

export default Comment;