export interface MuzeInputProps {
  label: string;
  helperMessage?: string;
  placeholder?: string;
}

export default function MuzeInput(props: MuzeInputProps) {
  return (
    <div className='flex flex-col gap-1 rounded-3xl pt-1.5 px-3 pb-2 bg-neutral-900 shadow-convex-md border-neutral-800 border-t-2 border-l-2'>
      {props.label ? (
        <label
          htmlFor='mzinput'
          className='text-neutral-400 text-sm font-light ml-4'
        >
          {props.label}
        </label>
      ) : (
        <div className='h-1.5'></div>
      )}
      <input
        id='mzinput'
        className='outline-none h-10 px-4 py-2 bg-neutral-900 text-neutral-400 font-medium text-base rounded-2xl shadow-concave-sm truncate border-neutral-800 border-b-2 border-r-2'
        placeholder={props.placeholder}
      />
      {props.helperMessage ? (
        <p className='text-neutral-400 text-sm font-light ml-4'>
          {props.helperMessage}
        </p>
      ) : (
        <div className='h-1.5'></div>
      )}
    </div>
  );
}
