import './Collection.scss';
import { collectionImages } from './collectionImages';

export const Collection = () => {
  return (
    <section className="collection">
      <h2 className="collection__title">NEW COLLECTION</h2>

      <div className="collection__background">
        <div className="collection__images">
          {collectionImages.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Collection ${index + 1}`}
              className="collection__image"
            />
          ))}
        </div>
      </div>

      <p className="collection__text">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.      </p>
    </section>
  );
};