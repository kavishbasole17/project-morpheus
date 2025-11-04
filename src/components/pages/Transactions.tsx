import { useLibrary } from "@/contexts/LibraryContext";

export const Transactions = () => {
  const { transactions } = useLibrary();

  return (
    <div className="space-y-6">
      <div className="bg-[#141414] border border-[#2a2a2a] rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-[#1a1a1a] border-b border-[#2a2a2a]">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-medium text-[#a3a3a3]">
                Transaction ID
              </th>
              <th className="px-6 py-4 text-left text-sm font-medium text-[#a3a3a3]">
                Type
              </th>
              <th className="px-6 py-4 text-left text-sm font-medium text-[#a3a3a3]">
                Book
              </th>
              <th className="px-6 py-4 text-left text-sm font-medium text-[#a3a3a3]">
                Student ID
              </th>
              <th className="px-6 py-4 text-left text-sm font-medium text-[#a3a3a3]">
                Timestamp
              </th>
            </tr>
          </thead>
          <tbody>
            {transactions.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-6 py-8 text-center text-sm text-[#a3a3a3]">
                  No transactions yet
                </td>
              </tr>
            ) : (
              transactions.map((transaction) => (
                <tr key={transaction.id} className="border-b border-[#2a2a2a] last:border-0">
                  <td className="px-6 py-4 text-sm text-white">{transaction.id}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        transaction.type === "issue"
                          ? "bg-[#f59e0b]/20 text-[#f59e0b]"
                          : "bg-[#10b981]/20 text-[#10b981]"
                      }`}
                    >
                      {transaction.type.charAt(0).toUpperCase() + transaction.type.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-white">
                    {transaction.bookTitle} ({transaction.bookId})
                  </td>
                  <td className="px-6 py-4 text-sm text-[#a3a3a3]">{transaction.studentId}</td>
                  <td className="px-6 py-4 text-sm text-[#a3a3a3]">
                    {new Date(transaction.timestamp).toLocaleString()}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
