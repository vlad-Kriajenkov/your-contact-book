import HomeBar from "components/HomeBar/HomeBar";
import { Outlet } from "react-router-dom";
import { Box } from "./Home.styled";

const Home = () => {
    return(
        <Box>
            <HomeBar/>
            <Outlet/>
        </Box>
    )
};
export default Home;
