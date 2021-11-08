import './Main.scss';
import Header from '../Header/Header.jsx';
import Hero from '../Hero/Hero.jsx';
import Todos from '../Todos/Todos.jsx';

function Main() {
	return (
		<>
			<div className='main-section'>
				<Header />

				<Hero />

				<Todos />
			</div>
		</>
	);
}

export default Main;
