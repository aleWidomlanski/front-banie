export const metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

import styles from "./RootLayout.module.scss";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={styles.body}>{children}</body>
        </html>
    );
}
