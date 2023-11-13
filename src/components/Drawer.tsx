import { ChangeEvent, FC, useState } from 'react';
import { Button, Tabs } from './Layout';
import { InfoProps, Input, Toggle } from './Form';

const Tab1Component: FC = () => {
  const [isShow, setIsShow] = useState<boolean>(false);
  const [value, setValue] = useState<string>('');
  const [info, setInfo] = useState<InfoProps | null>(null);

  const handleClickShow = () => {
    setIsShow((prev) => !prev);
  };

  const handleChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  // Or do it with a useEffect and a disabled props on the button
  const handleSubmit = () => {
    if (!value) {
      setInfo({
        type: 'error',
        message: 'The field is required',
      });

      return;
    }

    if (value.length < 5) {
      setInfo({
        type: 'error',
        message: 'The field must be at least 5 characters',
      });

      return;
    }

    setInfo({
      type: 'success',
      message: 'The field is valid',
    });
  };

  return (
    <div className="flex flex-col gap-8">
      <Toggle
        checked={isShow}
        onClick={handleClickShow}
        label="Show/hide"
        icon={{
          name: 'eye-slash',
        }}
      />

      {isShow && (
        <>
          <Input
            value={value}
            onChange={handleChangeValue}
            placeholder="Placeholder"
            icon={{
              name: 'search',
            }}
            info={info ? info : undefined}
          />

          <div className="self-end">
            <Button size="large" label="Submit" onClick={handleSubmit} />
          </div>
        </>
      )}
    </div>
  );
};

export const Drawer: FC = () => {
  const [tabView, setTabView] = useState<number>(0);

  const handleClickTabs = (view: number) => {
    setTabView(view);
  };

  const tabs = [
    {
      label: 'Tab 1',
      onClick: () => handleClickTabs(0),
      content: <Tab1Component />,
    },
    {
      label: 'Tab 2',
      onClick: () => handleClickTabs(1),
      content: (
        <p className="text-base leading-5 tracking-normal text-gray-100">
          Made with ♥ by Sami 🇫🇷
        </p>
      ),
    },
    {
      label: 'Tab 3',
      onClick: () => handleClickTabs(2),
      content: (
        <p className="text-base leading-5 tracking-normal text-gray-100">🥚</p>
      ),
    },
  ];

  return (
    <>
      <h1 className="text-2xl font-bold text-gray-100 tracking-normal mb-4">
        Study case
      </h1>

      <Tabs tabs={tabs} view={tabView} />
    </>
  );
};
