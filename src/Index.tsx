import { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";
import { Dashboard } from "@/components/pages/Dashboard";
import { Scanner } from "@/components/pages/Scanner";
import { Books } from "@/components/pages/Books";
import { Students } from "@/components/pages/Students";
import { Transactions } from "@/components/pages/Transactions";

const Index = () => {
  const [activePage, setActivePage] = useState("dashboard");
  const [pageTitle, setPageTitle] = useState("Dashboard");

  const handlePageChange = (page: string, title: string) => {
    setActivePage(page);
    setPageTitle(title);
  };

  const renderPage = () => {
    switch (activePage) {
      case "dashboard":
        return <Dashboard />;
      case "scanner":
        return <Scanner />;
      case "books":
        return <Books />;
      case "students":
        return <Students />;
      case "transactions":
        return <Transactions />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex min-h-screen bg-[#0a0a0a]">
      <Sidebar activePage={activePage} onPageChange={handlePageChange} />
      <main className="flex-1 ml-60">
        <Header title={pageTitle} />
        <div className="p-8">{renderPage()}</div>
      </main>
    </div>
  );
};

export default Index;
