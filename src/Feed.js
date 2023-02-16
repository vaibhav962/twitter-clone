import React, { useEffect, useState } from 'react';
import './Feed.css';
import TweetBox from './TweetBox';
import Post from './Post';
import db from './firebase';
import FlipMove from 'react-flip-move';

function Feed() {
  const [posts, setPosts] = useState([]);
//fetch data from firebase
  useEffect(() => {
    db.collection('posts').onSnapshot(snapshot => (
      setPosts(snapshot.docs.map(doc => doc.data()))
    ))
  }, []);

  return (
    <div className="feed">
        {/* Header */}
        <div className="feed__header">
          <h2>Home</h2>
        </div>

        {/* TweetBox */}
        <TweetBox />

        {/* Post */}
        <FlipMove>
          {posts.map(post => (
            <Post
              key={post.text}
              displayName={post.displayName}
              username={post.username}
              verified={post.verified}
              text={post.text}
              avatar={post.avatar}
              image={post.image}
            />
          ))}
        </FlipMove>

        {/* <Post 
          displayName="Vaibhav Chauhan" 
          username="Vaibhav_962" 
          verified={true} 
          text="Yeah its running perfectly" 
          avatar="/profile_picture.jpg" 
          image="https://media.tenor.com/P8VsDwHZreYAAAAC/tobey-maguire-spider-man.gif" 
        /> */}
    </div>
  )
}

export default Feed