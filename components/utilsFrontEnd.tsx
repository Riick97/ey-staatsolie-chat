import Image from "next/image";
import { useState, useEffect } from "react";

const AIColor = "bg-[rgb(234,234,234)]";
const HumanColor = "bg-white";

export function getIconAndClassName(
  message: any,
  loading: any,
  index: any,
  chatMessages: any
  // styles: any
) {
  let icon;
  let className;

  if (message.type === "apiMessage") {
    //ConfigurationSystemMessage
    icon = (
      <div className="bg-[#fff] w-8 h-8 rounded-full flex items-center justify-center overflow-hidden">
        <Image
          src="/staatsolie-logo-small.jpeg"
          alt="AI"
          width={24}
          height={24}
          className="rounded-full object-cover w-full h-full"
          priority
        />
      </div>
    );
    className = `flex ${AIColor} opacity-70 p-6 text-[#222] animate-fadein gap-6`;
  } else {
    //ConfigurationUserMessage
    icon = (
      <></>
      // <div className="w-10 h-10 rounded-full">
      //   <Image
      //     src="/usericon.png"
      //     alt="Me"
      //     width="30"
      //     height="30"
      //     className={"mr-8"}
      //     priority
      //   />
      // </div>
    );

    // The latest message sent by the user will be animated while waiting for a response
  }

  return { icon, className };
}

const saveToSessionStorage = (key: string, value: any) => {
  if (typeof window !== "undefined") {
    sessionStorage.setItem(key, JSON.stringify(value));
  }
};

const loadFromSessionStorage = (key: string, defaultValue: any) => {
  if (typeof window !== "undefined") {
    const savedValue = sessionStorage.getItem(key);
    return savedValue ? JSON.parse(savedValue) : defaultValue;
  }
  return defaultValue;
};

type Message = {
  message: string;
  type: string;
};

const defaultMessage = [
  {
    message:
      "Hallo! Ik sta tot uw dienst om ondersteuning te bieden bij diverse werkzaamheden...",
    type: "apiMessage",
  },
];

export const useMessageState = () => {
  const defaultState = {
    messages: [],
    pending: undefined,
    histories: {}, // Store histories per chat mode
  };

  // Load from sessionStorage or initialize
  const initialState = loadFromSessionStorage("messageState", defaultState);

  const [messageState, setMessageState] = useState<{
    messages: Message[];
    pending?: string;
    histories: { [key: string]: [string, string][] }; // Each mode has its own history
  }>(initialState);

  useEffect(() => {
    if (typeof window !== "undefined") {
      saveToSessionStorage("messageState", messageState);
    }
  }, [messageState]);

  return { messageState, setMessageState };
};
