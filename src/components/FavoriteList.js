
export default function FavoriteList({favorites}){
    return(
        <div>
            <h3>FavoriteList</h3>
            <ol>
                {favorites.map((favorites, index)=>{
                    return <li key={index}>{favorites}</li>
                })}
            </ol>
        </div>
    )
}