import Player from './Players'

export default function PlayerList(props){
    console.log('data',props)
    const allPlayers = props.data.map((data,index)=>{

        return(      
            <Player
                id={data.id}     
                key={index} 
                firstName={data.firstName}
                lastName={data.lastName}
                jersey={data.jerseyNumber}
                hobbies={data.hobbies}
                addFav={props.addFavorites}/>    
        )
    })
    return <div className="player-container">{allPlayers}</div>
}

    /*
    take the array of players
     iterate over them 
     return a Player component for each player object 
     the data is an object so we can destructure the object 
    */