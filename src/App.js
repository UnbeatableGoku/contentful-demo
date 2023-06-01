import './App.css';
import Header from './components/header/Header';
import SmallBanner from './components/banner/smallbanner/SmallBanner';
import MainBanner from './components/banner/mainbanner/MainBanner';
import Category from './components/categories/Category';
import OfferBanner from './components/banner/offerbanner/OfferBanner';
import FeatureProduct from './components/featureproduct/FeatureProduct';
import FooterLevelTwo from './components/footer/FooterLevelTwo';

function App() {
  return (
    <div className='App'>
      <Header />
      <MainBanner />
      <SmallBanner />
      <Category />
      <OfferBanner />
      <FeatureProduct />
      <FooterLevelTwo />
    </div>
  );
}

export default App;
