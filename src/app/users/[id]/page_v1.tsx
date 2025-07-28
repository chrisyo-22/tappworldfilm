import UserInfo from '@/model/User';
import UserDetail from '@/components/User/UserDetail';
import {fetchUsersAction} from "@/actions/users";

export async function generateStaticParams() {
    const users: UserInfo[] = await fetchUsersAction() ;
    return users.map((user: UserInfo) => (
        {
            id: user.id + ''
        }))
}


export default async function page({ params }: { params: Promise<{ id: string }> }) {
    // const { id } = use(params);
    const { id } = await params
    const user: UserInfo = await fetch(`${process.env.USER_URL}/${id}`).then(res => res.json())

    return (
        <UserDetail User={user}></UserDetail>
    )
}
