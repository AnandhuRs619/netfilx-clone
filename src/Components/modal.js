import React from 'react';
import YouTube from 'react-youtube';
import './Modal.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';


const Modal = ({ videoId, closeModal }) => {
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="modal">
      <div className="modal__content">
      <button className="close-button" onClick={closeModal}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <YouTube videoId={videoId} opts={opts} />
      </div>
    </div>
  );

};

export default Modal;
