'use client'
import "@/css/UserTable.css"
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue } from "@/components/ui/table";
import UserInfo from "@/model/User";
import { useRouter } from "next/navigation";
import { Key } from "react";

export default function UserTable({ Users }: { Users: UserInfo[] }) {
    const router = useRouter();
    const rows = Users.map((user: UserInfo) => {
        return ({
            id: user.id,
            name: user.name,
            email: user.email,
            phone: user.phone
        })
    });
    const columns = [
        {
            key: "name",
            label: "NAME",
        },
        {
            key: "email",
            label: "EMAIL",
        },
        {
            key: "phone",
            label: "PHONE",
        },
    ];

    const handleClick = (id: Key) => {
        // Find the full user object from the Users array
        const foundUser = Users.find(user => user.id === parseInt(id as string));
        const numericId = parseInt(id as string);

        console.log('Clicked ID:', numericId);
        console.log('Found User:', foundUser);

        if (numericId > 10 && foundUser) {
            // Set state to trigger re-render with UserDetail
            alert("Sorry feature is not ready");
        }
        else {
            // Navigate to user detail page for existing users
            router.push(`/users/${id}`);
        }
    }


    return (
        <div className="table-container">
            <Table
                aria-label="A list of User table"
                selectionMode="single"
                onRowAction={handleClick}
                classNames={{
                    tr: "hover: cursor-pointer",
                }}>
                <TableHeader columns={columns}>
                    {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
                </TableHeader>
                <TableBody items={rows}>
                    {(item) => (
                        <TableRow key={item.id}>
                            {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    );
}
