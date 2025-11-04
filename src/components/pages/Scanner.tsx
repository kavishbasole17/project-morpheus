import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useLibrary } from "@/contexts/LibraryContext";

export const Scanner = () => {
  const { toast } = useToast();
  const { issueBook, returnBook } = useLibrary();
  const [issueStudentId, setIssueStudentId] = useState("");
  const [issueBookId, setIssueBookId] = useState("");
  const [returnStudentId, setReturnStudentId] = useState("");
  const [returnBookId, setReturnBookId] = useState("");

  const handleIssue = (e: React.FormEvent) => {
    e.preventDefault();
    if (issueStudentId && issueBookId) {
      const success = issueBook(issueStudentId, issueBookId);
      if (success) {
        toast({
          title: "Success",
          description: `Successfully issued Book ID: ${issueBookId} to Student ID: ${issueStudentId}`,
        });
        setIssueStudentId("");
        setIssueBookId("");
      } else {
        toast({
          title: "Error",
          description: "Book is already issued or invalid IDs",
          variant: "destructive",
        });
      }
    } else {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
    }
  };

  const handleReturn = (e: React.FormEvent) => {
    e.preventDefault();
    if (returnStudentId && returnBookId) {
      const success = returnBook(returnStudentId, returnBookId);
      if (success) {
        toast({
          title: "Success",
          description: `Successfully returned Book ID: ${returnBookId} from Student ID: ${returnStudentId}`,
        });
        setReturnStudentId("");
        setReturnBookId("");
      } else {
        toast({
          title: "Error",
          description: "Book is not issued to this student or invalid IDs",
          variant: "destructive",
        });
      }
    } else {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="bg-[#141414] border border-[#2a2a2a] rounded-lg p-6">
        <h2 className="text-lg font-semibold text-white mb-4">Issue Book</h2>
        <form onSubmit={handleIssue} className="space-y-4">
          <div>
            <label className="block text-sm text-[#a3a3a3] mb-2">
              Student ID
            </label>
            <input
              type="text"
              value={issueStudentId}
              onChange={(e) => setIssueStudentId(e.target.value)}
              placeholder="Scan student RFID card"
              className="w-full px-4 py-2.5 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg text-white placeholder:text-[#666666] focus:outline-none focus:border-[#3b82f6]"
            />
          </div>
          <div>
            <label className="block text-sm text-[#a3a3a3] mb-2">
              Book ID
            </label>
            <input
              type="text"
              value={issueBookId}
              onChange={(e) => setIssueBookId(e.target.value)}
              placeholder="Scan book RFID tag"
              className="w-full px-4 py-2.5 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg text-white placeholder:text-[#666666] focus:outline-none focus:border-[#3b82f6]"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2.5 bg-[#3b82f6] hover:bg-[#2563eb] text-white font-medium rounded-lg transition-colors"
          >
            Issue Book
          </button>
        </form>
      </div>

      <div className="bg-[#141414] border border-[#2a2a2a] rounded-lg p-6">
        <h2 className="text-lg font-semibold text-white mb-4">Return Book</h2>
        <form onSubmit={handleReturn} className="space-y-4">
          <div>
            <label className="block text-sm text-[#a3a3a3] mb-2">
              Student ID
            </label>
            <input
              type="text"
              value={returnStudentId}
              onChange={(e) => setReturnStudentId(e.target.value)}
              placeholder="Scan student RFID card"
              className="w-full px-4 py-2.5 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg text-white placeholder:text-[#666666] focus:outline-none focus:border-[#3b82f6]"
            />
          </div>
          <div>
            <label className="block text-sm text-[#a3a3a3] mb-2">
              Book ID
            </label>
            <input
              type="text"
              value={returnBookId}
              onChange={(e) => setReturnBookId(e.target.value)}
              placeholder="Scan book RFID tag"
              className="w-full px-4 py-2.5 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg text-white placeholder:text-[#666666] focus:outline-none focus:border-[#3b82f6]"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2.5 bg-[#10b981] hover:bg-[#059669] text-white font-medium rounded-lg transition-colors"
          >
            Return Book
          </button>
        </form>
      </div>
    </div>
  );
};
