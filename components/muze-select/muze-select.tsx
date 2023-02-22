import { useState, Fragment } from 'react';
import { Listbox, Menu, Transition } from '@headlessui/react';

export interface MuzeSelectOption {
  id: number;
  value: string;
  displayValue: string;
}

export interface MuzeSelectProps {
  label: string;
  helperMessage: string;
  items: MuzeSelectOption[];
  selectedItem?: MuzeSelectOption;
}

export default function MuzeSelect(props: MuzeSelectProps) {
  const [selectedItem, setSelectedItem] = useState(
    props.items[props.selectedItem?.id]
  );

  const [isOpen, setIsOpen] = useState(true);

  return (
    // <Transition
    //   show={true}
    //   enter='transition-height duration-75'
    //   enterFrom='h-24'
    //   enterTo='h-80'
    //   leave='transition-height duration-150'
    //   leaveFrom='h-80'
    //   leaveTo='h-24'
    // >
      <div className='flex flex-col gap-1 bg-neutral-900 p-3 rounded-3xl shadow-convex-md border-neutral-800 border-t border-l'>
        <label className='text-sm font-light text-neutral-500 ml-3'>
          {props.label}
        </label>
        <Listbox value={selectedItem} onChange={setSelectedItem}>
          <Listbox.Button
            className='flex flex-row gap-2 w-full h-10 items-center justify-between text-neutral-400 hover:text-neutral-50 rounded-2xl bg-neutral-900 px-3 py-1 shadow-concave-sm border-neutral-800 border-b border-r transition-colors duration-100'
            onClick={() => setIsOpen((isOpen) => !isOpen)}
            >
            {selectedItem ? selectedItem.displayValue : 'Select'}
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
          </Listbox.Button>
          <Transition
            enter='transition duration-100 ease-out'
            enterFrom='transform scale-95 opacity-0'
            enterTo='transform scale-100 opacity-100'
            leave='transition duration-75 ease-out'
            leaveFrom='transform scale-100 opacity-100'
            leaveTo='transform scale-95 opacity-0'
          >
            <Listbox.Options className='px-3'>
              {props.items.map((item) => (
                <Listbox.Option
                  className='text-neutral-400 hover:text-neutral-300 cursor-pointer transition-colors duration-100'
                  key={item.id}
                  value={item}
                >
                  {item.displayValue}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </Listbox>
      </div>
    // </Transition>
  );
}
