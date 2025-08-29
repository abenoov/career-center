import { useRef } from 'react';

export interface InputProps
  extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  testId?: string;
  wrapperClassName?: string;
  postfixIcon?: React.ReactNode;
  showDropdown?: boolean;
  label?: string;
}

const Input = ({
  className,
  wrapperClassName,
  postfixIcon,
  showDropdown,
  label,
  ...rest
}: InputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className={`w-full ${wrapperClassName || ''}`}>
      {label && <label className="block text-sm font-medium text-gray-900 mb-2">{label}</label>}
      <div className="relative">
        <input
          {...rest}
          className={`
            w-full h-8 px-4 py-2 border border-gray-300 rounded-[10px]
            bg-white text-gray-900 text-sm
            placeholder-gray-400 placeholder:font-light
            transition-colors duration-200
            focus:outline-none focus:ring-0 focus:border-gray-500
            hover:border-gray-400
            shadow-outline-gray-focused
            ${className || ''}
          `}
          ref={inputRef}
        />
        {postfixIcon && (
          <div
            className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer"
            onClick={() => {
              inputRef.current?.focus();
            }}
          >
            {postfixIcon}
          </div>
        )}
      </div>
    </div>
  );
};

export default Input;
