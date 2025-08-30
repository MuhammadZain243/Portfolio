import './globals.css';

export const metadata = {
  title: 'Zain - Portfolio',
  description: 'Personal portfolio built with Next.js and Tailwind CSS',
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className="scroll-smooth"
      suppressHydrationWarning={true}
      data-qb-installed="true">
      <body
        className={`antialiased`}
        suppressHydrationWarning={true}
        data-qb-installed="true">
        {children}
      </body>
    </html>
  );
}
