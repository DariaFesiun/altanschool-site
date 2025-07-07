import './FollowUs.scss';

export const FollowUs = () => {
  return (
    <section className="follow">
      <div className="follow__container">
        <div className="follow__content">
          <h2 className="follow__title">FOLLOW US</h2>

          <form className="follow__form">
            <input type="text" placeholder="Enter your name" className="follow__input" />
            <input type="email" placeholder="Enter a valid email address" className="follow__input" />
            <textarea placeholder="Enter your message" className="follow__textarea"></textarea>
            <button type="submit" className="follow__button">SUBMIT</button>
          </form>
        </div>

        <div className="follow__image-wrapper">
          <img src="./img/follow/follow.png" alt="Follow us" className="follow__image" />
        </div>
      </div>
    </section>
  );
};