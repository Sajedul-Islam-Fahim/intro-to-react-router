import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
    const user = useLoaderData();
    const {name, email, phone, website} = user;
    return (
        <div style={{border: '2px solid red', margin: '10px', padding: '10px',borderRadius: '10px'}}>
            <h2>User Details</h2>
            <p>User Name: {name}</p>
            <p>User Email: {email}</p>
            <p>User Phone: {phone}</p>
            <p>User Website: {website}</p>
        </div>
    );
};

export default UserDetails;