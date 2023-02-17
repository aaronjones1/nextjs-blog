import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';

export default function MuzeSelect() {
  return (
    <Menu as='div'>
      <Menu.Button className='text-neutral-50 rounded-xl mb-1 bg-gradient-to-r from-blue-700 to-purple-800 hover:from-blue-600 hover:to-purple-700 px-2 py-1'>
        Genre
      </Menu.Button>
      <Transition
        as={Fragment}
        enter='transition ease-out duration-100'
        enterFrom='transform opacity-0 scale-95'
        enterTo='transform opacity-100 scale-100'
        leave='transition ease-in duration-75'
        leaveFrom='transform opacity-100 scale-100'
        leaveTo='transform opacity-0 scale-95'
      >
        <Menu.Items className='bg-neutral-50 rounded-2xl p-1 w-fit shadow-md shadow-neutral-900'>
          <Menu.Item>
            {({ active }) => (
              <button className='flex flex-row w-40 rounded-xl bg-gradient-to-r from-blue-700 to-purple-800 hover:from-blue-600 hover:to-purple-700 text-neutral-50 py-1 px-2 m-1 cursor-pointer'>
                Mystery
              </button>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <button className='flex flex-row w-40 rounded-xl bg-gradient-to-r from-blue-700 to-purple-800 hover:from-blue-600 hover:to-purple-700 text-neutral-50 py-1 px-2 m-1 cursor-pointer'>
                Sci-Fi
              </button>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <button className='flex flex-row w-40 rounded-xl bg-gradient-to-r from-blue-700 to-purple-800 hover:from-blue-600 hover:to-purple-700 text-neutral-50 py-1 px-2 m-1 cursor-pointer'>
                Romance
              </button>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <button className='flex flex-row w-40 rounded-xl bg-gradient-to-r from-blue-700 to-purple-800 hover:from-blue-600 hover:to-purple-700 text-neutral-50 py-1 px-2 m-1 cursor-pointer'>
                Comedy
              </button>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <button className='flex flex-row w-40 rounded-xl bg-gradient-to-r from-blue-700 to-purple-800 hover:from-blue-600 hover:to-purple-700 text-neutral-50 py-1 px-2 m-1 cursor-pointer'>
                Fantasy
              </button>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

function MuzeMenuItem({ active, text }: { active: boolean; text: string }) {
  return (
    <button className='flex flex-row w-40 rounded-xl bg-gradient-to-r from-blue-700 to-purple-800 hover:from-blue-600 hover:to-purple-700 text-neutral-50 py-1 px-2 m-1 cursor-pointer'>
      {text}
      {active ? <p>&nbsp;(Active)</p> : <p>&nbsp;(Inactive)</p>}
    </button>
  );
}
