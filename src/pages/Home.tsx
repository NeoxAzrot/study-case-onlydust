import { Button, Modal } from '@/components';
import { Drawer } from '@/components/Drawer';
import { FC, useState } from 'react';

const Home: FC = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleOpenButton = () => {
    setOpenModal(true);
  };

  const handleCloseButton = () => {
    setOpenModal(false);
  };

  return (
    <main className="p-4 font-inter bg-gray-300 w-full h-[100vh]">
      <section className="relative h-full">
        {!openModal && (
          <div className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4">
            <Button
              onClick={handleOpenButton}
              label="Open drawer"
              size="large"
            />
          </div>
        )}

        <Modal open={openModal} onClose={handleCloseButton}>
          <Drawer />
        </Modal>
      </section>
    </main>
  );
};

export default Home;
