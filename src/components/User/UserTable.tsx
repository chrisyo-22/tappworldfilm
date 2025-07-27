'use client'
import "@/css/UserTable.css"
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue, Button } from "@/components/HeroUIComponents";
import UserInfo from "@/model/User";
import { useRouter } from "next/navigation";
import { Key } from "react";


export default function UserTable({ Users }: { Users: UserInfo[] }) {
    const router = useRouter();
    const rows = Users.map((user: UserInfo) => {
        return ({
            id: user.id,
            name: user.name,
            username: user.username
        })

    });

    const columns = [
        {
            key: "id",
            label: "ID",
        },
        {
            key: "name",
            label: "NAME",
        },
        {
            key: "username",
            label: "USERNAME",
        },
    ];

    const handleClick = (id: Key) => {
        router.push(`/users/${id}`)
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
            {/* To be added, need to modify How User Detail works */}
            <Button className="add-button">Add User</Button>
        </div>

    );
}