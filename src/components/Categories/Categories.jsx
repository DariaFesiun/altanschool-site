import './Categories.scss';
import { categoryImages } from './categoryImages';

export const Categories = () => {
  return (
    <section className="categories" id="shop">
      <h2 className="categories__title">SHOP BY CATEGORIES</h2>

      <div className="categories__grid">
        {categoryImages.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Category ${index + 1}`}
            className="categories__image"
          />
        ))}
      </div>

      <div className="categories__background" />
    </section>
  );
};