import { createContext, useContext, useState } from "react";

const ItemContext = createContext();

export default function ItemProvider({ children }) {
  return <ItemContext.Provider value={{}}>{children}</ItemContext.Provider>;
}

export const useItemState = () => {
  return useContext(ItemContext);
};
