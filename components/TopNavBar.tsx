import React from "react";
import { UserNav } from "./ui/UserNav";

type Props = {};

export default function TopNavBar({}: Props) {
  return (
    <>
      <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Welcome back!</h2>
          </div>
          <div className="flex items-center space-x-2">
            <UserNav />
          </div>
        </div>
      </div>
    </>
  );
}
