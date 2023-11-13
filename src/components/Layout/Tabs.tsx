import { FC, ReactNode } from 'react';

interface SingleTabProps {
  label: string;
  onClick: () => void;
  content: ReactNode;
}

interface TabsProps {
  tabs: SingleTabProps[];
  view: number;
}

interface TabProps extends Omit<SingleTabProps, 'content'> {
  view: number;
  index: number;
}

const Tab: FC<TabProps> = ({ label, onClick, view, index }) => {
  const getDetails = (): string => {
    if (view === index) {
      return "text-gray-100 font-semibold after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-gradient-to-r after:from-blue-700 after:via-purple-400 after:to-blue-700 after:animate-tab-underline after:bg-[length:300%]";
    }

    return 'text-gray-400';
  };

  const details = getDetails();

  return (
    <div className="pb-2.5 relative">
      <button
        onClick={onClick}
        className={`text-base leading-5 tracking-normal cursor-pointer select-none ${details} transition-all ease-in-out duration-200`}
      >
        {label}
      </button>
    </div>
  );
};

export const Tabs: FC<TabsProps> = ({ tabs, view }) => {
  return (
    <>
      <div className="flex items-center gap-8 w-full border-b border-gray-100/[.08]">
        {tabs.map((tab, index) => (
          <Tab
            key={`tab-${index}`}
            label={tab.label}
            onClick={tab.onClick}
            view={view}
            index={index}
          />
        ))}
      </div>

      <div>
        {tabs.map((tab, index) => (
          <div
            key={`tab-content-${index}`}
            className={`${view === index ? 'block' : 'hidden'} mt-8`}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </>
  );
};
