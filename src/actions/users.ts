'use server'

import UserInfo from "@/model/User";

export async function fetchUsersAction(): Promise<UserInfo[]> {
    try {
        const res = await fetch(`${process.env.USER_URL}`);
        
        if (!res.ok) {
            throw new Error(`Failed to fetch users: ${res.status} ${res.statusText}`);
        }
        
        const data = (await res.json()) as UserInfo[];
        return data;
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(`Error fetching users: ${error.message}`);
        }
        throw new Error('Unknown error occurred while fetching users');
    }
}

export async function createUserAction(userData: UserInfo): Promise<UserInfo> {
    try {
        // TODO: Uncomment when API is ready
        // const res = await fetch(`${process.env.USER_URL}`, {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(userData),
        // });
        
        // if (!res.ok) {
        //     throw new Error(`Failed to create user: ${res.status} ${res.statusText}`);
        // }
        
        // const newUser = (await res.json()) as UserInfo;
        
        // For now, return the userData as is since ID is already included
        return userData;
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(`Error creating user: ${error.message}`);
        }
        throw new Error('Unknown error occurred while creating user');
    }
}

export async function fetchUsersById(id: string): Promise<UserInfo> {
    try {
        const res = await fetch(`${process.env.USER_URL}/${id}`);
        
        if (!res.ok) {
            if (res.status === 404) {
                throw new Error(`User with ID ${id} not found`);
            }
            throw new Error(`Failed to fetch user: ${res.status} ${res.statusText}`);
        }
        
        const data = (await res.json()) as UserInfo;
        return data;
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(`Error fetching user ${id}: ${error.message}`);
        }
        throw new Error(`Unknown error occurred while fetching user ${id}`);
    }
}

