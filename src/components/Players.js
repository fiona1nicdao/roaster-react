// import { playerData } from "../App";
import Hobbies from './Hobbies'

export default function RenderPlayers(props){
    // const {id, firstName, lastName, hobbies, jerseyNumber} = athlete
    // const hobbiesList  = hobbies.map((hobby, index)=> <li key={index}>{hobby}</li>)
    const playerHobbies = props.hobbies.length
        ? props.hobbies.map((hobby, index)=>{
            return <li key={index}>{hobby}</li>
        })
        : <p>None listed</p>

        return(
            <div className="player">
                <h2>{props.firstName} {props.lastName}</h2>
                {/* <p>{props.id}</p> */}
                <p>Jersey Number is {props.jersey}</p>
                {playerHobbies}
                <br></br>
                {/* need to fix button -type rule props.addFav is not a function */}
                <button onClick={props.addFav}>Add to Favorites</button>
            </div>
        )
}

    // return(
    //     <div>
    //         {/* <h2>hello</h2> */}
    //         <h2>{id}{firstName} {lastName}</h2>
    //         <p>Jersey Number: {jerseyNumber}</p> 
    //         {hobbies.length ? <Hobbies fun={hobbies}/> : <p>No Hobbies listed</p>}
    //         {/* <button onClick={()=> whoGotClicked(firstName)}>
    //             Add to Favorite 
    //         </button> */}
    //         <button onClick={addFav({id})}>Add to Favorite</button>
    //     </div>
    // )