import './Header.scss';

import { NavLink } from 'react-router-dom';

import content from '../../Localization/Content.js';
import useLang from '../../Hooks/useLang.js';
import useTheme from '../../Hooks/useTheme.js';
import useToken from '../../Hooks/useToken.js';

import ThemeIcon from '../Lib/ThemeIcon.jsx';

function Header() {
	const [lang, setLang] = useLang();
	const [theme, setTheme] = useTheme();
	const [, setToken] = useToken();

	return (
		<>
			<header className={`header ${theme === 'dark' && 'dark'}`}>
				<a className='page__link' href='#link'>
					{content[lang].main.page}
				</a>

				<select
					className='langs__select'
					value={lang}
					onChange={(evt) => {
						setLang(evt.target.value);
					}}>
					<option value='uz'>O'zbekcha</option>
					<option value='en'>English</option>
				</select>

				<ThemeIcon
					color={theme === 'dark' ? 'white' : 'black'}
					theme={theme}
					setTheme={setTheme}
				/>

				<NavLink
					className='logout__link'
					to='/'
					onClick={() => {
						setToken(false);
						setTheme('light');
					}}>
					Log Out
				</NavLink>
			</header>
		</>
	);
}

export default Header;
