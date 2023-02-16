import React from 'react';
import './Widgets.css';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed } from "react-twitter-embed";
import SearchIcon from '@mui/icons-material/Search';

function Widgets() {
  return (
    <div className='widgets'>
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder='Search Twitter' type="text" />
      </div>

      <div className="widgets__widgetcontainer">
        <h2>What's happening</h2>

        <TwitterTweetEmbed tweetId={"1585841080431321088"} />

        <TwitterTimelineEmbed 
        sourceType="profile"
        screenName="Vaibhav_962"
        options={{ height: 300 }} />

        <div className="widgets_shareButton">
          <TwitterShareButton className="widgets_shareButton" 
          url={"https://www.instagram.com/vaibhav.962/"}
          options={{ text:"This is my instagram profile", via: "Vaibhav_962" }} />
        </div>
      </div>
    </div>
  )
}

export default Widgets;