import { useState } from "react";

import classes from "./PostList.module.css";
import Post from "./Post";
import NewPost from "./NewPost";
import Modal from "./Modal";

function Postlist(props) {
  
  const [enteredBody, setEnteredBody] = useState(""); //by default empty
  const [enteredAuthor, setEnteredAuthor] = useState("");

  

  function changeBodyHandler(event) {
    setEnteredBody(event.target.value);
  }

  function changeAuthorHandler(event) {
    setEnteredAuthor(event.target.value);
  }



  return (
    <>
      {props.isPosting ? (
        <Modal onClose={props.onStopPosting}>
          <NewPost
            onBodyChange={changeBodyHandler}
            onAuthorChange={changeAuthorHandler}
          />
        </Modal>
      ) : false}

      <ul className={classes.posts}>
        <Post author={enteredAuthor} body={enteredBody} />
        <Post author="Naveed" body="welcome to Sri lanka" />
      </ul>
    </>
  );
}

export default Postlist;
