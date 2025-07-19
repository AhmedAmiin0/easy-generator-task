import { Outlet, useNavigate } from "react-router";
import { SubmitButton } from "~/core/ui/components/formElements/SubmitButton";
import { EasyLogo } from "~/core/ui/icons/EasyLogo";
import { useLogoutMutation } from "~/modules/auth/api";
import { ROUTES, useAppDispatch, useAppSelector } from "~/core";
import { selectCurrentUser, signOut } from "~/core/store/slices/auth.slice";
import { ProtectedRoute } from "~/core/ui/components/ProtectedRoute";

export default function Layout() {

    const user = useAppSelector(selectCurrentUser)
    const dispatch = useAppDispatch()
    const [logout, { isLoading }] = useLogoutMutation()
    const navigate = useNavigate();
    const handleLogout = async () => {
        try {
            console.log("logout");
            // await logout().unwrap();
            dispatch(signOut());
            navigate(ROUTES.LOGIN);
        } catch (error) {
            console.error('Logout failed:', error)
        }
    }

    return (
        <ProtectedRoute>
            <div className="min-h-screen bg-white">
                {/* Header */}
                <header className="bg-white shadow-lg border-b border-gray-200">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between items-center h-16">
                            <div className="flex items-center">
                                <EasyLogo />
                                <h1 className="ml-4 text-xl font-semibold text-gray-900">Task App</h1>
                            </div>
                            <div className="flex items-center space-x-4">
                                <span className="text-gray-600">Welcome, {user?.name}</span>
                                <SubmitButton
                                    onClick={handleLogout}
                                    isLoading={isLoading}
                                    loadingText="Signing out..."
                                    variant="secondary"
                                    size="sm"
                                >
                                    Logout
                                </SubmitButton>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Main Content */}
                <main className="max-w-4xl mx-auto py-20 px-4 sm:px-6 lg:px-8 transition-all duration-300 ease-in-out">
                    <Outlet />
                </main>
            </div>
        </ProtectedRoute>
    )
}