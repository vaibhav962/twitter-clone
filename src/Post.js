import { Avatar } from '@mui/material';
import React from 'react';
import './Post.css'
import VerifiedIcon from '@mui/icons-material/Verified';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/Publish';

function Post({
    displayName,
    username,
    verified,
    text,
    image,
    avatar
}) {
  return (
    <div className='post'>
         <div className="post__avatar">
            <Avatar src="/profile_picture.jpg"/>
         </div>
         <div className="post__body">
            <div className="post__header">
                <div className="post__headerText">
                    <h3>Vaibhav Chauhan
                        <span className="post__headerSpecial">
                            <VerifiedIcon className="post__badge" /> @Vaibhav_962
                        </span>
                    </h3>
                </div>
                <div className="post__headerDescription">
                    <p>This is the twitter clone using reactJS</p>
                </div>
            </div>
            <img src="https://media.tenor.com/VKB3bTHeXQEAAAAC/thumbs-up-thor.gif" alt="" />
            <div className="post__footer">
                <ChatBubbleOutlineIcon fontSize='small' />
                <RepeatIcon fontSize='small' />
                <FavoriteBorderIcon fontSize='small' />
                <PublishIcon fontSize='small' />
            </div>
         </div>
    </div>
  )
}

export default Post