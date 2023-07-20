import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { Sidebar, SearchBar, MusicPlayer } from "./components";
import {
  Discover,
  TopArtists,
  TopCharts,
  ArtistDetails,
  SongDetails,
  Search,
} from "./pages";

const App = () => {
  const { activeSong } = useSelector((state) => state.player);

  return (
    <div id="app" className="h-full flex relative bg-bgGray">
      <Sidebar />

      <div className={`flex flex-col w-full px-12 pt-8 ${ activeSong ? 'mb-32' : ''}`}>
        <SearchBar />

        <main>
          <Routes>
            <Route path="/" element={<Discover />} />
            <Route path="/top-artists" element={<TopArtists />} />
            <Route path="/top-charts" element={<TopCharts />} />
            <Route path="/artists/:id" element={<ArtistDetails />} />
            <Route path="/songs/:songid" element={<SongDetails />} />
            <Route path="/search/:searchTerm" element={<Search />} />
          </Routes>
        </main> 
      </div>

      {activeSong?.title && (
        <aside className="fixed h-36 bottom-0 left-0 right-0 flex animate-slideup rounded-t-md z-30 bg-[#303135] border-gray border-t-[.5px]">
          <MusicPlayer />
        </aside>
      )}
    </div>
  );
};

export default App;
