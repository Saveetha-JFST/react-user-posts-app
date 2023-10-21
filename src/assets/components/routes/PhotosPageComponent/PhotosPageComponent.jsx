import axios from 'axios'
import React, { useState } from 'react'
import './PhotosPageComponent.css'

const PhotosPageComponent = () => {

  const [photos, setPhotos] = useState([])

  const getPhotos = () => {
        axios
          .get(`https://jsonplaceholder.typicode.com/photos`)
          .then(response => setPhotos(response.data))
          .catch(error => console.log(error))
  }
  return (
    <React.Fragment>
        <h1 className='header'>Photos</h1>
        <section className='photos-card'>
          {photos.map((iterator,index) => (
            <div className='photo-container' key={index}>
              <img src={iterator.url} className='photo-item'/>
              <p className='name'>{iterator.title}</p>
            </div>
            
          ))}
          <button className='get-button' onClick={getPhotos}>Get Photos</button>
        </section>
        
    </React.Fragment>
  )
}

export default PhotosPageComponent