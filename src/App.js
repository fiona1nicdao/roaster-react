import './App.css';
import {useState} from "react";
import PlayerList from './components/PlayerList'
import {playerData} from './data/playerData'
import Time from './components/welcome/Time'
import FavoriteList from './components/FavoriteList';

function App() {
    const[favorites, setFavorites] = useState([])
    const whoGotClicked = (name) => {
      setFavorites([...favorites, name])
    }

  return (
    <div className="App">
      <h1>Welcome to Spring Training </h1>
      <Time />
      {/* <PlayerList firstName={playerData[0].firstName} lastName={playerData[0].lastName} hobbies={playerData[0].hobbies} jerseyNumber={playerData[0].jerseyNumber}/>
      <PlayerList firstName={playerData[1].firstName} lastName={playerData[1].lastName} hobbies={playerData[1].hobbies} jerseyNumber={playerData[1].jerseyNumber}/>
      <PlayerList firstName={playerData[2].firstName} lastName={playerData[2].lastName} hobbies={playerData[2].hobbies} jerseyNumber={playerData[2].jerseyNumber}/> */}

      <PlayerList data={playerData}/>

      <FavoriteList/>
      {/* add data !!  */}
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