
interface SubmitButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    isLoading?: boolean;
    loadingText?: string;
    children: React.ReactNode;
    variant?: "primary" | "secondary";
    size?: "sm" | "md" | "lg";
}

export const SubmitButton = (
    {
        isLoading = false,
        loadingText = "Loading...",
        children,
        variant = "primary",
        size = "md",
        className = "",
        ...props
    }: SubmitButtonProps) => {

    return (
        <button
            type="submit"
            className={`relative w-full flex justify-center border text-sm font-medium rounded-md  
                transition duration-150 ease-in-out disabled:opacity-50 
                disabled:cursor-not-allowed py-2 px-4 text-primary 
                hover:bg-primary-dark hover:text-white ${className}
                `}
            {...props}
        >
            {isLoading ? loadingText : children}
        </button>
    );
}


