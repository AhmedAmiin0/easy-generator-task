import { forwardRef } from "react";
import { FormCheckbox } from "./FormCheckbox";

interface TermsCheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  error?: string;
  termsUrl?: string;
  privacyUrl?: string;
  termsText?: string;
  privacyText?: string;
  agreementText?: string;
}

export const TermsCheckbox = forwardRef<HTMLInputElement, TermsCheckboxProps>(
  ({ 
    id = "terms", 
    error, 
    termsUrl = "#", 
    privacyUrl = "#",
    termsText = "Terms and Conditions",
    privacyText = "Privacy Policy",
    agreementText = "I agree to the",
    ...props 
  }, ref) => {
    return (
      <FormCheckbox
        id={id}
        ref={ref}
        error={error}
        {...props}
      >
        {agreementText}{" "}
        <a
          href={termsUrl}
          className="text-[--color-primary] hover:opacity-80 transition-opacity"
          target="_blank"
          rel="noopener noreferrer"
        >
          {termsText}
        </a>{" "}
        and{" "}
        <a
          href={privacyUrl}
          className="text-[--color-primary] hover:opacity-80 transition-opacity"
          target="_blank"
          rel="noopener noreferrer"
        >
          {privacyText}
        </a>
      </FormCheckbox>
    );
  }
);

TermsCheckbox.displayName = "TermsCheckbox"; 