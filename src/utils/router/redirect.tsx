import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

interface RedirectProps {
  to: string
}

export function Redirect({ to }: RedirectProps) {
  const navigate = useNavigate()

  useEffect(() => {
    navigate(to)
  })

  return null
}
