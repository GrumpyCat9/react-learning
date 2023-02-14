import classes from "./PostList.module.css"
import Post from "./Post"
import NewPost from "./NewPost"

function Postlist(){
    return <>
        <NewPost/>
        <ul className={classes.posts}>
        <Post author = "Nishad" body = "welcome to Sri lanka"/>
        <Post author = "Naveed" body = "welcome to Sri lanka"/>
    </ul>
    </>
}

export default Postlist