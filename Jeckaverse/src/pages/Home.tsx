import './Home.css';
import 'xp.css'
import Modal from 'react-modal';
import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';


function Home() {

    // TODO: audio files. Will find a more elegant way to do this later. 

    let Audiofile1 = new Audio('/public/sounds/uncircumsized.mp3');
    let Audiofile2 = new Audio('/public/sounds/killyourmom.mp3');



    // Modal functionality

    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      };
    const [modalIsOpen, setModalIsOpen] = React.useState(false);
    

    function openModal(){
        setModalIsOpen(true);
    }

    function closeModal(){
        setModalIsOpen(false);
    }




    return (
        <>
            <div>
            </div>
            <div className="home">
                <h1 className="home-intro-text">Click a soundfile to play it and hear my favorite Jecka voicelines</h1>
                <p className="windowsxp-text">(cause i love jeckas voice!)</p>
            </div>

            <div>
                <div className='audio-div'>
                    <div>
                        <button className="audio-button" onClick={() => Audiofile1.play()}>
                            Uncircumsized
                        </button>
                    </div>
                    <button className="audio-button" onClick={() => Audiofile2.play()}>
                        kill your mom
                    </button>
                    <button onClick={openModal} className="audio-button">
                        Jecka's voice lines
                    </button>
                    <Modal
                        style={customStyles}
                        isOpen={modalIsOpen}
                        onRequestClose={closeModal}
                        contentLabel='Example Modal'

                        >
                <AudioPlayer
                autoPlay
                src='/sounds/uncircumsized.mp3'
                onEnded={() => closeModal()}
                customIcons={{
                    // TODO: add custom icons with windows xp theme
                    play: <img src="/src/assets/xpplaybutton.png" alt="play" />,
                    pause: <img src="/src/assets/xppausebutton.png" alt="pause" />,
                }}
>
                </AudioPlayer>
                <form>
                  <button onClick={closeModal}>close</button>

                </form>
      </Modal>
                </div>
            </div>
        </>
    );

}

export default Home;
