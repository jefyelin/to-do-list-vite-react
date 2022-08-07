import { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
}

export function InputText({ name, ...props }: InputProps) {
  return (
    <input
      name={name}
      type='text'
      className='h-[3.375rem] w-full rounded-lg border border-gray-700 bg-gray-500 p-3 
      text-gray-100 placeholder-gray-300 transition duration-150 ease-linear hover:bg-gray-400
      focus:border-purple-dark focus:outline-none md:p-4'
      {...props}
    />
  )
}
