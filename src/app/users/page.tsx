// import { useEffect } from "react";
import UserInfo from "../../model/User";
import UserTable from "@/components/User/UserTable";
export default async function Page() {
    await new Promise((resolve) => { setTimeout(resolve, 1000) });
    const res = await fetch(`${process.env.USER_URL}`);
    const data: UserInfo[] = await res.json();
    return (
        <UserTable Users={data} />
    )
}