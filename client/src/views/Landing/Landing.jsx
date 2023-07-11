import { Link } from "react-router-dom";
import style from "./Landing.module.css";

const Landing = () =>{
    return(
        <div className={style.Landing}>
            <h1>Discover the features of your favorite Pokemon</h1>
            <Link to="/home" className={style.Home}> 
                <p>S T A R T</p>
            </Link>
        </div>
    )
};

export default Landing;