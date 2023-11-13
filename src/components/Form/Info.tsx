import { FC } from 'react';
import { Icon, IconProps } from '../Layout';

export interface InfoProps {
  message: string;
  type: 'success' | 'error';
}

interface DetailsReturnProps {
  colorClass: string;
  icon: IconProps;
}

export const Info: FC<InfoProps> = ({ message, type }) => {
  const getDetails = (): DetailsReturnProps => {
    switch (type) {
      case 'error':
        return {
          colorClass: 'text-orange-400',
          icon: {
            name: 'circle-exclamation',
            color: 'fill-orange-400',
            size: 20,
          },
        };
      case 'success':
        return {
          colorClass: 'text-green-400',
          icon: {
            name: 'check',
            color: 'fill-green-400',
            size: 20,
          },
        };
    }
  };

  const { colorClass, icon } = getDetails();

  return (
    <div className="flex items-center">
      <Icon {...icon} />

      <p
        className={`text-base leading-5 text-gray-800 tracking-normal ml-1 ${colorClass}`}
      >
        {message}
      </p>
    </div>
  );
};
