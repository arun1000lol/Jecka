import './App.css';
import './style.css';
import { Link, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <>
      <div>
        <img style={{ marginLeft: '2px' }} className="picmix-jecka" src="/src/assets/picmix1.gif" alt="picmix1" />
        <img className="picmix-jecka" src="/src/assets/picmix2.gif" alt="picmix2" />
        <img className="picmix-jecka" src="/src/assets/picmix3.gif" alt="picmix3" />
        <img className="picmix-jecka" src="/src/assets/picmix4.gif" alt="picmix4" />
        <img className="picmix-jecka" src="/src/assets/picmix5.gif" alt="picmix5" />
        <img className="picmix-jecka" src="/src/assets/picmix6.gif" alt="picmix6" />
        <img className="picmix-jecka" src="/src/assets/picmix7.gif" alt="picmix7" />
        <img className="picmix-jecka" src="/src/assets/picmix8.gif" alt="picmix8" />
      </div>
      <div>
        <div className="jecka-pic">
          <img className="jecka-pic" src="/src/assets/jecka.png" alt="Jecka" />
        </div>
        <div className="intro-text">
          This site is dedicated to Jessica A.K.A Jecka from the Class of '09 trilogy.
          <br />
          I DO NOT CONDONE ANYTHING THAT JECKA DOES OR SAYS IN THE GAME, THIS SITE IS PURELY A JOKE AND IS NOT MEANT TO BE TAKEN SERIOUSLY.
        </div>
        <div className="intro-text">
          if you havent had the chance of playing Class of '09 yet, you should do everyone a favor and buy it here:
          <iframe src="https://store.steampowered.com/widget/1443200/" frameBorder="0" width="646" height="190"></iframe>
        </div>
        <nav>
            <Link to="/home">
            <button
              className="intro-button"
              onClick={() => {
              const elementsToClear = document.querySelectorAll('div > div, div > img');
              elementsToClear.forEach((element) => {
                element.innerHTML = '';
                element.remove();
              });
              }}
            >
              ENTER SITE
            </button>
            </Link>
        </nav>
      </div>

      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;