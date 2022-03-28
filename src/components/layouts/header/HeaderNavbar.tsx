import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { closeMenu, closeSearch, closeCart } from '../../../context/action/App';
import { setImage } from '../../../context/action/Product';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretRight } from '@fortawesome/free-solid-svg-icons';

interface State {
	App: any;
}

export const HeaderNavbar = () => {
	const { menu, cart, search } = useSelector((state: State) => state.App);
	const dispatch = useDispatch();
	const handleClose = () => {
		dispatch(setImage(0));
		if (menu || search || cart) {
			if (menu) {
				dispatch(closeMenu());
			}
			if (cart) {
				dispatch(closeCart());
			}
			if (search) {
				dispatch(closeSearch());
			}
		}
	};
	return (
		<nav className={menu ? 'navbar active' : 'navbar'}>
			<ul>
				<li>
					<NavLink onClick={handleClose} to="projects">
						proyectos
						<FontAwesomeIcon className="icon" icon={faCaretDown} />
					</NavLink>
					<ul>
						<li>
							<NavLink onClick={handleClose} to="projects/web_dev">
								web development
							</NavLink>
						</li>
					</ul>
				</li>
			</ul>
		</nav>
	);
};
