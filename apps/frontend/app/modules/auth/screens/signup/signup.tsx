import { AuthTitle } from "~/core/ui/components/AuthTitle";
import SignupForm from "./components/SignupForm";

export function meta() {
    return [
        { title: "Sign Up - Task App" },
        { name: "description", content: "Create your account" },
    ];
}

export default function Signup() {
    return (
        <div className="max-w-md w-full space-y-8 bg-gray-200 rounded-lg p-8">
            <AuthTitle
                title="Create your account"
                linkText="Or"
                linkHref="/login"
                linkLabel="sign in to your existing account"
            />
            <SignupForm />
        </div>
    );
} 