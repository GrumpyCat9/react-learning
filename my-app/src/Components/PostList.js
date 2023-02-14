import { useState } from "react"

import classes from "./PostList.module.css"
import Post from "./Post"
import NewPost from "./NewPost"

function Postlist(){

    const [enteredBody, setEnteredBody] = useState(""); //by default empty
    const [enteredAuthor, setEnteredAuthor] = useState("")

    function changeBodyHandler(event){
      setEnteredBody(event.target.value)
    }

    function changeAuthorHandler(event){
        setEnteredAuthor(event.target.value)
    }

    return <>
        <NewPost onBodyChange={changeBodyHandler} onAuthorChange={changeAuthorHandler} />
        <ul className={classes.posts}>
            <Post author = {enteredAuthor} body = {enteredBody}/>
            <Post author = "Naveed" body = "welcome to Sri lanka"/>
        </ul>
    </>
}

export default Postlist