/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import Button from './Button'

const Links = [
  { name: 'Home', link: '/home', current: "true" },
  { name: 'Browse Catalog', link: '/catalog' },
  { name: 'Share a Resource', link: '/shareresource'},
  { name: 'Saved Items', link: '/saveditems' },
  { name: 'About', link: '/about'},
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function NavBar() {
  return (
    <Disclosure position="sticky" as="nav" className="bg-zinc-50" >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
         
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
               { /*  logo icon */}
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="block h-8 w-auto lg:hidden"
                    src="https://i.imgur.com/keyyeIJ.png"
                    alt="Workflow"
                  />
                  <img
                    className="hidden h-8 w-auto lg:block"
                    src="https://i.imgur.com/keyyeIJ.png"
                    alt="Workflow"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {Links.map((Link) => (
                      <a
                        key={Link.name}
                        href={Link.link}
                        className={classNames(
                          Link.current ? 'bg-yellow-500 text-white' : 'text-gray-500 hover:bg-yellow-500 hover:text-white',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                        aria-current={Link.current ? 'page' : undefined}
                      >
                        {Link.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <Button></Button>
              
            </div>
          </div>

         
        </>
      )}
    </Disclosure>
  )
}
