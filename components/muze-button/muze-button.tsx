export interface MuzeButtonProps {
  label: string;
  variant: 'primary' | 'standard';
}

export default function MuzeButton(props: MuzeButtonProps) {
  return (
    <button
      className={`${
        props.variant === 'primary'
          ? 'bg-indigo-900 hover:bg-indigo-800'
          : 'bg-neutral-900 hover:bg-neutral-800'
      } text-neutral-300 border-neutral-900 border-2 rounded-full px-5 py-2 shadow-convex-md active:shadow-none transition duration-75`}
    >
      {props.label}
    </button>
  );
}
