import { useEffect, useState } from 'react'

// Función para guardar token
export const saveToken = (token: string) => {
  localStorage.setItem('authToken', token)
}
// Función para obtener el token
export const getToken = (): string => {
  const token = localStorage.getItem('authToken')
  return token ?? ''
}

// Hook que permite verificar si el usuario está autenticado
const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem('authToken')
    if (token) {
      setIsAuthenticated(true)
    } else {
      setIsAuthenticated(false)
    }
  }, [])

  return isAuthenticated
}

export default useAuth
