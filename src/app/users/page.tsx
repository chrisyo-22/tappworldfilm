// import UserInfo from "../../model/User";

export default async function Page() {
    await new Promise((resolve) => { setTimeout(resolve, 1000) });

    //https://jsonplaceholder.typicode.com/users
    const result =  await fetch("http://localhost:3004/users", {cache:'no-store'})
    const data   = await result.json();


    return (
        <div>
            users
            <h1>Users</h1>
            {JSON.stringify(data)}
        </div>
    )
}