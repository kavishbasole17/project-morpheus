import { useLibrary } from "@/contexts/LibraryContext";

export const Dashboard = () => {
  const { books, students, transactions } = useLibrary();
  
  const issuedBooks = books.filter((b) => b.status === "issued").length;
  const totalFines = students.reduce((sum, s) => {
    const fineAmount = parseInt(s.fines.replace("₹", "")) || 0;
    return sum + fineAmount;
  }, 0);

  const stats = [
    { label: "Total Books", value: books.length.toString(), color: "text-[#3b82f6]" },
    { label: "Issued Books", value: issuedBooks.toString(), color: "text-[#f59e0b]" },
    { label: "Overdue", value: "0", color: "text-[#ef4444]" },
    { label: "Fines Collected", value: `₹${totalFines}`, color: "text-[#10b981]" },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-[#141414] border border-[#2a2a2a] rounded-lg p-6"
          >
            <div className="text-sm text-[#a3a3a3] mb-2">{stat.label}</div>
            <div className={`text-3xl font-semibold ${stat.color}`}>
              {stat.value}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-[#141414] border border-[#2a2a2a] rounded-lg p-6">
        <h2 className="text-lg font-semibold text-white mb-4">
          Recent Activity
        </h2>
        <div className="space-y-3">
          {transactions.length === 0 ? (
            <div className="text-sm text-[#a3a3a3] py-3">No recent activity</div>
          ) : (
            transactions.slice(0, 5).map((transaction) => (
              <div
                key={transaction.id}
                className="flex items-center justify-between py-3 border-b border-[#2a2a2a] last:border-0"
              >
                <div>
                  <div className="text-sm text-white">
                    Book {transaction.type === "issue" ? "Issued" : "Returned"}
                  </div>
                  <div className="text-xs text-[#a3a3a3]">
                    "{transaction.bookTitle}" {transaction.type === "issue" ? "to" : "from"} Student ID: {transaction.studentId}
                  </div>
                </div>
                <div className="text-xs text-[#a3a3a3]">
                  {new Date(transaction.timestamp).toLocaleTimeString()}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
