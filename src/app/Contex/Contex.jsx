"use client";

import { createContext, useState } from "react";

export const TimelineContext = createContext();

const ContextProvider = ({ children }) => {
  const [call, setCall] = useState([]);
  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useState();
  const [massage, setmassage] = useState([]);
  const [video, setvideo] = useState([]);
  const [phone, setphone] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);

  const data = {
    call,
    setCall,
    open,
    setOpen,
    filter,
    setFilter,
    massage,
    setmassage,
    video,
    setvideo,
    phone,
    setphone,
    activeIndex,
    setActiveIndex
  }

  return (
    <TimelineContext.Provider value={ data }>
      {children}
    </TimelineContext.Provider>
  );
};

export default ContextProvider;