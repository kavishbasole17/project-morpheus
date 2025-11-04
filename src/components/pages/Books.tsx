import { useState } from "react";
import { useLibrary } from "@/contexts/LibraryContext";

export const Books = () => {
  const { books } = useLibrary();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBooks = books.filter(
    (book) =>
      book.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getStatusDisplay = (status: string) => {
    return status.charAt(0).toUpperCase() + status.slice(1);
  };

  return (
    <div className="space-y-6">
      <div className="bg-[#141414] border border-[#2a2a2a] rounded-lg p-6">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search books by ID, title, or author..."
          className="w-full px-4 py-2.5 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg text-white placeholder:text-[#666666] focus:outline-none focus:border-[#3b82f6]"
        />
      </div>

      <div className="bg-[#141414] border border-[#2a2a2a] rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-[#1a1a1a] border-b border-[#2a2a2a]">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-medium text-[#a3a3a3]">
                Book ID
              </th>
              <th className="px-6 py-4 text-left text-sm font-medium text-[#a3a3a3]">
                Title
              </th>
              <th className="px-6 py-4 text-left text-sm font-medium text-[#a3a3a3]">
                Author
              </th>
              <th className="px-6 py-4 text-left text-sm font-medium text-[#a3a3a3]">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredBooks.map((book) => (
              <tr key={book.id} className="border-b border-[#2a2a2a] last:border-0">
                <td className="px-6 py-4 text-sm text-white">{book.id}</td>
                <td className="px-6 py-4 text-sm text-white">{book.title}</td>
                <td className="px-6 py-4 text-sm text-[#a3a3a3]">{book.author}</td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-flex px-2.5 py-1 text-xs font-medium rounded-full ${
                      book.status === "available"
                        ? "bg-[#10b981]/10 text-[#10b981]"
                        : "bg-[#f59e0b]/10 text-[#f59e0b]"
                    }`}
                  >
                    {getStatusDisplay(book.status)}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
