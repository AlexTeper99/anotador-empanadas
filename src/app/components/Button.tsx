"use client";
import React, { useState } from "react";
import { CreateOrder } from "../lib/actions";

export const Button = () => {
  let action = async () => {
    const res = await CreateOrder();
  };
  return <button onClick={() => action()}>click</button>;
};
