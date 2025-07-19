export const ROUTES = {
  // Auth routes
  LOGIN: '/login',
  SIGNUP: '/signup',
  
  // App routes
  HOME: '/',
  DASHBOARD: '/',
  
  // Fallback routes
  NOT_FOUND: '*',
} as const

export type RouteKey = keyof typeof ROUTES
export type RoutePath = typeof ROUTES[RouteKey]

// Route utilities
export const getRoute = (routeKey: RouteKey): RoutePath => {
  return ROUTES[routeKey]
}

// Navigation helpers
export const isCurrentRoute = (currentPath: string, routeKey: RouteKey): boolean => {
  return currentPath === ROUTES[routeKey]
}

// Route names for better readability
export const ROUTE_NAMES = {
  LOGIN: 'Login',
  SIGNUP: 'Sign Up', 
  HOME: 'Home',
  DASHBOARD: 'Dashboard',
  NOT_FOUND: 'Page Not Found',
} as const 