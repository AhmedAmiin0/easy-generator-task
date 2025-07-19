import { EasyLogo } from "../icons/EasyLogo";

export function LoadingScreen() {

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-600 py-12 px-4 sm:px-6 lg:px-8 bg-primary transition-all duration-300 ease-in-out">
            <div className="max-w-md w-full space-y-8 bg-gray-200 rounded-lg p-8 transition-all duration-300 ease-in-out">
                <div className="text-center">
                    <div className="mx-auto flex items-center justify-center mb-6">
                        <EasyLogo />
                    </div>
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
                    <p className="text-gray-600 text-lg">Initializing...</p>
                </div>
            </div>
        </div>
    );
} 