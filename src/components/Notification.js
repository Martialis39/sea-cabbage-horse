import React, { useState, useEffect } from "react";

import { StyledNotification } from "./Notification.style";

function Notification({ message, setNotification }) {
  useEffect(() => {
    setTimeout(() => {
      setNotification(null);
    }, 2000);
  }, [setNotification]);
  return <StyledNotification>{message}</StyledNotification>;
}

export default Notification;
