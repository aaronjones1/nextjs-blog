import { useState } from 'react';
import { Switch } from '@headlessui/react';

export interface MuzeSwitchProps {
  defaultToOn?: boolean;
}

export default function MuzeSwitch(props: MuzeSwitchProps) {
  const [isChecked, setIsChecked] = useState(
    props.defaultToOn ? props.defaultToOn : false
  );

  return (
    <Switch
      checked={isChecked}
      onChange={setIsChecked}
      className='h-10 w-20 flex flex-row items-start rounded-full bg-neutral-900 shadow-concave-sm border-neutral-800 border-r border-b cursor-pointer'
    >
      <span
        className={`${
          isChecked
            ? 'bg-indigo-900 translate-x-10'
            : 'bg-neutral-800 translate-x-0'
        } rounded-full inline-block transform m-1 h-8 w-8 border-neutral-800 border-l border-t pointer-events-none shadow-md shadow-black transition duration-150 ease-in-out`}
      />
    </Switch>
  );
}
