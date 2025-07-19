interface PasswordRequirementsProps {
  password?: string;
  className?: string;
}

export const PasswordRequirements = ({ password = "", className = "" }: PasswordRequirementsProps) => {
  const requirements = [
    {
      text: "Minimum 8 characters",
      isValid: password.length >= 8,
    },
    {
      text: "At least one letter",
      isValid: /[a-zA-Z]/.test(password),
    },
    {
      text: "At least one number",
      isValid: /\d/.test(password),
    },
    {
      text: "At least one special character",
      isValid: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    },
  ];

  return (
    <div className={`bg-gray-50 rounded-lg p-4 ${className}`}>
      <h3 className="text-sm font-medium text-gray-900 mb-2">
        Password Requirements:
      </h3>
      <ul className="text-xs space-y-1 text-gray-600">
        {requirements.map((requirement, index) => (
          <li key={index} className="flex items-center gap-2">
            <span
              className={`h-1.5 w-1.5 rounded-full transition-colors ${
                requirement.isValid ? 'bg-[--color-primary]' : 'bg-gray-300'
              }`}
            />
            {requirement.text}
          </li>
        ))}
      </ul>
    </div>
  );
}; 