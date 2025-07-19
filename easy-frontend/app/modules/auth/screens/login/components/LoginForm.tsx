import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAppDispatch, useAppSelector } from "~/core";
import { FormInput } from "~/core/ui/components/formElements/FormInput";
import { FormCheckbox } from "~/core/ui/components/formElements/FormCheckbox";
import { SubmitButton } from "~/core/ui/components/formElements/SubmitButton";
import { FormError } from "~/core/ui/components/formElements/FormError";

import { loginSchema, type LoginFormData } from "../schema/login.schema";
import { useLoginMutation } from "../../../api";
import { selectIsAuthenticated, setCredentials } from "~/core/store/slices/auth.slice";
import { useNavigate } from "react-router";

export default function LoginForm() {
    const [login, { isLoading }] = useLoginMutation();
    const dispatch = useAppDispatch();
    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
    } = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema),
    });
    const isAuthenticated = useAppSelector(selectIsAuthenticated);
    console.log(isAuthenticated);
    const navigate = useNavigate();
    const onSubmit = async (data: LoginFormData) => {
        try {
            // const result = await login({
            //     email: data.email,
            //     password: data.password,
            // }).unwrap();

            dispatch(setCredentials({
                user: {
                    id: "1",
                    email: data.email,
                    name: "John Doe",
                    createdAt: new Date().toISOString(),
                    updatedAt: new Date().toISOString(),
                }, token: "1234567890"
            }));
            navigate("/home");
        } catch (err: any) {
            setError('root', { message: err.data.message || 'Login failed. Please try again.' });
        }
    };

    return (
        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div className="rounded-md shadow-sm -space-y-px">
                <FormInput
                    id="email"
                    label="Email Address"
                    type="email"
                    autoComplete="email"
                    placeholder="Enter your email"
                    containerClassName="mt-2"
                    error={errors.email?.message}
                    {...register("email")}
                />
                <FormInput
                    id="password"
                    label="Password"
                    type="password"
                    containerClassName="mt-2"
                    autoComplete="current-password"
                    placeholder="Enter your password"
                    error={errors.password?.message}
                    {...register("password")}
                />
            </div>

            <div className="flex items-center justify-between">
                <FormCheckbox
                    id="remember-me"
                    label="Remember me"
                    {...register("remember")}
                />
            </div>

            <FormError error={errors.root?.message} className="text-center" />

            <SubmitButton
                isLoading={isLoading}
                loadingText="Signing in..."
            >
                Sign In
            </SubmitButton>
        </form>
    );
}