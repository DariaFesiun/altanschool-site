import { useState } from 'react';
import './Header.scss';

export const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(prev => !prev);
	};

	const closeMenu = () => {
		setIsOpen(false);
	};

	const scrollToSection = (id) => {
		const section = document.getElementById(id);
		if (section) {
			section.scrollIntoView({ behavior: 'smooth' });
		}
	};

	const handleNavClick = (target) => {
		closeMenu();

		if (target === 'blog' || target === 'contact') {
			alert('Сторінка перебуває в розробці 🛠️');
		} else {
			scrollToSection(target);
		}
	};

	return (
		<header className="header">
			<div className="header__container">
				<div
					className="header__logo"
					onClick={closeMenu}
				>
					ALTANSCHOOL WEB COURSES
				</div>

				<nav className={`header__nav ${isOpen ? 'header__nav--open' : ''}`}>
					<a onClick={() => handleNavClick('home')}>HOME</a>
					<a onClick={() => handleNavClick('about')}>ABOUT</a>
					<a onClick={() => handleNavClick('shop')}>SHOP</a>
					<a onClick={() => handleNavClick('blog')}>BLOG</a>
					<a onClick={() => handleNavClick('contact')}>CONTACT</a>
				</nav>

				<button className="header__menu-toggle" onClick={toggleMenu}>
					{isOpen ? (
						<span className="header__close">&times;</span>
					) : (
						<img src="./img/burger.png" alt="Menu" className="header__burger-icon" />
					)}
				</button>
			</div>
		</header>
	);
};