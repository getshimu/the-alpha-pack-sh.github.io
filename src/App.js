import './App.css';
import BgImage from './Images/Asset_9@4x.png'

function App() {
  return (
    <div className="App">
      <h2 className=' custom-font text-7xl mt-10 text-white text-center'>The Alpha Pack</h2>
      <div className=' flex justify-center align-middle mt-24'>
        <img className=' w-1/3' src={BgImage} alt="" />
      </div>

    </div>
  );
}

export default App;
