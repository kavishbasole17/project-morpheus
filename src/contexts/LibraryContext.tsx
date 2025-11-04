import { createContext, useContext, useState, ReactNode } from "react";

interface Book {
  id: string;
  title: string;
  author: string;
  status: "available" | "issued";
  issuedTo?: string;
}

interface Student {
  id: string;
  name: string;
  books: number;
  fines: string;
}

interface Transaction {
  id: string;
  type: "issue" | "return";
  bookId: string;
  bookTitle: string;
  studentId: string;
  timestamp: Date;
}

interface LibraryContextType {
  books: Book[];
  students: Student[];
  transactions: Transaction[];
  issueBook: (studentId: string, bookId: string) => boolean;
  returnBook: (studentId: string, bookId: string) => boolean;
}

const LibraryContext = createContext<LibraryContextType | undefined>(undefined);

const initialBooks: Book[] = [
  { id: "B001", title: "Clean Code", author: "Robert C. Martin", status: "available" },
  { id: "B002", title: "Design Patterns", author: "Gang of Four", status: "available" },
  { id: "B003", title: "The Pragmatic Programmer", author: "Hunt & Thomas", status: "available" },
  { id: "B004", title: "Refactoring", author: "Martin Fowler", status: "available" },
];

const initialStudents: Student[] = [
  { id: "23BCE8242", name: "Mitesh Sai Devar", books: 0, fines: "₹0" },
  { id: "23BCE8527", name: "Sashank Solasa", books: 0, fines: "₹0" },
  { id: "23BCE8532", name: "Arsheen Inamdar", books: 0, fines: "₹50" },
  { id: "23BCE8534", name: "Kavish Basole", books: 0, fines: "₹0" },
  { id: "23BCE8558", name: "Navya Sivadas", books: 0, fines: "₹0" },
  { id: "23BCE8786", name: "Aakanksha Sai Sri", books: 0, fines: "₹25" },
];

export function LibraryProvider({ children }: { children: ReactNode }) {
  const [books, setBooks] = useState<Book[]>(initialBooks);
  const [students, setStudents] = useState<Student[]>(initialStudents);
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const issueBook = (studentId: string, bookId: string): boolean => {
    const book = books.find((b) => b.id === bookId);
    const student = students.find((s) => s.id === studentId);

    if (!book || !student) return false;
    if (book.status === "issued") return false;

    setBooks((prev) =>
      prev.map((b) =>
        b.id === bookId ? { ...b, status: "issued", issuedTo: studentId } : b
      )
    );

    setStudents((prev) =>
      prev.map((s) =>
        s.id === studentId ? { ...s, books: s.books + 1 } : s
      )
    );

    setTransactions((prev) => [
      {
        id: `T${Date.now()}`,
        type: "issue",
        bookId,
        bookTitle: book.title,
        studentId,
        timestamp: new Date(),
      },
      ...prev,
    ]);

    return true;
  };

  const returnBook = (studentId: string, bookId: string): boolean => {
    const book = books.find((b) => b.id === bookId);
    const student = students.find((s) => s.id === studentId);

    if (!book || !student) return false;
    if (book.status === "available") return false;
    if (book.issuedTo !== studentId) return false;

    setBooks((prev) =>
      prev.map((b) =>
        b.id === bookId ? { ...b, status: "available", issuedTo: undefined } : b
      )
    );

    setStudents((prev) =>
      prev.map((s) =>
        s.id === studentId ? { ...s, books: Math.max(0, s.books - 1) } : s
      )
    );

    setTransactions((prev) => [
      {
        id: `T${Date.now()}`,
        type: "return",
        bookId,
        bookTitle: book.title,
        studentId,
        timestamp: new Date(),
      },
      ...prev,
    ]);

    return true;
  };

  return (
    <LibraryContext.Provider
      value={{ books, students, transactions, issueBook, returnBook }}
    >
      {children}
    </LibraryContext.Provider>
  );
}

export function useLibrary() {
  const context = useContext(LibraryContext);
  if (!context) {
    throw new Error("useLibrary must be used within LibraryProvider");
  }
  return context;
}
