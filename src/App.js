import './App.css';
import {useState} from "react";
import PlayerList from './components/PlayerList'
import {playerData} from './data/playerData'
import Welcome from './components/welcome/Time'
import FavoriteList from './components/FavoriteList';

function App() {
    const[favorites, setFavorites] = useState([])

    const addFavorite = (id) => {
      setFavorites([...favorites, id])
    }

  return (
    <div className="App">
      <h1>Welcome to Spring Training </h1>
      <Welcome />
      <PlayerList data={playerData} addFav={addFavorite}/>
      <FavoriteList favs={favorites}/>
    </div>
  );
}

export default App;

/*
1. create a player component
2. display for each player all props, hobbies are optional
*/

/*
Wedneday Feb 9, 2022
1. turn the welcome message into a component 
2. display a message related to the time of day in the welcome component 
  use a ternary to change the message 
  7am - 12noom - Good Morning 
  12:01pm - 5pm - Good Afternoon
  5:01pm - 11pm - Good Evening 
  11:01pm - 6:59am - Why are you up? 
*/