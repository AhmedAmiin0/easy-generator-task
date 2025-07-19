import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../store'
import { initializeAuth, selectIsInitialized } from '../store/slices/auth.slice'

export function useAuthInit() {
  const dispatch = useAppDispatch()
  const isInitialized = useAppSelector(selectIsInitialized)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (isMounted && !isInitialized) {
      dispatch(initializeAuth())
    }
  }, [dispatch, isInitialized, isMounted])

  return { isInitialized: isMounted && isInitialized }
} 