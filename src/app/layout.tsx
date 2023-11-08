export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

import { InputProvider } from "@/context/input";
import { Navbar } from "@/components/molecules";
import styles from "./RootLayout.module.scss";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* Acordate q el input provider no iba.  */}
      <InputProvider>
        <body className={styles.body}>
          <Navbar />
          {children}
        </body>
      </InputProvider>
    </html>
  );
}
