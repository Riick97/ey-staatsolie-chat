import { useState } from "react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid";

// Define the type for the publishing option
export interface ChatOptions {
  title: string;
  description: string;
  current: boolean;
}

// Define the component props type
export interface ChatModeSelectorProps {
  options: ChatOptions[];
  selected: ChatOptions;
  setSelected: (option: ChatOptions) => void;
}

const ChatModeSelector = ({
  options,
  selected,
  setSelected,
}: ChatModeSelectorProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionSelect = (option: ChatOptions) => {
    setSelected(option);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <div className="inline-flex divide-x divide-indigo-700 rounded-md outline-none">
        <div className="inline-flex items-center gap-x-1.5 rounded-l-md bg-indigo-600 px-3 py-2 text-white">
          <CheckIcon aria-hidden="true" className="h-5 w-5" />
          <p className="text-sm font-semibold">{selected.title}</p>
        </div>
        <button
          className="inline-flex items-center rounded-l-none rounded-r-md bg-indigo-600 p-2 outline-none hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-400"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span className="sr-only">Change published status</span>
          <ChevronDownIcon aria-hidden="true" className="h-5 w-5" />
        </button>
      </div>

      {isOpen && (
        <div className="absolute right-0 z-10 mt-2 w-72 origin-top-right divide-y divide-gray-200 overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black/5">
          {options.map((option) => (
            <div
              key={option.title}
              className="group cursor-pointer select-none p-4 text-sm text-gray-900"
              onClick={() => handleOptionSelect(option)}
            >
              <div className="flex flex-col">
                <div className="flex justify-between">
                  <p className="font-normal">{option.title}</p>
                  {selected.title === option.title && (
                    <span className="text-indigo-600">
                      <CheckIcon aria-hidden="true" className="size-5" />
                    </span>
                  )}
                </div>
                <p className="mt-2 text-gray-500">{option.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ChatModeSelector;
