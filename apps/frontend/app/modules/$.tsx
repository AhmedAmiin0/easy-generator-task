import { EasyLogo } from "~/core/ui/icons/EasyLogo";
import type { Route } from "./+types/$";
import { Link } from "react-router";
import { getRoute } from "~/core/constants/routes";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "404 - Page Not Found" },
    { name: "description", content: "The page you're looking for doesn't exist." },
  ];
}

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="max-w-md w-full space-y-8 text-center">
        <div>
          <div className="mx-auto flex items-center justify-center mb-6">
            <EasyLogo />
          </div>

          <h1 className="text-6xl font-extrabold text-gray-900 mb-4">404</h1>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Page Not Found</h2>
          <p className="text-gray-600 mb-8">
            Sorry, the page you're looking for doesn't exist or has been moved.
          </p>
          <div className="space-y-4">
            <Link to={getRoute('LOGIN')} className="block">
              <button
                type="button"
                className="w-full inline-flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition duration-150 ease-in-out"
              >
                Login
              </button>
            </Link>
            <Link to={getRoute('SIGNUP')} className="block">
              <button
                type="button"
                className="w-full inline-flex justify-center py-2 px-4 border border-orange-300 rounded-md shadow-sm bg-white text-sm font-medium text-orange-600 hover:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition duration-150 ease-in-out"
              >
                Signup
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 