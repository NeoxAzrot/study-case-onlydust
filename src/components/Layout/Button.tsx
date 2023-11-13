import { FC } from 'react';
import { Icon, IconProps } from './Icon';

interface ButtonProps {
  type?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  label?: string;
  icon?: IconProps;
  onClick: () => void;
}

export const Button: FC<ButtonProps> = ({
  type = 'primary',
  size = 'medium',
  label,
  icon,
  onClick,
}) => {
  const getSizeClass = (): string => {
    switch (size) {
      case 'small':
        return 'p-2 rounded-[10px]';
      case 'medium':
        return 'py-3 px-5 rounded-xl';
      case 'large':
        return 'py-4 px-6 rounded-xl';
    }
  };

  const getTypeClass = (): string => {
    switch (type) {
      case 'primary':
        return 'bg-gray-100 shadow-button hover:scale-105 focus:scale-105';
      case 'secondary':
        return 'bg-white bg-opacity-5 border border-gray-100 shadow-card hover:bg-opacity-10 focus:bg-opacity-10';
    }
  };

  const sizeClass = getSizeClass();
  const typeClass = getTypeClass();

  return (
    <button
      className={`text-base leading-5 font-semibold text-gray-800 tracking-normal outline-none transition-all ease-in-out duration-200 ${sizeClass} ${typeClass}`}
      onClick={onClick}
    >
      {label && label}

      {icon && (
        <span className={label && 'ml-3'}>
          <Icon {...icon} />
        </span>
      )}
    </button>
  );
};
