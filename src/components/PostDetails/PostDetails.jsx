import { useLoaderData, useNavigate } from "react-router-dom";

const PostDetails = () => {
    const post = useLoaderData();
    const {title, body} = post;         
    const navigate = useNavigate();
    return (
        <div>
            <h2>Post Title: {title}</h2>
            <p>Post Body: {body}</p>
            <button onClick={() => navigate(-1)}>Back</button>
        </div>
    );
};

export default PostDetails;