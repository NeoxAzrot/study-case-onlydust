import { ChangeEvent, FC } from 'react';
import { Icon, IconProps } from '../Layout';
import { Info, InfoProps } from './Info';

interface InputProps {
  type?: 'text' | 'password';
  placeholder?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  info?: InfoProps;
  icon?: IconProps;
  required?: boolean;
}

export const Input: FC<InputProps> = ({
  type = 'text',
  placeholder,
  value,
  onChange,
  info,
  icon,
  required,
}) => {
  const getInputBorderColor = (): string => {
    switch (info?.type) {
      case 'error':
        return 'border-orange-400';
      case 'success':
        return 'border-green-400';

      default:
        return 'border-gray-100/[.08] focus:border-purple-400';
    }
  };

  const inputBorderColor = getInputBorderColor();

  return (
    <div>
      <div className="relative">
        <input
          type={type}
          className={`bg-white bg-opacity-5 border ${inputBorderColor} p-4 pl-[52px] rounded-2xl text-slate-400 text-base leading-5 tracking-normal w-full placeholder-slate-500 outline-none transition-border-color duration-200 ease-in-out`}
          placeholder={placeholder}
          required={required}
          value={value}
          onChange={onChange}
        />

        {icon && (
          <span className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Icon {...icon} size={20} color="fill-slate-400" />
          </span>
        )}
      </div>

      {info && (
        <div className="mt-4">
          <Info {...info} />
        </div>
      )}
    </div>
  );
};
