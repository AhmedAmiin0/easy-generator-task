import { forwardRef, useState } from "react";
import { EyeIcon, EyeSlashIcon } from "~/core/ui/icons";
import { FormLabel } from "./FormLabel";
import { FormError } from "./FormError";

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    error?: string;
    id: string;
    containerClassName?: string;
}

export const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
    ({ label, error, id, className = "", type, containerClassName = "", required, ...props }, ref) => {
        const [showPassword, setShowPassword] = useState(false);
        const isPasswordType = type === "password";
        const inputType = isPasswordType && showPassword ? "text" : type;

        return (
            <div className={`space-y-1 ${containerClassName}`}>
                <FormLabel htmlFor={id} required={required}>
                    {label}
                </FormLabel>
                <div className="relative">
                    <input
                        ref={ref}
                        id={id}
                        type={inputType}
                        required={required}
                        className={`
                            appearance-none relative block w-full px-3 py-2 border 
                            placeholder-gray-500 text-gray-900 rounded-md 
                            focus:outline-none focus:ring-2 focus:ring-[--color-primary] focus:border-[--color-primary]
                            sm:text-sm bg-white transition-colors
                            ${isPasswordType ? "pr-10" : ""}
                            ${error
                                ? "border-red-300 focus:ring-red-500 focus:border-red-500"
                                : "border-gray-300"
                            }
                            ${className}
                        `}
                        {...props}
                    />
                    {isPasswordType && (
                        <button
                            type="button"
                            className="absolute inset-y-0 right-0 flex items-center pr-3"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? (
                                <EyeSlashIcon className="h-5 w-5 text-gray-500 hover:text-gray-700 transition-colors" />
                            ) : (
                                <EyeIcon className="h-5 w-5 text-gray-400 hover:text-gray-300 transition-colors" />
                            )}
                        </button>
                    )}
                </div>
                <FormError error={error} />
            </div>
        );
    }
);

