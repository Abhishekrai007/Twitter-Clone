import React, { useState } from 'react'
import "./TweetBox.css"
import { Avatar, Button } from '@mui/material';
import db from './firebase';
const TweetBox = () => {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");

    const sendTweet = (e) => {
        e.preventDefault();
        db.collection("posts").add({
            displayName: "Abhishek",
            username: "abhishek123",
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvGYhLHsKEupUERjkjoMtVoXQ2kN1jxRhuSg&usqp=CAU"
        })
        setTweetMessage("")
        setTweetImage("")
    }

    return (
        <div className='tweetBox'>
            <form  >
                <div className="tweetBox__input">
                    <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvGYhLHsKEupUERjkjoMtVoXQ2kN1jxRhuSg&usqp=CAU" />
                    <input
                        onChange={e => setTweetMessage(e.target.value)}
                        value={tweetMessage}
                        type="text"
                        placeholder="What's happening?" />

                </div>
                <input
                    value={tweetImage}
                    onChange={e => setTweetImage(e.target.value)}
                    className="tweetBox__imageInput"
                    type="text"
                    placeholder="Enter image URL" />
                <Button
                    onClick={sendTweet}
                    type="submit"
                    className="tweetBox__tweetButton">Tweet</Button>

            </form>
        </div>
    )
}

export default TweetBox