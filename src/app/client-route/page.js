"use client";

import React from "react";

import { serverSideFunction } from "@/utils/server-utils";

function ClientRoute() {
  console.log(serverSideFunction());

  return <div>This is Client Route</div>;
}

export default ClientRoute;
