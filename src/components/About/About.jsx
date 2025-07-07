import './About.scss';

export const About = () => {
	return (
		<section className="about" id="about">
			 <div className="about__container">

        <div className="about__image-wrapper about__image-wrapper--desktop">
          <img src="./img/about/aboutImg.png" alt="About us" className="about__image" />
        </div>

        <div className="about__content">
          <h2 className="about__title">ABOUT US</h2>

          <p className="about__text">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>

          <div className="about__image-wrapper about__image-wrapper--mobile">
            <img src="./img/about/aboutImg.png" alt="About us" className="about__image" />
          </div>

          <p className="about__text">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>

          <button className="about__button">LEARN MORE</button>
        </div>
      </div>
		</section>
	);
};