import { useState, useRef, useEffect, useMemo } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { fetchEventSource } from "@microsoft/fetch-event-source";
import { useMessageState } from "@/components/utilsFrontEnd";
import dynamic from "next/dynamic";
import Select from "react-select";
import Image from "next/image";

const serverApi =
  process.env.NEXT_PUBLIC_SERVER_API! ||
  "https://fiscal-chat-server.onrender.com/stream";

const MessageDisplayWindow = dynamic(
  () => import("@/components/MessageDisplayWindow"),
  {
    ssr: false,
  }
);

const backgroundChatColor = "bg-[#EEE]";

export default function Home() {
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(false);

  const { messageState, setMessageState } = useMessageState();
  const { messages, pending, histories } = messageState;
  const [chatMode, setChatMode] = useState<string>("wetBundel");

  const messageListRef = useRef<HTMLDivElement>(null);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const [selectedValues, setSelectedValues]: any = useState({
    select1: {
      value: "wetBundel",
      label: "Wet Bundel",
      selected: true,
    },
    select2: null,
    select3: null,
    select4: null,
  });
  console.log({ selectedValues });

  // Load chat history when chat mode changes
  useEffect(() => {
    if (chatMode) {
      setMessageState((state) => ({
        ...state,
        messages: [
          {
            message:
              "Hallo! Ik sta tot uw dienst om ondersteuning te bieden bij diverse werkzaamheden gerelateerd aan de fiscale wet- en regelgeving van Curaçao (wetbundel versie 2020). Waarmee kan ik u vandaag van dienst zijn?",
            type: "apiMessage",
          },
          ...(state.histories[chatMode] || [])
            .map(([question, answer]) => [
              { type: "userMessage", message: question },
              { type: "apiMessage", message: answer },
            ])
            .flat(),
        ],
        pending: undefined,
      }));
    }
  }, [chatMode]);

  // Auto scroll chat to bottom
  useEffect(() => {
    const messageList = messageListRef.current;
    if (messageList) {
      messageList.scrollTop = messageList.scrollHeight;
    }
  }, [pending]);

  // Focus on text field on load
  useEffect(() => {
    textAreaRef.current?.focus();
  }, [loading]);

  // Handle form submission
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const question = userInput.trim();

    if (question === "") {
      return;
    }

    setMessageState((state) => ({
      ...state,
      messages: [
        ...state.messages,
        {
          type: "userMessage",
          message: question,
        },
      ],
      pending: undefined,
    }));

    console.log({ messageState });

    setLoading(true);
    setUserInput("");
    setMessageState((state) => ({ ...state, pending: "" }));

    const ctrl = new AbortController();

    const body = JSON.stringify({
      question,
      history,
      chatMode: selectedValues.select1?.value,
      option2: selectedValues.select2?.value,
      option3: selectedValues.select3?.value,
      option4: selectedValues.select4?.value,
    });

    console.log({ body });

    fetchEventSource(serverApi, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Add this to handle CORS preflight
        Accept: "text/event-stream",
      },
      body: JSON.stringify({
        question,
        history: chatMode ? histories[chatMode] || [] : [], // Ensure valid lookup
        chatMode: chatMode || "defaultMode",
      }),
      signal: ctrl.signal,

      onmessage: (event) => {
        console.log({ event });
        if (!chatMode) {
          console.error("chatMode is null, skipping state update.");
          return;
        }
        if (event.data === "[DONE]") {
          setMessageState((state) => ({
            ...state,
            histories: {
              ...state.histories,
              [chatMode]: [
                ...(state.histories[chatMode] || []),
                [question, state.pending ?? ""],
              ],
            },
            messages: [
              ...state.messages,
              { type: "apiMessage", message: state.pending ?? "" },
            ],
            pending: undefined,
          }));
          setLoading(false);
          ctrl.abort();
        } else {
          const data = JSON.parse(event.data);
          if (data.data) {
            setMessageState((state) => ({
              ...state,
              pending: (state.pending ?? "") + data.data,
            }));
          } else {
            if (data.error) {
              console.error({ data });
              setMessageState((state) => ({
                ...state,
                pending: (state.pending ?? "") + ` <${data.error}>`,
              }));
            }
          }
        }
      },
    });
  };

  // Prevent blank submissions and allow for multiline input
  const handleEnter = (e: any) => {
    if (e.key === "Enter" && userInput) {
      if (!e.shiftKey && userInput) {
        handleSubmit(e);
      }
    } else if (e.key === "Enter") {
      e.preventDefault();
    }
  };

  const chatMessages: any = useMemo(() => {
    return [
      ...messages,
      ...(pending ? [{ type: "apiMessage", message: pending }] : []),
    ];
  }, [messages, pending]);

  return (
    <>
      <main className="h-screen w-full overflow-hidden bg-gray-100">
        {/* Main container with fixed padding */}
        <div className="h-full w-full ">
          {/* Content wrapper */}
          <div className="flex h-full w-full gap-6">
            {/* Left sidebar - Configuration */}
            {/* <div className="w-72 flex-shrink-0  rounded-lg p-4 shadow-sm pt-32 ">
              <ConfigurationPane
                selectedValues={selectedValues}
                setSelectedValues={setSelectedValues}
                setChatMode={setChatMode}
              />
            </div> */}

            {/* Main chat area - Takes remaining width */}
            <div className="flex-1 flex flex-col h-full bg-white pl-10">
              <div className="flex pt-10">
                {/* <div className="-mt-3">
                  <Image
                    src="/logoGob.png"
                    alt="AI"
                    width="150"
                    height="100"
                    className={`mr-8`}
                    priority
                  />
                </div> */}
                <h1 className="text-3xl text-stone-500 pb-2 mb-4">
                  Staatsolie Chat
                </h1>
              </div>
              {/* Messages container - Takes available height minus input height */}
              <div className="flex-1 overflow-hidden bg-white rounded-lg shadow-sm mb-4 pt-5">
                <MessageDisplayWindow
                  messageListRef={messageListRef}
                  chatMessages={chatMessages}
                  loading={loading}
                />
              </div>

              {/* Input area - Fixed height */}
              <div className="h-32 flex items-center justify-center">
                <div className="w-3/4 relative">
                  <form onSubmit={handleSubmit}>
                    <textarea
                      disabled={loading}
                      onKeyDown={handleEnter}
                      ref={textAreaRef}
                      autoFocus={false}
                      rows={1}
                      maxLength={512}
                      id="userInput"
                      name="userInput"
                      placeholder={
                        loading
                          ? "Waiting for response..."
                          : "Ask a question..."
                      }
                      value={userInput}
                      onChange={(e) => setUserInput(e.target.value)}
                      className={`w-full resize-none text-lg p-4 ${backgroundChatColor} 
                      rounded-lg text-gray-800 focus:outline-none focus:ring-1 
                      focus:ring-blue-500 transition-shadow`}
                    />
                    <button
                      type="submit"
                      disabled={loading}
                      className="absolute right-4 top-1/2 -translate-y-1/2 
                      text-teal-500 hover:text-teal-600 transition-colors
                      disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <CircularProgress color="inherit" size={20} />
                      ) : (
                        <svg
                          viewBox="0 0 20 20"
                          className="w-5 h-5 fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                        </svg>
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

const ConfigurationPane = ({
  selectedValues,
  setSelectedValues,
  setChatMode,
}: any) => {
  const handleChange = (value: any, selectNumber: any) => {
    setSelectedValues((prev: any) => ({
      ...prev,
      [selectNumber]: value,
    }));
  };

  // Enhanced custom styles for better readability
  const customStyles = {
    control: (provided: any) => ({
      ...provided,
      backgroundColor: "white",
      borderColor: "#e5e7eb",
      minWidth: "200px",
      marginBottom: "1rem",
      boxShadow: "none",
      "&:hover": {
        borderColor: "#94a3b8",
      },
    }),
    menu: (provided: any) => ({
      ...provided,
      backgroundColor: "white",
      boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
      border: "1px solid #e5e7eb",
    }),
    option: (provided: any, state: any) => ({
      ...provided,
      backgroundColor: state.isSelected
        ? "#1e40af" // darker blue for selected
        : state.isFocused
        ? "#f1f5f9" // light gray for hover
        : "white",
      color: state.isSelected ? "white" : "#1e293b", // dark gray for text
      cursor: "pointer",
      "&:active": {
        backgroundColor: "#1e40af",
      },
    }),
    singleValue: (provided: any) => ({
      ...provided,
      color: "#1e293b", // dark gray for selected value text
    }),
    placeholder: (provided: any) => ({
      ...provided,
      color: "#94a3b8", // medium gray for placeholder
    }),
    input: (provided: any) => ({
      ...provided,
      color: "#1e293b", // dark gray for input text
    }),
  };

  return (
    <div className="flex flex-col p-4 bg-gray-50 rounded-lg w-64 mr-8">
      <Select
        styles={customStyles}
        options={[
          { value: "wetBundel", label: "Wet Bundel", selected: true },
          { value: "internet", label: "Internet" },
          { value: "combinatie", label: "Combinatie" },
          { value: "debugging", label: "Debugging" },
        ]}
        //selected={()=>{}}
        value={selectedValues.select1}
        onChange={(value: any) => {
          setSelectedValues({ select1: value });
          setChatMode(value?.value || null);
        }}
        placeholder="Chat Mode"
        className="mb-4"
      />

      <Select
        styles={customStyles}
        options={[
          { value: "IB", label: "Inkomstenbelasting (Income Tax)" },
          { value: "WB", label: "Winstbelasting (Profit Tax)" },
          { value: "OB", label: "Omzetbelasting (Sales Tax/Turnover Tax)" },
          { value: "OZB", label: "Onroerendezaakbelasting (Real Estate Tax)" },
          { value: "DB", label: "Dividendbelasting (Dividend Tax)" },
          {
            value: "SV",
            label:
              "Sociale Verzekeringspremies (Social Security Contributions)",
          },
          { value: "ZB", label: "Zegelbelasting (Stamp Duty)" },
          { value: "OTHER", label: "Overige Belastingen (Other Taxes)" },
        ]}
        isClearable={true}
        value={selectedValues.select2}
        onChange={(value: any) => handleChange(value, "select2")}
        placeholder="Tax Type"
        className="mb-4"
      />

      <Select
        styles={customStyles}
        options={[
          { value: "LV", label: "Landsverordening (National Ordinance)" },
          { value: "LB", label: "Landsbesluit (National Decree)" },
          {
            value: "MR",
            label: "Ministeriële regeling (Ministerial Regulation)",
          },
          {
            value: "AB",
            label:
              "Aanschrijvingen/Beleidsregels (Circulars/Policy Guidelines)",
          },
          { value: "CR", label: "Rechtspraak (Court Rulings)" },
        ]}
        isClearable={true}
        value={selectedValues.select3}
        onChange={(value: any) => handleChange(value, "select3")}
        placeholder="Legal Instrument Type"
        className="mb-4"
      />

      <Select
        styles={customStyles}
        options={[
          {
            value: "FORM",
            label: "Formeel Belastingrecht (Fiscal Procedures)",
          },
          {
            value: "FAC",
            label: "Belastingfaciliteiten (Tax Facilities/Exemptions)",
          },
          { value: "BASE", label: "Heffingsmaatstaf (Taxable Base)" },
          {
            value: "CASH",
            label:
              "Fiscale kasregistratiesystemen (Fiscal Cash Register Systems)",
          },
          {
            value: "PRES",
            label: "Vereisten reële aanwezigheid (Real Presence Requirements)",
          },
          { value: "PRICE", label: "Verrekenprijzen (Transfer Pricing)" },
          { value: "TON", label: "Tonnageregeling (Tonnage Regulation)" },
          { value: "AUD", label: "Boekenonderzoeken (Tax Audits)" },
          { value: "APP", label: "Bezwaar en beroep (Appeals and Objections)" },
        ]}
        isClearable={true}
        value={selectedValues.select4}
        onChange={(value: any) => handleChange(value, "select4")}
        placeholder="Topic/Subject Matter"
      />
    </div>
  );
};
