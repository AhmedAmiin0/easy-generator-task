import { AlertTriangleIcon } from "~/core/ui/icons";

interface FormErrorProps {
  error?: string;
  className?: string;
  showIcon?: boolean;
}

export const FormError = ({ error, className = "", showIcon = true }: FormErrorProps) => {
  if (!error) return null;

  return (
    <p className={`text-sm text-red-600 flex items-center gap-1 ${className}`}>
      {showIcon && <AlertTriangleIcon className="h-4 w-4" />}
      {error}
    </p>
  );
}; 