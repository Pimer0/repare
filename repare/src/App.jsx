
import Header from './Header';
import DivBaseline from './DivBaseline'
import Slider from './Slider';
import "./slider-style.css";
import {slides} from "/src/Data/sliderData.json";
import DivGeo from './DivGeo';
import DivCTA from './DivCTA';
import DivQui from './DivQui';
import DivTextFin from './DivTextFin';
import Footer from './Footer';

const App = () => {
  return (
    <div className="App">
      <Header />
      <DivBaseline/>
      <Slider data={slides}/>
      <DivGeo />
      <DivCTA />
      <DivQui />
      <DivTextFin />
      <Footer />
    </div>
  );
};

export default App;
