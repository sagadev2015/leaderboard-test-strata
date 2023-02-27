import Image from 'next/image'
import Link from 'next/link'
import { memo } from 'react'

const Header: React.FC = (): JSX.Element => {
  return <>
    <div className="fixed mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 z-50">
      <div className="relative flex h-16 justify-between">
        <div className="absolute inset-y-0 left-0 flex items-center">
        </div>
        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <div className="flex flex-shrink-0 items-center">
            <Image
              className="block h-8 w-auto "
              src="https://tailwindui.com/img/logos/mark.svg"
              alt="Your Company"
              width={10}
              height={10}
            />
          </div>
          <div className="ml-4 sm:ml-6 sm:flex sm:space-x-8">
            <Link
              href="/leaderboard"
              className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900"
            >
              Leaderboard
            </Link>
          </div>
        </div>
      </div>
    </div>
    <div className='h-16 w-full'></div>
  </>
}

export default memo(Header)