import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rika | Civil Engineer",
  description: "Civil engineering portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
