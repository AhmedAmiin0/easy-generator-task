import { Outlet } from "react-router"

const Layout = () => {

  return (

    <div className="min-h-screen flex items-center justify-center bg-gray-600 py-12 px-4 sm:px-6 lg:px-8 bg-primary transition-all duration-300 ease-in-out">
      <div className="max-w-md w-full space-y-8 bg-gray-200 rounded-lg p-8 transition-all duration-300 ease-in-out">
        <Outlet />
      </div>
    </div>
  )
}

export default Layout