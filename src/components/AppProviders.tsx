"use client";

import { Children } from "@/types";
import React from "react";
import { RecoilRoot } from "recoil";

export default function AppProviders({ children }: Children) {
    return <RecoilRoot>{children}</RecoilRoot>;
}
