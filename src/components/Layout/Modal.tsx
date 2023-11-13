import { FC, ReactNode } from 'react';
import { Button } from './Button';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

export const Modal: FC<ModalProps> = ({ open, onClose, children }) => {
  return (
    <>
      {open && (
        <div className="rounded-lg bg-gray-900 w-full max-w-[550px] h-full max-h-[900px] absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 shadow-modal z-10">
          <div className="relative w-full h-full">
            <div className="absolute top-3.5 right-3.5">
              <Button
                type="secondary"
                size="small"
                icon={{
                  name: 'cross',
                  size: 10,
                }}
                onClick={onClose}
              />
            </div>

            <div className="px-6 py-8">{children}</div>
          </div>
        </div>
      )}
    </>
  );
};
