document.addEventListener('DOMContentLoaded', () => {

    const navLinks = document.querySelectorAll('.nav-link');
    const pages = document.querySelectorAll('.page');
    const pageTitle = document.getElementById('page-title');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const pageId = link.getAttribute('data-page');

            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');

            pages.forEach(p => p.classList.remove('active'));
            document.getElementById(pageId).classList.add('active');

            pageTitle.textContent = link.textContent;
        });
    });

    const issueForm = document.getElementById('issue-form');
    const returnForm = document.getElementById('return-form');
    const issueMessage = document.getElementById('issue-message');
    const returnMessage = document.getElementById('return-message');

    const showMessage = (element, message, type = 'success') => {
        element.innerHTML = `<div class="message message-${type}">${message}</div>`;
        setTimeout(() => {
            element.innerHTML = '';
        }, 3000);
    };

    issueForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const studentId = document.getElementById('student-id').value;
        const bookId = document.getElementById('book-id').value;
        
        if (studentId && bookId) {
            showMessage(issueMessage, `Successfully issued Book ID: ${bookId} to Student ID: ${studentId}.`);
            issueForm.reset();
        } else {
             showMessage(issueMessage, 'Please fill in all fields.', 'error');
        }
    });

    returnForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const bookId = document.getElementById('return-book-id').value;
        
         if (bookId) {
            showMessage(returnMessage, `Book ID: ${bookId} has been successfully returned.`);
            returnForm.reset();
        } else {
             showMessage(returnMessage, 'Please enter a Book ID.', 'error');
        }
    });

    const setupTableSearch = (inputId, tableBodyId) => {
        const searchInput = document.getElementById(inputId);
        const tableBody = document.getElementById(tableBodyId);
        const tableRows = tableBody.getElementsByTagName('tr');

        searchInput.addEventListener('keyup', () => {
            const searchTerm = searchInput.value.toLowerCase();
            Array.from(tableRows).forEach(row => {
                const rowText = row.textContent.toLowerCase();
                row.style.display = rowText.includes(searchTerm) ? '' : 'none';
            });
        });
    };

    setupTableSearch('book-search', 'books-table-body');
    setupTableSearch('student-search', 'students-table-body');
    setupTableSearch('transaction-search', 'transactions-table-body');

});

function switchTab(tabName, clickedButton) {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => button.classList.remove('active'));
    clickedButton.classList.add('active');

    tabContents.forEach(content => content.classList.remove('active'));
    document.getElementById(`${tabName}-content`).classList.add('active');
}

function refreshData() {
    alert("Data refreshed!");
}