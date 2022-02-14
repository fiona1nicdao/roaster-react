export default function Hobbies({fun}){
    return(
        <ol>
        {fun.map(hobby =>{
            return <li>{hobby}</li>
        })}
        </ol>
    )
}