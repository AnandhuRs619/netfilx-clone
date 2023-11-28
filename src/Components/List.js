import React, { useEffect, useState } from 'react'
import { imageUrl,API_KEY,URL } from '../Api/Api'

import Modal from './modal';
import axios from '../Api/axios';

const List = ({title,param,url}) => {
  const [movies , setMovies]=useState([]);
  const [selectedVideoId, setSelectedVideoId] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  useEffect(()=>{
    axios.get(url).then(response=>{
      console.log(response.data.results);
      setMovies(response.data.results)
    }).catch(error=>{
      // alert("Network error")
    })
  },[url])
  
  

  const handleMovie = (id) => {
    console.log(id);
    axios.get(`${URL}/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response) => {
      console.log(response.data);
      if (response.data.results.length !== 0) {
        setSelectedVideoId(response.data.results[0].key); // Set the selected video id
        setModalOpen(true); // Open the modal when video data is available
      } else {
        console.log('Movie not available');
      }
    }).catch((error) => {
      // Handle error
    });
  };
    const closeModal = () => {
      setModalOpen(false); // Close the modal
    };

    return (
      <div className="list">
        <div className="row">
          <h2 className="text-white title">{title}</h2>
          <div className="col">
            <div className="row__posters">
              {movies.map((obj) => (
                <img
                  onClick={() => handleMovie(obj.id)}
                  className="row__poster row__posterLarge"
                  src={`${imageUrl + obj.backdrop_path}`}
                  alt={obj.title}
                />
              ))}
            </div>
          </div>
          {modalOpen && <Modal videoId={selectedVideoId} closeModal={closeModal} />} 
        </div>
      </div>
    );
  };
  
export default List ;

