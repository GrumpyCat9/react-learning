import { useState } from "react";

import classes from "./PostList.module.css";
import Post from "./Post";
import NewPost from "./NewPost";
import Modal from "./Modal";

function Postlist(props) {
  

  return (
    <>
      {props.isPosting ? 
        <Modal onClose={props.hideModalHandler}>
          <NewPost
            onCancel={props.onStopPosting}
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
