import React from "react";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import axios from "axios";
import { changelogRenderer } from "@/components/utilsMarkdown";
import ReactMarkdown from "react-markdown";

export default function UserGuide() {
    // const baseUrl = window?.location.origin;
    // console.log({ baseUrl });

  const fetchDocumentation = async () => {
    const { data } = await axios.get("/api/documents/userGuide"); // Replace with the full URL if needed
    return data;
  };

  const { data, error, isLoading, isError } = useQuery({
    queryKey: ["documentation"],
    queryFn: fetchDocumentation,
  });

  // Queries
  //   const query = useQuery({ queryKey: ["todos"], queryFn: getTodos });

  return (
    <div className='mx-36 mt-10 p-10 bg-[#222] rounded'>
      <ReactMarkdown components={changelogRenderer} linkTarget="_blank">
        {data}
      </ReactMarkdown>
    </div>
  );
}
