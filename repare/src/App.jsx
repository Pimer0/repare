
import Header from './Header';
import DivBaseline from './DivBaseline'
import Slider from './Slider';
import "./slider-style.css";
import {slides} from "/src/Data/sliderData.json";

const App = () => {
  return (
    <div className="App">
      <Header />
      <DivBaseline/>
      <Slider data={slides}/>
    </div>
  );
};

export default App;
