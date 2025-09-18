import { RefObject } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getIconAndClassName } from "./utilsFrontEnd";
import Image from "next/image";

export interface Message {
  type: "apiMessage" | "userMessage";
  message: string;
}

export interface MessageDisplayWindowProps {
  messageListRef: RefObject<HTMLDivElement>;
  chatMessages: Message[];
  loading: boolean;
}

export const markdownRenderers = {
  p: ({ node, ...props }: any) => (
    <p className="text-base mb-1 leading-relaxed" {...props} />
  ),
  h1: ({ node, ...props }: any) => (
    <h1 className="text-xl font-semibold mt-4 mb-2" {...props} />
  ),
  ul: ({ node, ...props }: any) => (
    <ul className="text-base pl-6 list-disc list-outside my-2" {...props} />
  ),
  code: ({ node, inline, ...props }: any) => (
    <code
      className={`${
        inline
          ? "bg-gray-100 text-pink-600 px-1.5 py-0.5 rounded font-mono text-sm"
          : "block bg-gray-800 text-gray-100 p-3 rounded-lg overflow-x-auto font-mono text-sm my-2"
      }`}
      {...props}
    />
  ),
  pre: ({ node, ...props }: any) => (
    <pre
      className="bg-gray-800 p-3 rounded-lg overflow-x-auto my-2"
      {...props}
    />
  ),
};

interface MessageContentProps {
  message: Message;
}

export const MessageContent = ({ message }: MessageContentProps) => {
  return (
    <div className="overflow-hidden">
      <ReactMarkdown
        className="prose prose-slate max-w-none
          prose-headings:font-semibold
          prose-p:leading-relaxed prose-p:mb-1
          prose-ul:my-2
          prose-pre:bg-gray-800 prose-pre:text-gray-100
          prose-code:text-pink-600 prose-code:bg-gray-100
          prose-code:before:content-none prose-code:after:content-none
          prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline"
        components={markdownRenderers}
        remarkPlugins={[remarkGfm]}
        linkTarget="_blank"
      >
        {message.message}
      </ReactMarkdown>
    </div>
  );
};

interface MessageItemProps {
  message: Message;
  index: number;
  loading: boolean;
  chatMessages: Message[];
}

export const MessageItem = ({
  message,
  index,
  loading,
  chatMessages,
}: MessageItemProps) => {
  const { icon } = getIconAndClassName(message, loading, index, chatMessages);
  const isApi = message.type === "apiMessage";

  return (
    <div
      className={`flex gap-2 px-4 py-2 items-start
        ${isApi ? "justify-start" : "justify-end"}`}
    >
      {isApi && (
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center">
          {icon}
        </div>
      )}

      <div
        className={`max-w-[80%] rounded-2xl px-4 py-2 shadow-sm
          ${
            isApi
              ? "bg-gray-100 text-gray-800"
              : "bg-yellow-300 text-gray-900 ml-auto"
          }`}
      >
        <MessageContent message={message} />
      </div>

      {!isApi && (
        <div className="flex-shrink-0 w-8 h-8 rounded-full overflow-hidden flex items-center justify-center">
          <Image
            src="/usericon.png"
            alt="Me"
            width={24}
            height={24}
            className="rounded-full object-cover w-full h-full"
            priority
          />
        </div>
      )}
    </div>
  );
};

const MessageDisplayWindow = ({
  messageListRef,
  chatMessages,
  loading,
}: MessageDisplayWindowProps) => {
  return (
    <div className="w-full h-full bg-white flex flex-col">
      <div
        ref={messageListRef}
        className="flex-1 overflow-y-auto px-2 py-4
          scroll-smooth scrollbar-thin scrollbar-thumb-gray-300
          scrollbar-track-gray-50"
      >
        {chatMessages.map((message, index) => (
          <MessageItem
            key={index}
            message={message}
            index={index}
            loading={loading}
            chatMessages={chatMessages}
          />
        ))}
      </div>
    </div>
  );
};

export default MessageDisplayWindow;
