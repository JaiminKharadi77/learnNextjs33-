"use client";

import { useState } from "react";

function ClientDashBoardPage() {
  const [name, setName] = useState("");

  return (
    <div>
      <h1>This is client-dashboard Page</h1>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <p>Hello, {name}</p>
    </div>
  );
}

export default ClientDashBoardPage;
