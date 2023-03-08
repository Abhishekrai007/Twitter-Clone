import React from 'react'
import "./Widgets.css"
import { Search } from '@mui/icons-material'
import { TwitterShareButton, TwitterTweetEmbed } from 'react-twitter-embed'
import { TwitterTimelineEmbed } from 'react-twitter-embed'
const Widgets = () => {
    return (
        <div className='widgets'>
            <div className="widgets__input">
                <Search className='widgest__searchIcon' />
                <input type="text" placeholder='Search Twitter' />
            </div>
            <div className="widgets__widgetContainer">
                <h2>What's Up</h2>
                <TwitterTweetEmbed tweetId={"1632907799549325313"} />
                <TwitterTweetEmbed tweetId={"1632909063683207168"} />
                <TwitterTimelineEmbed sourceType="profile"
                    screenName="kunalb11"
                    options={{ height: 500 }} />

                <TwitterShareButton
                    url={""}
                    options={{
                        text: "@reactjs makes life so easy!",
                        via: "Abhishekrai023"
                    }}

                />
            </div>
        </div>
    )
}

export default Widgets