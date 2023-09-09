export interface PasswordProps {
    enablePassword: boolean;
    password: string;
    setEnablePassword: (enablePassword: boolean) => void;
    setPassword: (password: string) => void;
};
