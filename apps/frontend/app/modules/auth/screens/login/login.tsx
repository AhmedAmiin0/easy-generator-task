import Layout from "~/modules/auth/layouts/Layout";
import LoginForm from "./components/LoginForm";
import { AuthTitle } from "~/core/ui/components/AuthTitle";
import type { Route } from "./+types";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Login - Task App" },
        { name: "description", content: "Sign in to your account" },
    ];
}


export default function Login() {

    return (
        <>
            <AuthTitle
                title="Sign in to your account"
                linkText="Or"
                linkHref="/signup"
                linkLabel="create a new account"
            />
            <LoginForm />
        </>
    );
} 