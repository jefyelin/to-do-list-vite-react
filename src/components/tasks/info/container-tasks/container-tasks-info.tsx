import { ReactNode } from 'react'

interface ContainerTasksInfoProps {
  ariaLabelledBy: string
  children: ReactNode
}

export function ContainerTasksInfo({ ariaLabelledBy, children }: ContainerTasksInfoProps) {
  return (
    <div className='flex gap-2' aria-labelledby={ariaLabelledBy}>
      {children}
    </div>
  )
}
