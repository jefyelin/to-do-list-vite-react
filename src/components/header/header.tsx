import { Logo } from '../logo'

export function Header() {
  return (
    <header className='flex h-[11.25rem] w-full justify-center bg-gray-700 md:h-[12.5rem]'>
      <div className='h-full w-[7.875rem] pt-[4.05rem] md:pt-[4.5rem]'>
        <Logo />
      </div>
    </header>
  )
}
