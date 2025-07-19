import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";
import { Provider } from "react-redux";

import type { Route } from "./+types/root";
import { ErrorBoundary as ErrorBoundaryComponent, RouteTransition, LoadingScreen } from "./core/ui/components";
import { store } from "./core/store";
import { useAuthInit } from "./core/hooks/useAuthInit";
import "./app.css";

export const links: Route.LinksFunction = () => [
  {
    rel: "icon",
    href: "https://i0.wp.com/www.easygenerator.com/wp-content/uploads/2019/12/eg-logo.jpg?fit=512%2C512&ssl=1",
    type: "image/jpeg",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

function AppContent() {
  const { isInitialized } = useAuthInit();

  if (!isInitialized) {
    return <LoadingScreen />;
  }
  
  return (
    <RouteTransition type="fade" duration={300}>
      <Outlet />
    </RouteTransition>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  return <ErrorBoundaryComponent error={error} />;
}
