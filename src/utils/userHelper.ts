import UserInfo from "@/model/User";

function findLargestId(users: UserInfo[]): number {
    if (!users || users.length === 0) {
        return 0; // Start with 0 if no users exist
    }
    
    const largestId = Math.max(...users.map(user => user.id));
    return largestId;
}

export function getNextUserId(users: UserInfo[]): number {
    const largestId = findLargestId(users);
    return largestId + 1;
}