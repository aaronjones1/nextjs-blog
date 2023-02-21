export interface MuzeInputProps {
  label: string;
  helperMessage?: string;
  placeholder?: string;
}

export default function MuzeInput(props: MuzeInputProps) {
  return (
    <div className='flex flex-col rounded-3xl px-2 py-0.5 bg-neutral-800 shadow-convex'>
      {props.label ? (
        <label
          htmlFor='mzinput'
          className='text-neutral-400 text-sm font-light ml-4 mb-1'
        >
          {props.label}
        </label>
      ) : (
        <div className='h-1.5'></div>
      )}
      <input
        id='mzinput'
        className='outline-none h-10 px-4 py-2 bg-neutral-900 text-neutral-300 font-medium text-base rounded-3xl shadow-concave-sm truncate'
        placeholder={props.placeholder}
      />
      {props.helperMessage ? (
        <p className='text-neutral-400 text-sm font-light ml-4 mb-1'>
          {props.helperMessage}
        </p>
      ) : (
        <div className='h-1.5'></div>
      )}
    </div>
  );
}
