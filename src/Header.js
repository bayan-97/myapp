import './Header.scss';
import { NavLink } from 'react-router-dom';
const Header = (props) => {
	return (
		<header>
			<h1>RESTy</h1>
			<ul>
				<li>
					<NavLink exact to="/">
						Home
					</NavLink>
				</li>
				<li>
					<NavLink to="/history"> History</NavLink>
				</li>
				<li>
					<NavLink to="/help">About us </NavLink>
				</li>
			</ul>
		</header>
	);
};

export default Header;
