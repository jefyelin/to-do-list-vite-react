import { ReactNode } from 'react'

interface TasksInfoContainerProps {
  ariaLabelledBy: string
  children: ReactNode
}

export function TasksInfoContainer({ ariaLabelledBy, children }: TasksInfoContainerProps) {
  return (
    <div className='flex gap-2' aria-labelledby={ariaLabelledBy}>
      {children}
    </div>
  )
}
