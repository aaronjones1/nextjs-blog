export interface MuzeInputProps {
  label: string;
  helperMessage?: string;
  placeholder?: string;
}

export default function MuzeInput(props: MuzeInputProps) {
  return (
    <div className='flex flex-col'>
      <label htmlFor='mzinput' className='text-neutral-400 text-sm font-light mb-1 ml-2.5'>
        {props.label}
      </label>
      <input 
        id='mzinput'
        className='rounded-full px-2.5 py-1 outline-none border-2 border-transparent focus:border-neutral-700 ring-neutral-50 bg-neutral-800 text-neutral-50 font-medium shadow-md shadow-neutral-900'
        placeholder={props.placeholder}
      />
      {props.helperMessage ? (
        <p className='text-neutral-400 text-sm font-light mt-0.5 ml-2.5'>
          {props.helperMessage}
        </p>
      ) : (
        <></>
      )}
    </div> 
  );
}
