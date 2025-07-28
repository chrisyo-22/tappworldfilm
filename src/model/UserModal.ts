import UserInfo from "@/model/User";
export interface UserModalProps {
    isOpen: boolean;
    onOpen: () => void;
    onOpenChange: () => void;
    formData: UserInfo;
    setFormData: React.Dispatch<React.SetStateAction<UserInfo>>;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
}
