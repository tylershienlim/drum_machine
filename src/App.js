import './App.css';
import { useState } from 'react';

function App() {
  const [sound, setSound] = useState("");

  const handleSound = (e) => {
    document.getElementById(e.target.value).play();
    
  }
  
  return (
    <div className="App">
      <div className='container'>
        <div id="drum-machine">
          <div className='drum-pad-machine'>
              <button className='drum-pad' value="Q" id="heater-1" onClick={handleSound}>
                  <audio className="clip" id="Q" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"/>
                  Q
              </button>
              <button className='drum-pad' value="W" id="heater-2" onClick={handleSound}>
                <audio className='clip' id="W" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"/>
                W
              </button>
              <button className='drum-pad' value="E" id="heater-3" onClick={handleSound}>
                <audio className='clip' id="E" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"/>
                E
              </button>
              <button className='drum-pad' value="A" id="heater-4" onClick={handleSound}>
                <audio className='clip' id="A" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"/>
                A
              </button>
              <button className='drum-pad' value="S" id="clap" onClick={handleSound}>
                <audio className='clip' id="S" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" />
                S
              </button>
              <button className='drum-pad' value="D" id="open-hh" onClick={handleSound}>
                <audio className='clip' id="D" src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"/>
                D
              </button>
              <button className='drum-pad' value="Z" id="kick-n-hat" onClick={handleSound}>
                <audio className='clip' id="Z" src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"/>
                Z
              </button>
              <button className='drum-pad' value="X" id="kick" onClick={handleSound}>
                <audio className='clip' id="X" src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"/>
                X
              </button>
              <button className='drum-pad' value="C" id="closed-hh" onClick={handleSound}>
                <audio className='clip' id="C" src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"/>
                C
              </button>
          </div>
          <div id="display"  >
              Sound played: {sound}
          </div>
        </div>
        <div className='designText'>
          Design and coded by
          <br></br>
          <a href="https://github.com/tylershienlim" target='_blank' rel="noreferrer">
            @tylershienlim
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
