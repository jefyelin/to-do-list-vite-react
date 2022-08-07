import clsx from 'clsx'
import { ReactNode } from 'react'

interface EmphasisLabelProps {
  htmlFor: string
  variant: 'blue' | 'purple'
  children: ReactNode
  id: string
}

export function EmphasisLabel({ htmlFor, variant, children, id }: EmphasisLabelProps) {
  return (
    <label
      id={id}
      htmlFor={htmlFor}
      className={clsx({
        ['text-sm font-bold']: true,
        'text-blue': variant === 'blue',
        'text-purple': variant === 'purple',
      })}
    >
      {children}
    </label>
  )
}
