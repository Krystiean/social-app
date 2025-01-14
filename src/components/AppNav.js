import axios from "axios";
import "./AppNav.css"
import { Link } from "react-router-dom";

const AppNav = (props) => {

    const handleLogout = (e) => {
        e.preventDefault();
        axios
			.post('https://akademia108.pl/api/social-app/user/logout', {
				mode: 'cors',
			})
			.then((res) => {
                if(res.data.message) {
                    props.setUser(null);
                    localStorage.setItem('user', null);
                }
            })
			.catch((error) => {
                props.setUser(null);
                localStorage.setItem('user', null);
				console.log(error);
			});
    }
        

    return (
        <nav className="mainNav">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                {!props.user && <li>
                    <Link to="/login">Login</Link>
                </li>}
                {!props.user && <li>
                    <Link to="/signup">signup</Link>
                </li>}

                {props.user && <li>
                    <Link to="/" onClick={handleLogout}>Logout</Link>
                </li>}
            </ul>
        </nav>
    )
}

export default AppNav;