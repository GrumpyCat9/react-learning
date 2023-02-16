import { useState } from "react";

import classes from "./PostList.module.css";
import Post from "./Post";
import NewPost from "./NewPost";
import Modal from "./Modal";

function Postlist(props) {
  
  const [posts, setPosts]= useState([])

  function addPostHandler(postData){
    setPosts((existingPosts) => [postData, ...existingPosts]);
  }

  return (
    <>
      {props.isPosting ? 
        <Modal onClose={props.hideModalHandler}>
          <NewPost
            onCancel={props.onStopPosting}
            onAddPost={addPostHandler}
          />
        </Modal>
       : false}

      <ul className={classes.posts}>
        <Post author="Naveed" body="welcome to Sri lanka" />
      </ul>
    </>
  );
}

export default Postlist;
