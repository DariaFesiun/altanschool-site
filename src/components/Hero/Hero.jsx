import './Hero.scss';

export const Hero = () => {
	return (
		<section className="hero" id="home">
				<h1 className="hero__title hero__title--mobile">ORGANIC FASHION</h1>

				<div className="hero__container">
					<div className="hero__text-block">
						<h1 className="hero__title hero__title--desktop">ORGANIC FASHION</h1>

						<p className="hero__text">
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.      </p>

						<button className="hero__button">SHOP NOW</button>
					</div>

					<div className="hero__image-wrapper">
						<img
							src="./img/main-page.png"
							alt="Main img"
							className="hero__image"
						/>
					</div>
				</div>
		</section>
	);
};