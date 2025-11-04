interface HeaderProps {
  title: string;
}

export const Header = ({ title }: HeaderProps) => {
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <header className="border-b border-[#2a2a2a] bg-[#0a0a0a] px-8 py-5">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-white tracking-tight">
          {title}
        </h1>
        <button
          onClick={handleRefresh}
          className="px-4 py-2 text-sm font-medium text-[#a3a3a3] hover:text-white hover:bg-[#1a1a1a] rounded-lg transition-colors"
        >
          Refresh
        </button>
      </div>
    </header>
  );
};
