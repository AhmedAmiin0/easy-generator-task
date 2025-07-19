interface EyeSlashIconProps {
  className?: string;
}

export const EyeSlashIcon = ({ className = "h-5 w-5" }: EyeSlashIconProps) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L12 12l2.122-2.122M9.878 9.878L12 12l2.122-2.122m3.856 3.856L12 12l-4.243-4.243m0 0L5.636 5.636m0 0l-.707-.707M21 21l-3.5-3.5m0 0l-.707-.707M3 3l3.182 3.182m0 0L9.88 9.879"
    />
  </svg>
); 