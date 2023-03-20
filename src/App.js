import './App.css';
import SideBar from './components/SideBar';
import NavbarIG from './components/NavbarIG';
import Home from './pages/Home';
import {Route, Routes, useLocation} from "react-router-dom"
import Movies from "./pages/Movies"
import TvShows from "./pages/TvShows"
import Login from "./pages/Login"
import SignUp from './pages/SignUp';
import MovieInfo from './pages/MovieInfo';
import TvShowsInfo from './pages/TvShowsInfo'

function App() {
  const location = useLocation()
  const shouldSideBarRender = location.pathname !== "/sign-in" && location.pathname !== "/sign-up" && location.pathname !== "/movies/:id";

  return (
    <div className="App">
      {shouldSideBarRender && <SideBar />}
      {shouldSideBarRender && <NavbarIG />}
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/movies" element={<Movies />}/>
        <Route path="/tvshows" element={<TvShows />}/>
        <Route path="/sign-in" element={<Login />}/>
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/movies/:id" element={<MovieInfo />} />
        <Route path="/tvshows/:id" element={<TvShowsInfo />} />
      </Routes>
    </div>
  );
}

export default App;
