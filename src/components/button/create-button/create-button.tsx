import { PlusCircle } from 'phosphor-react'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

export function CreateButton({ ...props }: ButtonProps) {
  return (
    <button
      type='submit'
      className='flex h-[3.375rem] items-center justify-center gap-2 rounded-lg bg-blue-dark p-3 
        font-bold text-gray-100 transition duration-150 ease-linear hover:bg-blue 
        disabled:cursor-not-allowed disabled:bg-gray-300 md:p-4'
      {...props}
    >
      Criar
      <PlusCircle weight='bold' size={21} />
    </button>
  )
}
