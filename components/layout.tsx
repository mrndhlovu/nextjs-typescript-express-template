import { ReactNode } from "react";

import { ThemeProvider } from "../helpers/providers";

import Header from "./header/Header";
import UIHead from "./header/UIHead";

export const siteTitle = "Trello clone";

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <ThemeProvider>
      <UIHead siteTitle={siteTitle} />
      <main>
        <Header />
        {children}
      </main>
    </ThemeProvider>
  );
}
