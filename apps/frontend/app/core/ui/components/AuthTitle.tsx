import { EasyLogo } from "~/core/ui/icons/EasyLogo";

interface AuthTitleProps {
  title: string;
  linkText: string;
  linkHref: string;
  linkLabel: string;
}

export const AuthTitle = ({ title, linkText, linkHref, linkLabel }: AuthTitleProps) => {
  return (
    <div>
      <div className="mx-auto flex items-center justify-center">
        <EasyLogo />
      </div>
      <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
        {title}
      </h2>
      <p className="mt-2 text-center text-sm text-gray-600">
        {linkText}{" "}
        <a
          href={linkHref}
          className="font-medium text-[--color-primary] hover:opacity-80 transition-opacity"
        >
          {linkLabel}
        </a>
      </p>
    </div>
  );
}; 