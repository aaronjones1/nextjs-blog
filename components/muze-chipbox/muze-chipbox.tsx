import React, { KeyboardEvent, useState } from 'react';
import MuzeChip from '../muze-chip/muze-chip';

export interface MuzeChipboxProps {
  label: string;
  helperMessage?: string;
}

export default function MuzeChipbox(props: MuzeChipboxProps) {
  const [addedChips, setAddedChips] = useState([]);
  const [inputValue, setInputValue] = useState('');
  let latestId = 0;

  function handleEnterKey(event: KeyboardEvent) {
    console.log(`handleEnterKey: ${event.key}`);

    if (event.key === 'Enter') {
      latestId = latestId + 1;
      //addedChips.push({ id: latestId, label: inputValue });
      setAddedChips([...addedChips, { id: latestId, label: inputValue }]);
      console.log(addedChips);
    }
  }

  return (
    <div className='flex flex-col gap-6'>
      <div className='bg-neutral-900 shadow-convex-md flex flex-col gap-1 rounded-3xl px-3 py-2'>
        <label className='text-neutral-400 text-sm font-light'>
          {props.label}
        </label>
        <input
          className='rounded-full bg-neutral-900 shadow-concave-sm text-neutral-300 px-2 py-1 outline-none'
          type='text'
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          onKeyDown={(event: KeyboardEvent) => handleEnterKey(event)}
        />
      </div>
      <div className='flex flex-row flex-wrap gap-6'>
        {addedChips.map((chip) => (
          <MuzeChip id={chip.id} label={chip.label} />
        ))}
      </div>
    </div>
  );
}
