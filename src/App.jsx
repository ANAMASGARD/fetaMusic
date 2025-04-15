import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useState } from 'react';

function App() {
  const [keyword, setKeywords ] = useState("")
  const [tracks, setTracks] = useState([])

  const getTracks = async () => {
    let data = await fetch("https://v1.nocodeapi.com/ubuntu/spotify/UCGhdvMrhktMjRNj/search?q=daku&type=track")
    let convertedData = await data.json();
    console.log(convertedData.tracks.items);
    setTracks(convertedData.tracks.items);

  }
  return (
    // <> this is a jsx fragment, it allows you to group multiple elements without adding extra nodes to the DOM 
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      fetaMUSIC
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse bg-body-tertiary" 
    id="navbarSupportedContent">
     
      
        <input
        value={keyword}
        onChange={(e) => setKeywords(e.target.value)}
          className="form-control me-2 w-100 "
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button onClick={getTracks} className="btn btn-outline-success" >
          Search
        </button>
      
    </div>
  </div>
</nav>
<div className="container">
  <div className="row">
    
     {
     tracks.map((element ) => {
         return <div className="col-lg-3 row-md-6 col-sm-12 py-2" key={element.id}> 
        

         <div className="card" >
  <img className="card-img-top" src={element.album.images[1].url}  alt="" />
  <div className="card-body">
    <h5 className="card-title">{element.name}</h5>
    <p className="card-text">
      Artist: {element.artists[0].name}
    </p>
    <p className="card-text">
      Release date: {element.album.release_date}
    </p>
    <audio src={element.preview_url} controls className='w-100'>
      <p>Your browser does not support the audio element.</p>

    </audio>
  </div>
</div>
</div>
     })
     }
     </div>
</div>

    </>
  );
}

export default App