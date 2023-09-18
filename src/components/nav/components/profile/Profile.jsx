import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Profile = ({ mobil }) => {
  return (
    <Menu as="div" className="relative ml-3">
      <div>
        <Menu.Button className="relative flex rounded-full bg-white text-sm ">
          <span className="absolute -inset-1.5" />
          <span className="sr-only">Open user menu</span>
          <span className="inline-block h-6 w-6 overflow-hidden rounded-full bg-gray-100">
            <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </span>
        </Menu.Button>
      </div>
      <Transition
        as={ Fragment }
        enter="transition ease-out duration-200"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <Menu.Item>
            { ({ active }) => (
              <a
                href="#"
                className={ classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700') }
              >
                Iniciar sesion
              </a>
            ) }
          </Menu.Item>
          <Menu.Item>
            { ({ active }) => (
              <a
                href="#"
                className={ classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700') }
              >
                Registrarse
              </a>
            ) }
          </Menu.Item>
          <Menu.Item>
            { ({ active }) => (
              <a
                href="#"
                className={ classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700') }
              >
                Sign out
              </a>
            ) }
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default Profile