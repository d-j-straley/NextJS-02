import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={'$(inter.className) antialiased'}>  {children}</body>
    </html>
  );
}
// This is a root layout for a Next.js application. It imports global CSS styles and wraps the children components in a root HTML structure. The lang attribute is set to "en" for English.
// This layout is used to provide a consistent structure and styling across all pages in the application. The children prop represents the content of each individual page, which will be rendered within the body of the HTML document.
// The layout is defined as a function component that takes a single prop, children, which is of type React.ReactNode. This allows for any valid React element to be passed as children, making the layout flexible and reusable across different pages in the Next.js application.
// The layout is exported as the default export of the module, making it available for use in other parts of the application. This is a common pattern in Next.js applications to create a consistent layout structure across different pages.