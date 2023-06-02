import './App.css';
import Header from './components/header/Header';
import SmallBanner from './components/banner/smallbanner/SmallBanner';
import MainBanner from './components/banner/mainbanner/MainBanner';
import Category from './components/categories/Category';
import OfferBanner from './components/banner/offerbanner/OfferBanner';
import FeatureProduct from './components/featureproduct/FeatureProduct';
import FooterLevelTwo from './components/footer/FooterLevelTwo';
import Copyright from './components/footer/Copyright';
import NewsLetter from './components/footer/NewsLetter';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <MainBanner />
        <SmallBanner />
        <Category />
        <OfferBanner />
        <FeatureProduct />
        <NewsLetter />
        <FooterLevelTwo />
        <Copyright />
      </BrowserRouter>
    </div>
  );
}

export default App;
