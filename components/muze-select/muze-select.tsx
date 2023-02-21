import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';

export interface MuzeSelectProps {
  label: string;
  helperMessage: string;
  items: string[];
  selectedItem?: string;
}

export default function MuzeSelect(props: MuzeSelectProps) {
  return (
    <div className='bg-neutral-800 p-3 rounded-3xl shadow-convex transition-height duration-300'>
      <Menu as='div'>
        <Menu.Button className='flex flex-row gap-2 w-full h-10 items-center justify-between text-neutral-300 hover:text-neutral-50 rounded-2xl mb-1 bg-neutral-900 px-3 py-1 shadow-concave-sm'>
          <p>{props.label}</p>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
            fill='currentColor'
            className='w-5 h-5'
          >
            <path
              fillRule='evenodd'
              d='M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z'
              clipRule='evenodd'
            />
          </svg>
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
          <Menu.Items>
            {props.items.map((item, i) => {
              return (
                <Menu.Item>
                  {({ active }) => (
                    <button className='flex flex-row w-full rounded-xl shadow-sm bg-gradient-to-r from-blue-700 to-purple-800 hover:from-blue-600 hover:to-purple-700 text-neutral-50 py-1 px-2 m-1 cursor-pointer'>
                      {item}
                    </button>
                  )}
                </Menu.Item>
              );
            })}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
