'use client'
import UserInfo from "../../model/User";
import UserTable from "@/components/User/UserTable";
import { fetchUsersAction, createUserAction } from "@/actions/users";
import { useEffect, useState } from "react";
import { useDisclosure } from "@heroui/react";
import { Button } from "@/components/ui/button";
import UserModal from "@/components/User/UserModal";
import { getNextUserId } from "@/utils/userHelper";
import "@/css/UserPage.css"

export default function Page({ Users }: { Users: UserInfo[] }) {
    const [users, setUsers] = useState<UserInfo[]>([]);

    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [formData, setFormData] = useState<UserInfo>({
        id: 0, // Initialize as number, will be set dynamically
        name: '',
        username: '',
        email: '',
        phone: '',
        website: '',
        address: {
            street: '',
            suite: '',
            city: '',
            zipcode: '',
            geo: {
                lat: '',
                lng: ''
            }
        },
        company: {
            name: '',
            catchPhrase: '',
            bs: ''
        }
    });

    useEffect(() => {
        setUsers(Users);
    }, []);

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            // Get form data from the form
            //const data = Object.fromEntries(new FormData(e.currentTarget));

            // Create user data with generated ID
            const userDataWithId: UserInfo = {
                ...formData, // Use current formData state
                id: getNextUserId(users) // Generate next ID based on existing users
            };

            // Update formData with the generated ID and form data
            setFormData(userDataWithId);

            // Create user (assuming createUserAction now accepts UserInfo with id)
            const newUser = await createUserAction(userDataWithId);

            // Add new user to the list
            setUsers(prev => [...prev, newUser]);

            // Reset form data
            setFormData({
                id: 0,
                name: '',
                username: '',
                email: '',
                phone: '',
                website: '',
                address: {
                    street: '',
                    suite: '',
                    city: '',
                    zipcode: '',
                    geo: { lat: '', lng: '' }
                },
                company: {
                    name: '',
                    catchPhrase: '',
                    bs: ''
                }
            });

            // Close modal
            onOpenChange();

            console.log('User created successfully:', newUser);
        } catch (error) {
            console.error('Failed to create user:', error);
            alert('Failed to create user. Please try again.');
        }
    }

    return (
        <div className="user-page-container">
            <UserTable Users={users} />
            <Button className="add-button" onPress={onOpen} >Add User</Button>
            <UserModal
                onOpen={onOpen}
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                formData={formData}
                setFormData={setFormData}
                onSubmit={onSubmit}
            />

        </div>
    );
}