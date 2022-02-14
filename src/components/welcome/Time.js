import './Welcome.css'
export default function Time(){
    const currentHour = new Date().getHours()
    const message =   currentHour < 7 ? 'Why are you still up?'
                    :currentHour < 12 ? 'Good Moring Sunshine'
                    :currentHour < 18 ? 'Good Afternoon'
                    : 'Good Evening'

    return(
        <h3>{message} Sports Fans </h3>
    )
}