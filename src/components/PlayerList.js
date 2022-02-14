import Player from './Players'
export default function PlayerList({data}){
    console.log('data',data)
    
    // const players = data.map(player =>{
    //     return <p>{player.firstName}</p>
    // })
    return(
        // <div>
        //     {players}
        // </div>
        
        <div>
            {data.map((player,index)=>{
                return <Player key={index} athlete={player}/>
                // <p>{player.firstName}</p>
            }
              
            )}
        </div>
    )
    /*
    take the array of players
     iterate over them 
     return a Player component for each player object 
     the data is an object so we can destructure the object 
    */

}

