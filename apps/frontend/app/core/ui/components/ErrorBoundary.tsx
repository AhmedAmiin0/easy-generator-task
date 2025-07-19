import { isRouteErrorResponse } from "react-router";
import type { Route } from "../../../+types/root";

interface ErrorBoundaryProps {
  error: Route.ErrorBoundaryProps["error"];
}

export function ErrorBoundary({ error }: ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">{message}</h1>
      <p className="text-lg text-gray-700 mb-6">{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto bg-gray-100 rounded-lg border">
          <code className="text-sm text-gray-800">{stack}</code>
        </pre>
      )}
    </main>
  );
} 