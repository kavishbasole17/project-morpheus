interface SidebarProps {
  activePage: string;
  onPageChange: (page: string, title: string) => void;
}

const navItems = [
  { id: "dashboard", label: "Dashboard" },
  { id: "scanner", label: "RFID Scanner" },
  { id: "books", label: "Books" },
  { id: "students", label: "Students" },
  { id: "transactions", label: "Transactions" },
];

export const Sidebar = ({ activePage, onPageChange }: SidebarProps) => {
  return (
    <nav className="fixed left-0 top-0 h-screen w-60 bg-[#111111] border-r border-[#2a2a2a] p-6">
      <div className="pb-6 mb-6 border-b border-[#2a2a2a]">
        <div className="text-lg font-semibold text-white tracking-tight">
          Library System
        </div>
      </div>
      <ul className="space-y-1">
        {navItems.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => onPageChange(item.id, item.label)}
              className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                activePage === item.id
                  ? "bg-[#3b82f6] text-white"
                  : "text-[#a3a3a3] hover:bg-[#1a1a1a] hover:text-white"
              }`}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
