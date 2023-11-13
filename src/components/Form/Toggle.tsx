import { FC, MouseEventHandler } from 'react';
import { Icon, IconProps } from '../Layout';

interface ToggleProps {
  checked: boolean;
  onClick: MouseEventHandler<HTMLDivElement>;
  label?: string;
  icon?: IconProps;
  required?: boolean;
}

export const Toggle: FC<ToggleProps> = ({
  checked,
  onClick,
  label,
  icon,
  required,
}) => {
  return (
    <div className="flex items-center gap-2">
      {icon && (
        <span className="pointer-events-none">
          <Icon {...icon} size={16} color="fill-gray-100" />
        </span>
      )}

      <div onClick={onClick} className="flex items-center gap-2 cursor-pointer">
        {label && (
          <label className="text-gray-100 text-sm leading-4 cursor-pointer select-none">
            {label}
          </label>
        )}

        <div className="relative">
          <input
            type="checkbox"
            checked={checked}
            className="sr-only peer"
            readOnly
            required={required}
          />
          <div className="w-9 h-5 bg-white/[0.08] peer-focus:outline-none peer-focus:ring-1 peer-focus:ring-purple-400 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-gray-100 after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-purple-400" />
        </div>
      </div>
    </div>
  );
};
