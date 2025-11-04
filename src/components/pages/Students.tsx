import { useState } from "react";
import { useLibrary } from "@/contexts/LibraryContext";

export const Students = () => {
  const { students } = useLibrary();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredStudents = students.filter(
    (student) =>
      student.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="bg-[#141414] border border-[#2a2a2a] rounded-lg p-6">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search students by ID or name..."
          className="w-full px-4 py-2.5 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg text-white placeholder:text-[#666666] focus:outline-none focus:border-[#3b82f6]"
        />
      </div>

      <div className="bg-[#141414] border border-[#2a2a2a] rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-[#1a1a1a] border-b border-[#2a2a2a]">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-medium text-[#a3a3a3]">
                Student ID
              </th>
              <th className="px-6 py-4 text-left text-sm font-medium text-[#a3a3a3]">
                Name
              </th>
              <th className="px-6 py-4 text-left text-sm font-medium text-[#a3a3a3]">
                Books Issued
              </th>
              <th className="px-6 py-4 text-left text-sm font-medium text-[#a3a3a3]">
                Fines
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map((student) => (
              <tr key={student.id} className="border-b border-[#2a2a2a] last:border-0">
                <td className="px-6 py-4 text-sm text-white">{student.id}</td>
                <td className="px-6 py-4 text-sm text-white">{student.name}</td>
                <td className="px-6 py-4 text-sm text-[#a3a3a3]">{student.books}</td>
                <td className="px-6 py-4">
                  <span
                    className={`text-sm ${
                      student.fines === "₹0" ? "text-[#10b981]" : "text-[#ef4444]"
                    }`}
                  >
                    {student.fines}
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
