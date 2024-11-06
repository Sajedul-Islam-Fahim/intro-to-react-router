import { Outlet, useLocation, useNavigation } from "react-router-dom";
import NavBar from "../Header/NavBar";
import Footer from "../Footer/Footer";

const Home = () => {
    const navigation = useNavigation();
    const location = useLocation();
    console.log(location);
    return (
        <div>
            <NavBar></NavBar>
            {
                navigation.state === "loading" ? <p>Loading...</p> : <Outlet></Outlet>
            }
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Home;