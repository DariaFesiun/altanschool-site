import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import { Hero } from '../components/Hero/Hero';
import { Categories } from '../components/Categories/Categories';
import { Collection } from '../components/Collection/Collection';
import { About } from '../components/About/About';
import { FollowUs } from '../components/FollowUs/FollowUs';

const HomePage = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
				<Categories />
				<Collection />
				<About />
				<FollowUs />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;