import { ReactNode } from 'react'

interface ContainerInfoProps {
  ariaLabelledBy: string
  children: ReactNode
}

export function ContainerInfo({ ariaLabelledBy, children }: ContainerInfoProps) {
  return (
    <div className='flex gap-2' aria-labelledby={ariaLabelledBy}>
      {children}
    </div>
  )
}
