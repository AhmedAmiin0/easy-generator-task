import { SubmitButton, useAppSelector, ROUTES } from '~/core'
import { selectIsAuthenticated } from '~/core/store/slices/auth.slice'
import { AuthTitle } from '~/core/ui/components/AuthTitle'

interface ProtectedRouteProps {
  children: React.ReactNode
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const isAuthenticated = useAppSelector(selectIsAuthenticated)

  if (!isAuthenticated) {
    return (
      <div className='flex flex-col items-center justify-center h-screen'>
        <div className="max-w-md w-full space-y-8 bg-gray-100 rounded-lg p-8">
          <div>
            <AuthTitle
              title="Welcome to Task App"
              linkText="Or"
              linkHref={ROUTES.SIGNUP}
              linkLabel="create a new account"
            />
            <div className="mt-6 space-y-4">
              <a href={ROUTES.SIGNUP} className="block">
                <SubmitButton type="button" variant="primary">
                  Sign Up
                </SubmitButton>
              </a>
              <a href={ROUTES.LOGIN} className="block">
                <SubmitButton type="button" variant="secondary">
                  Log In
                </SubmitButton>
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return <>{children}</>
} 