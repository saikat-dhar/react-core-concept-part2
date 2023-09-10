import { useEffect, useState } from "react"
import Usert from "./use"

export default function Friends () {
    const [friends , setusers] = useState([])

    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then( data => setusers(data))
        
    } , [])

    return (
        <div>
            <h2>users: {friends.length}</h2>
            {
                friends.map( friend => <Usert friend={friend}></Usert>)
            }
        </div>
    )
}