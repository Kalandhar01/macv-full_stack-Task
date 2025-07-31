"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";



interface customThemeProviderProps 
extends React.ComponentProps<typeof NextThemesProvider> {
  children: React.ReactNode;
}



export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
