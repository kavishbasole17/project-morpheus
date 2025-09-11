--
-- PostgreSQL database dump
--

\restrict pWdEVebpmokRRcxbpIBZUPZxeHvxGO8dYR8nOcXlMkPnXEw8FqfgGNjpAdfPM4g

-- Dumped from database version 17.0
-- Dumped by pg_dump version 17.6 (Homebrew)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: books; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.books (
    book_id integer NOT NULL,
    title character varying(200) NOT NULL,
    author character varying(100),
    isbn character varying(20),
    available boolean DEFAULT true
);


ALTER TABLE public.books OWNER TO postgres;

--
-- Name: books_book_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.books_book_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.books_book_id_seq OWNER TO postgres;

--
-- Name: books_book_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.books_book_id_seq OWNED BY public.books.book_id;


--
-- Name: students; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.students (
    student_id integer NOT NULL,
    name character varying(100) NOT NULL,
    roll_no character varying(50) NOT NULL,
    email character varying(100),
    phone character varying(15)
);


ALTER TABLE public.students OWNER TO postgres;

--
-- Name: students_student_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.students_student_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.students_student_id_seq OWNER TO postgres;

--
-- Name: students_student_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.students_student_id_seq OWNED BY public.students.student_id;


--
-- Name: transactions; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.transactions (
    txn_id integer NOT NULL,
    student_id integer,
    book_id integer,
    issue_date timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    return_date timestamp without time zone,
    fine numeric(5,2) DEFAULT 0.00,
    status character varying(20) DEFAULT 'issued'::character varying
);


ALTER TABLE public.transactions OWNER TO postgres;

--
-- Name: transactions_txn_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.transactions_txn_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.transactions_txn_id_seq OWNER TO postgres;

--
-- Name: transactions_txn_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.transactions_txn_id_seq OWNED BY public.transactions.txn_id;


--
-- Name: books book_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.books ALTER COLUMN book_id SET DEFAULT nextval('public.books_book_id_seq'::regclass);


--
-- Name: students student_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.students ALTER COLUMN student_id SET DEFAULT nextval('public.students_student_id_seq'::regclass);


--
-- Name: transactions txn_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.transactions ALTER COLUMN txn_id SET DEFAULT nextval('public.transactions_txn_id_seq'::regclass);


--
-- Data for Name: books; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.books (book_id, title, author, isbn, available) FROM stdin;
1	Introduction to Algorithms	Thomas H. Cormen	9780262033848	t
2	Database System Concepts	Abraham Silberschatz	9780078022159	t
3	Computer Networks	Andrew S. Tanenbaum	9780132126953	t
4	Operating System Concepts	Silberschatz & Galvin	9781119320913	t
5	Artificial Intelligence: A Modern Approach	Stuart Russell	9780136042594	t
6	Clean Code	Robert C. Martin	9780132350884	t
7	Design Patterns	Erich Gamma	9780201633610	t
8	Modern Operating Systems	Andrew S. Tanenbaum	9780133591620	t
9	Deep Learning	Ian Goodfellow	9780262035613	t
10	Python Crash Course	Eric Matthes	9781593279288	t
11	Computer Organization and Design	David A. Patterson	9780128122754	t
12	Compilers: Principles, Techniques, and Tools	Alfred V. Aho	9780321486813	t
13	Programming Pearls	Jon Bentley	9780201657882	t
14	Data Mining Concepts and Techniques	Jiawei Han	9780123814791	t
15	Reinforcement Learning: An Introduction	Richard Sutton	9780262039246	t
16	Cryptography and Network Security	William Stallings	9780134444284	t
17	Distributed Systems	Maarten van Steen	9781543057386	t
18	Introduction to Machine Learning	Ethem Alpaydin	9780262028189	t
19	Algorithms Unlocked	Thomas H. Cormen	9780262518802	t
20	Fluent Python	Luciano Ramalho	9781491946008	t
\.


--
-- Data for Name: students; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.students (student_id, name, roll_no, email, phone) FROM stdin;
1	Sashank Solasa	23BCE8527	sashank@example.com	9876543210
2	Navya Sivadas	23BCE8558	navya@example.com	9876501234
3	Kavish Basole	23BCE8534	kavish@example.com	9876512345
4	Arsheen Inamdar	23BCE8532	arsheen@example.com	9876523456
5	Mitesh Sai Devar	23BCE8242	mitesh@example.com	9876534567
6	Aakanksha Sai Sri	23BCE8768	aakanksha@example.com	9876545678
7	Rohit Kumar	23BCE8601	rohit@example.com	9876556789
8	Sneha Reddy	23BCE8602	sneha@example.com	9876567890
9	Aditya Verma	23BCE8603	aditya@example.com	9876578901
10	Meera Nair	23BCE8604	meera@example.com	9876589012
11	Rahul Sharma	23BCE8605	rahul@example.com	9876590123
12	Divya Iyer	23BCE8606	divya@example.com	9876601234
13	Arjun Singh	23BCE8607	arjun@example.com	9876612345
14	Pooja Patel	23BCE8608	pooja@example.com	9876623456
15	Vikram Rao	23BCE8609	vikram@example.com	9876634567
16	Ananya Gupta	23BCE8610	ananya@example.com	9876645678
17	Nikhil Jain	23BCE8611	nikhil@example.com	9876656789
18	Priya Menon	23BCE8612	priya@example.com	9876667890
19	Sameer Khan	23BCE8613	sameer@example.com	9876678901
20	Kiran Das	23BCE8614	kiran@example.com	9876689012
\.


--
-- Data for Name: transactions; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.transactions (txn_id, student_id, book_id, issue_date, return_date, fine, status) FROM stdin;
1	1	1	2025-09-09 23:41:10.67097	\N	0.00	issued
2	2	2	2025-09-09 23:41:10.67097	\N	0.00	issued
3	3	3	2025-09-09 23:41:10.67097	\N	0.00	issued
4	4	4	2025-09-09 23:41:10.67097	\N	0.00	issued
5	5	5	2025-09-09 23:41:10.67097	\N	0.00	returned
6	6	6	2025-09-09 23:41:10.67097	\N	0.00	issued
7	7	7	2025-09-09 23:41:10.67097	\N	0.00	issued
8	8	8	2025-09-09 23:41:10.67097	\N	0.00	returned
9	9	9	2025-09-09 23:41:10.67097	\N	0.00	issued
10	10	10	2025-09-09 23:41:10.67097	\N	0.00	issued
\.


--
-- Name: books_book_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.books_book_id_seq', 1, false);


--
-- Name: students_student_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.students_student_id_seq', 1, false);


--
-- Name: transactions_txn_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.transactions_txn_id_seq', 1, false);


--
-- Name: books books_isbn_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.books
    ADD CONSTRAINT books_isbn_key UNIQUE (isbn);


--
-- Name: books books_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.books
    ADD CONSTRAINT books_pkey PRIMARY KEY (book_id);


--
-- Name: students students_email_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.students
    ADD CONSTRAINT students_email_key UNIQUE (email);


--
-- Name: students students_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.students
    ADD CONSTRAINT students_pkey PRIMARY KEY (student_id);


--
-- Name: students students_roll_no_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.students
    ADD CONSTRAINT students_roll_no_key UNIQUE (roll_no);


--
-- Name: transactions transactions_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.transactions
    ADD CONSTRAINT transactions_pkey PRIMARY KEY (txn_id);


--
-- Name: transactions transactions_book_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.transactions
    ADD CONSTRAINT transactions_book_id_fkey FOREIGN KEY (book_id) REFERENCES public.books(book_id) ON DELETE CASCADE;


--
-- Name: transactions transactions_student_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.transactions
    ADD CONSTRAINT transactions_student_id_fkey FOREIGN KEY (student_id) REFERENCES public.students(student_id) ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--

\unrestrict pWdEVebpmokRRcxbpIBZUPZxeHvxGO8dYR8nOcXlMkPnXEw8FqfgGNjpAdfPM4g

