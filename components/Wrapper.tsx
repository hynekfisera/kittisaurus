import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function Wrapper({ children }: Props) {
  return <main className="md:bg-white md:border md:border-rose-400 w-screen max-w-screen-sm px-4 md:px-12 md:py-16 md:rounded-3xl flex flex-col items-center gap-5">{children}</main>;
}
