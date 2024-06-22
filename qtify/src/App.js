// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;



// import Navbar from "./components/Navbar/Navbar";
// import { HeroSection } from "./components/HeroSection/HeroSection";

import { useEffect, useState } from "react";
import axios from "axios";
// import AlbumSection from "./components/AlbumSection/AlbumSection";
// import SongsSection from "./components/SongsSection/SongsSection";
// import SongSectionWrapper from "./components/SongSectionWrapper/SongSectionWrapper";
// import AlbumSectionWrapper from "./components/AlbumSectionWrapper/AlbumSectionWrapper";
// import FAQsection from "./components/FAQsection/FAQsection";
// import AudioPlayer from "./components/AudioPlayer/AudioPlayer";
import { Outlet } from "react-router-dom";
// https://qtify-backend-labs.crio.do/albums/top

// https://qtify-backend-labs.crio.do/albums/new
// https://qtify-backend-labs.crio.do/songs

const apis = [
  { key: "topAlbums", api: "https://qtify-backend-labs.crio.do/albums/top" },
  { key: "newAlbums", api: "https://qtify-backend-labs.crio.do/albums/new" },
  { key: "songs", api: "https://qtify-backend-labs.crio.do/songs" },
];

function App() {
  const [data, setData] = useState({});

  function getData(apis) {
    apis.forEach(async (api) => {
      const data = await axios.get(api.api);
      setData((prevState) => {
        return { ...prevState, [api.key]: data.data };
      });
    });
  }

  useEffect(() => {
    getData(apis);
  }, []);

  console.log(data);

  return (
    <>
      <Outlet context={data} />
    </>
  );
}

export default App;
