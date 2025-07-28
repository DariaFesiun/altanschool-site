import { useState } from 'react';
import './FollowUs.scss';

export const FollowUs = () => {
	const [formData, setFormData] = useState({
  name: '',
  email: '',
  message: '',
});

const handleSubmit = async (e) => {
  e.preventDefault();

  await fetch('https://daria07.app.n8n.cloud/webhook/form-submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: formData.name,
      email: formData.email,
      message: formData.message,
    }),
  });

	setFormData({ name: '', email: '', message: '' });
};

  return (
    <section className="follow">
      <div className="follow__container">
        <div className="follow__content">
          <h2 className="follow__title">FOLLOW US</h2>

          <form className="follow__form">
            <input 
						  type="text" 
						  placeholder="Enter your name" 
						  className="follow__input"
							value={formData.name}
							onChange={(e) => setFormData({ ...formData, name: e.target.value })}
						/>
            <input 
						  type="email" 
						  placeholder="Enter a valid email address" 
						  className="follow__input" 
							value={formData.email}
						  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
						/>
            <textarea 
						  placeholder="Enter your message" 
						  className="follow__textarea"
							value={formData.message}
						  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
						></textarea>
            <form
						  type="submit" 
						  className="follow__button" 
						  onSubmit={handleSubmit}
						>SUBMIT</form>
          </form>
        </div>

        <div className="follow__image-wrapper">
          <img src="./img/follow/follow.png" alt="Follow us" className="follow__image" />
        </div>
      </div>
    </section>
  );
};