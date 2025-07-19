import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";
import { Provider } from "react-redux";

import type { Route } from "./+types/root";
import { ErrorBoundary as ErrorBoundaryComponent, RouteTransition } from "./core/ui/components";
import { store } from "./core/store";
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

export default function App() {
  return (
    <Provider store={store}>
      <RouteTransition type="fade" duration={300}>
        <Outlet />
      </RouteTransition>
    </Provider>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  return <ErrorBoundaryComponent error={error} />;
}
