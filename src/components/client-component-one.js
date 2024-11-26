"use client";
import { useState } from "react";

export const ClientComponentOne = ({ children }) => {
  const [name, setName] = useState("Batman");
  return (
    <>
      <h1>ClientComponentOne</h1>
      {children}
    </>
  );
};
