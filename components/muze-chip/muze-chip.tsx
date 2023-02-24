export interface MuzeChipProps {
  id: number;
  label: string;
}

export default function MuzeChip(props: MuzeChipProps) {
  return (
    <div className='flex flex-row items-center gap-2 px-3 py-2 w-fit bg-neutral-900 rounded-full shadow-convex-md'>
      <label className='text-neutral-400'>{props.label}</label>
      <button>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 20 20'
          fill='currentColor'
          className='w-5 h-5 text-neutral-800 hover:text-neutral-400 active:text-neutral-500'
        >
          <path d='M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z' />
        </svg>
      </button>
    </div>
  );
}
