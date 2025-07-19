import { forwardRef } from "react";

interface FormCheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  children?: React.ReactNode;
  error?: string;
  id: string;
}

export const FormCheckbox = forwardRef<HTMLInputElement, FormCheckboxProps>(
  ({ label, children, error, id, className = "", ...props }, ref) => {
    return (
      <div>
        <div className="flex items-center">
          <input
            ref={ref}
            id={id}
            type="checkbox"
            className={`
              h-4 w-4 border-gray-300 rounded bg-white 
              focus:ring-2 focus:ring-[--color-primary] 
              accent-[--color-primary] transition-colors
              ${error ? "border-red-300" : "border-gray-300"}
              ${className}
            `}
            {...props}
          />
          <label
            htmlFor={id}
            className="ml-2 block text-sm font-medium text-gray-700"
          >
            {children || label}
          </label>
        </div>
        {error && (
          <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 16.5c-.77.833.192 2.5 1.732 2.5z"
              />
            </svg>
            {error}
          </p>
        )}
      </div>
    );
  }
);

