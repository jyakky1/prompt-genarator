import { createContext } from "react";

export interface StyleContextType {
  key: string;
  css: string;
}

export const ServerStyleContext = createContext<StyleContextType[] | null>(
  null
);
export const ClientStyleContext = createContext<StyleContextType[] | null>(
  null
);
