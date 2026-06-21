'use client'

import { supabase } from '../lib/supabase'
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState
} from 'react'

interface User {
  id?: string
  email?: string
}

interface SupabaseContextType {
  user: User | null
  supabase: typeof supabase
}

const SupabaseContext = createContext<SupabaseContextType | null>(null)

export const useSupabase = (): SupabaseContextType => {
  const context = useContext(SupabaseContext)
  if (!context) {
    throw new Error('useSupabase must be used within a SupabaseProvider')
  }
  return context
}

export const SupabaseProvider: React.FC<React.PropsWithChildren<{}>> = ({
  children
}) => {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    supabase.auth
      .getSession()
      .then((result) => {
        setUser(
          result?.data?.session?.user
            ? {
                email: result?.data?.session?.user?.email,
                id: result?.data?.session?.user?.id
              }
            : null
        )
      })
      .catch((error) => {
        console.log(error)
      })

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser(session?.user ?? null)
      }
    )

    return () => {
      authListener?.subscription.unsubscribe()
    }
  }, [])

  const value = useMemo(() => ({ user, supabase }), [user])

  return (
    <SupabaseContext.Provider value={value}>
      {children}
    </SupabaseContext.Provider>
  )
}
