import UserInfo from "../../model/User";
import { fetchUsersAction } from "@/actions/users";
import "@/css/UserPage.css"
import UserListControl from "@/components/User/UserListControl";
export default async function Page() {

    const data: UserInfo[] = await fetchUsersAction();
    return (
        <UserListControl Users={data} />
    );
}