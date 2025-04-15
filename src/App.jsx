
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useState } from 'react';

function App() {

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
          className="form-control me-2 w-100 "
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      
    </div>
  </div>
</nav>
<div className="container">
  <div className="row">
    <button onClick={getTracks} className="btn btn-primary">get Data </button>
     </div>
     {
     tracks.map((element ) => {
         return <div className="col" key={element.id}> 
          <image src = {element.album.images[1].url} alt="" />
         </div>
     })
     }
     </div>


    </>
  );
}

export default App
