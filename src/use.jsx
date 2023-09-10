

export default function Usert ({friend}) {
    // console.log(friend);
    const {id, name, email, website} = friend
    return (
        <div>
            <h2>id: {id} </h2>
            <h3> name: {name} </h3>
            <p> email: {email}</p>
            <p> website: {website}</p>
        </div>
    )
}