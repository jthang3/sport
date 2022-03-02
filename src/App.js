import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Leagues from "./components/Leagues.jsx";
import Standing from "./pages/Standing.jsx";
import axios from "axios";
import { useEffect,useState } from "react";
import CircularProgress from '@mui/material/CircularProgress';


import './App.css';
import Search from "./components/Search.jsx";

function App() {
  const [sportData, setSportData] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [loading,setLoading] = useState(true);
  const [league,setLeague] = useState("");

  const searchLeague = (searchedTeam) => {
    setSearchData(searchedTeam);
  }

  let leagueStanding = (league) => {
      setLeague(league);
  }

  useEffect(()=>{
    axios(`https://api-football-standings.azharimm.site/leagues`).then((data) => {
      if(data) {
        setLoading(false);
        setSportData(data.data.data);
      }
    });
  },[]);

  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route path = "/" element = {
          <div>
            <Search leagueName = {sportData} searchTeams = {searchLeague} />
            {loading ? <CircularProgress id = "load" />: <Leagues leagueStanding = {leagueStanding} searchedTeams = {searchData} league = {sportData}/>}
          </div>
          } />
          <Route path = "/standing" element = {<Standing selectedLeague = {league}/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
