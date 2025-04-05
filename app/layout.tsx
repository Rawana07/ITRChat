export const metadata = {
  title: 'ITR Chatbot',
  description: 'File your ITR easily with our chatbot',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
