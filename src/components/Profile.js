/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import profileimg from '../Images/TestAccount.png'
import {useNavigate} from 'react-router-dom'
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Profile=()=> {
  let user = JSON.parse(localStorage.getItem("user-info"));
  const navigate = useNavigate();
  function logout() {
    localStorage.clear();
    navigate("/login");
  }

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-trade text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
          <img src={profileimg} className='w-5 h-5 m-0 p-0 bg-black'/>
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-gray-700  ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? ' text-primary' : 'text-trade',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Profile
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? ' text-primary' : 'text-trade',
                    'block px-4 py-2 text-sm'
                  )}
                >
                 Orders
                </a>
              )}
            </Menu.Item>
           
            <form method="POST" action="#">
              <Menu.Item>
                {({ active }) => (
                  <button
                    type="submit"
                    onClick={logout}
                    className={classNames(
                      active ? ' text-primary' : 'text-trade',
                      'block w-full text-left px-4 py-2 text-sm'
                    )}
                  >
                    Logout
                  </button>
                )}
              </Menu.Item>
            </form>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default Profile;