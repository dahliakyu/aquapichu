import Link from 'next/link'
import React from 'react'
import ThemeSwitch from 'src/components/ThemeSwitch'
import { useRouter } from 'next/router'

const Navigation = () => {
  const { pathname } = useRouter()
  return (
    <div className="sticky top-0 z-20 py-2 md:py-6 md:mb-6 dark:bg-neutral-900 bg-white">
      <div className="container px-4 mx-auto lg:max-w-4xl flex items-center justify-between">
        <div className="items-start flex">
          <Link href="/">
            <a
              className={
                'font-medium tracking-wider transition-colors text-gray-900 dark:hover:text-sky-500 hover:text-sky-500 uppercase dark:text-white'
              }
            >
              AQUAPICHU
            </a>
          </Link>
        </div>
        <div className="items-end flex space-x-5">
          <Link href="/">
            <a
              className={
                pathname === '/'
                  ? 'font-medium tracking-wider transition-colors dark:text-sky-500 text-sky-500 hover:text-sky-500 uppercase dark:text-white'
                  : 'font-medium tracking-wider transition-colors text-gray-900 dark:hover:text-sky-500 hover:text-sky-500 uppercase dark:text-white'
              }
            >
              About
            </a>
          </Link>
          <Link href={'/Playground/Overview'}>
            <a
              className={
                pathname === '/Playground/Overview'
                  ? 'font-medium tracking-wider transition-colors dark:text-sky-500 text-sky-500 hover:text-sky-500 uppercase dark:text-white'
                  : 'font-medium tracking-wider transition-colors text-gray-900 dark:hover:text-sky-500 hover:text-sky-500 uppercase dark:text-white'
              }
            >
              Playground
            </a>
          </Link>

          <ThemeSwitch />
        </div>
      </div>
    </div>
  )
}

export default Navigation
