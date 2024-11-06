import { Link, useNavigate } from "react-router-dom";

const Post = ({post}) => {
    const {id, title} = post;
    const navigate = useNavigate();
    
    const handleButton = () => {
        navigate(`/post/${id}`);

    }
    return (
        <div style={{border: '2px solid red', margin: '10px', padding: '10px',borderRadius: '10px'}}>
            <h2>Post Id: {id}</h2>
            <h3>Post Title: {title}</h3>
            <Link to={`/post/${id}`}>Show Details</Link>
            <button onClick={handleButton}>Click to Show Details</button>
        </div>
    );
};

export default Post;