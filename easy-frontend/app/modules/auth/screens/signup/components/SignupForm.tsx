import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FormInput } from "~/core/ui/components/formElements/FormInput";
import { SubmitButton } from "~/core/ui/components/formElements/SubmitButton";
import { PasswordRequirements } from "~/core/ui/components/formElements/PasswordRequirements";
import { TermsCheckbox } from "~/core/ui/components/formElements/TermsCheckbox";
import { signupSchema, type SignupFormData } from "../schema/signup.schema";
import { FormError, useAppDispatch } from "~/core";
import { useSignupMutation } from "../../../api";
import { setCredentials } from "~/core/store/slices/auth.slice";



export default function SignupForm() {
    const [signup, { isLoading }] = useSignupMutation();

    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
        setError,
    } = useForm<SignupFormData>({
        resolver: zodResolver(signupSchema),
    });

    const password = watch("password");
    const dispatch = useAppDispatch();
    const onSubmit = async (data: SignupFormData) => {
        try {
            const result = await signup({
                email: data.email,
                name: data.name,
                password: data.password,
            }).unwrap();

            dispatch(setCredentials({ user: result.user, token: result.token }));
        } catch (err: any) {
            setError('root', { message: err.data.message || 'Signup failed. Please try again.' });
        }
    };

    return (
        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-4">
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
                    id="name"
                    label="Full Name"
                    type="text"
                    autoComplete="name"
                    placeholder="Enter your full name"
                    containerClassName="mt-2"
                    error={errors.name?.message}
                    {...register("name")}
                />

                <FormInput
                    id="password"
                    label="Password"
                    type="password"
                    autoComplete="new-password"
                    placeholder="Create a password"
                    containerClassName="mt-2"
                    error={errors.password?.message}
                    {...register("password")}
                />

                <FormInput
                    id="confirmPassword"
                    label="Confirm Password"
                    type="password"
                    autoComplete="new-password"
                    placeholder="Confirm your password"
                    containerClassName="mt-2"
                    error={errors.confirmPassword?.message}
                    {...register("confirmPassword")}
                />
            </div>

            <PasswordRequirements password={password} />

            <TermsCheckbox
                id="terms"
                {...register("terms")}
                error={errors.terms?.message}
            />
            <FormError error={errors.root?.message} className="text-center" />

            <SubmitButton
                isLoading={isLoading}
                loadingText="Creating Account..."
            >
                Create Account
            </SubmitButton>
        </form>
    );
} 