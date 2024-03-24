"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "@/app/_lib/theme";
import IdeasContext from "./context/ideas-context";
import { useEffect, useState } from "react";
import getIdeas from "./utils/getIdeas";
import { Idea } from "./types/ideas";

export function Providers({ children }: { children: React.ReactNode }) {
  const [ideas, setIdeas] = useState<Idea[] | null>(null);
  useEffect(() => {
    getIdeas().then((ideas) => setIdeas(ideas));
  }, []);

  return (
    <IdeasContext.Provider value={ideas}>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </IdeasContext.Provider>
  );
}
