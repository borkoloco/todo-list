// app/layout.tsx
"use client"; // Ensure this is a client component

import { Provider } from "react-redux";
import { store } from "../store/store"; // Path to your Redux store

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>{children}</Provider>
      </body>
    </html>
  );
}
