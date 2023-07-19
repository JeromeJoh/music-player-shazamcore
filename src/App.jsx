import { Route, Routes } from "react-router-dom";
import { Sidebar, SearchBar } from "./components";
import {
  Discover,
  TopArtists,
  TopCharts,
  ArtistDetails,
  SongDetails,
  Search,
} from "./pages";

const App = () => {
  return (
    <div id="app" className="h-full flex relative bg-bgGray">
      <Sidebar />

      <div className="flex flex-col w-full px-12 pt-8">
        <SearchBar />

        <main>
          <Routes>
            <Route path="/" element={<Discover />} />
            <Route path="/top-artists" element={<TopArtists />} />
            <Route path="/top-charts" element={<TopCharts />} />
            <Route path="/artist/:id" element={<ArtistDetails />} />
            <Route path="/songs/:songid" element={<SongDetails />} />
            <Route path="/search/:searchTerm" element={<Search />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default App;
