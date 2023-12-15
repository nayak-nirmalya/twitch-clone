import { Navbar } from "./_components/navbar";
import { Sidebar } from "./_components/sidebar";

export default function BrowseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <div className="flex h-full pt-20">
        <Sidebar />
        {children}
      </div>
    </>
  );
}
