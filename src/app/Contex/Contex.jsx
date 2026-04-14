"use client";

import { createContext, useState } from "react";

export const TimelineContext = createContext();

const ContextProvider = ({ children }) => {
  const [call, setCall] = useState([]);
  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useState();

  const data = {
    call,
    setCall,
    open,
    setOpen,
    filter,
    setFilter
  }

  return (
    <TimelineContext.Provider value={ data }>
      {children}
    </TimelineContext.Provider>
  );
};

export default ContextProvider;