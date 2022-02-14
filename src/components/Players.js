// import { playerData } from "../App";
import Hobbies from './Hobbies'



export default function RenderPlayers({athlete}){
    const {firstName, lastName, hobbies, jerseyNumber} = athlete
    const hobbiesList  = hobbies.map((hobby, index)=> <li key={index}>{hobby}</li>)

    let fav = []
    const whoGotClicked = (name) => {
        console.log(name)
        // return ([... fav,name])
        ([...fav,name])
        // fav.push(name)
        console.log(fav)

    }
    
 

    return(
        <div>
            {/* <h2>hello</h2> */}
            <h2>{firstName} {lastName}</h2>
            <p>Jersey Number: {jerseyNumber}</p> 
            {/* <p>{hobbies}</p> */}
            {hobbies.length ? <Hobbies fun={hobbies}/> : <p>No Hobbies listed</p>}
            {/* {} */}
            {/* <Hobbies fun={Hobbies}/> */}
            <button onClick={()=> whoGotClicked(firstName)}>
                Add to Favorite 
            </button>
        </div>
    )
}