import Link from 'next/link'
import React from 'react'
import ThemeSwitch from 'src/components/ThemeSwitch'
import { useRouter } from 'next/router'

const Navigation = () => {
  const { pathname } = useRouter()
  return (
    <div className="sticky top-0 z-20 bg-white py-2 dark:bg-neutral-900 md:mb-6 md:py-6">
      <div className="container mx-auto flex items-center justify-between px-4 lg:max-w-4xl">
        <div className="flex items-start">
          <Link href="/">
            <a
              className={
                'font-medium uppercase tracking-wider text-gray-900 transition-colors hover:text-sky-500 dark:text-white dark:hover:text-sky-500'
              }
            >
              AQUAPICHU
            </a>
          </Link>
        </div>
        <div className="flex items-end space-x-5">
          <Link href="/">
            <a
              className={
                pathname === '/'
                  ? 'font-medium uppercase tracking-wider text-sky-500 transition-colors hover:text-sky-500 dark:text-white dark:hover:text-sky-500'
                  : 'font-medium uppercase tracking-wider text-gray-900 transition-colors hover:text-sky-500 dark:text-white dark:hover:text-sky-500'
              }
            >
              About
            </a>
          </Link>
          {/**
          <Link href={'/Logs/Overview'}>
            <a
              className={
                pathname === '/Logs/Overview'
                  ? 'font-medium uppercase tracking-wider text-sky-500 transition-colors hover:text-sky-500 dark:text-white dark:hover:text-sky-500'
                  : 'font-medium uppercase tracking-wider text-gray-900 transition-colors hover:text-sky-500 dark:text-white dark:hover:text-sky-500'
              }
            >
              Logs
            </a>
          </Link>
          **/}
          <ThemeSwitch />
        </div>
      </div>
    </div>
  )
}

export default Navigation
