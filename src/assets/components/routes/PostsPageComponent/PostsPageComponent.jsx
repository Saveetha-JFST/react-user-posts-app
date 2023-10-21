import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './PostsPageComponent.css'

const PostsPageComponent = () => {
    const [data, setData] = useState([])
    const [currentIndex, setCurrentIndex] = useState(0);
    const [renderedData, setRenderedData] = useState([]);

    useEffect(() => {
      axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response) => setData(response.data))
    }, []);

    const fetchData = () => {
      if (currentIndex < data.length - 1) {
        const newDataToRender = [...renderedData, data[currentIndex]];
        setRenderedData(newDataToRender);
        setCurrentIndex(currentIndex + 1);
      } else {
        alert('No more data available.');
      }
    }

  return (
    <React.Fragment>
      <h1 className='header'>Posts</h1>
        {renderedData.map((item, index) => (
          <section className='post-container' key={index}>
            <p className='post-title'>{JSON.stringify(item.title, null, 2)}</p>
            <p className='post-data'>{JSON.stringify(item.body, null, 2)}</p>
          </section>
        ))}
        <div className='button-container'>
            <button className='get-post-button' onClick={fetchData}>Get Post!</button>
        </div>
        </React.Fragment>
  )
}

export default PostsPageComponent