# React + Typescript Application - Personal Library Manager

**Requirements:**

- SWR: ✅
- Axios: ✅
- Formik: ✅
- MUI: ✅

**Steps:**

1. **Clone the Project**

2. **Install dependencies running:**
### `npm install`

3. **Start the Node.js server - it will run on 3001 port**
4. **Start the React App:**
### `npm run start`

**Usage**:
Initially, the user will be redirected to the Book List page, and the list will be empty.
To add new books, use the Add Book button. After adding a book, you'll be redirected to the Book List.
Once at least one book is added, you can edit, view, or delete a book.

Book Operations:
- *Edit Book*:
Click on the edit icon, redirecting you to a form with book details. You can edit any field.
- *View Book*:
Similar to editing, but the book details will be read-only.
- *Delete Book*:
When deleting a book, a confirmation dialog will ensure you want to proceed.

**Technical Details**:
The application uses global state management for books.
If a user attempts to directly edit or view a book, they will be redirected to the Book List. This approach is chosen due to the server not having a method that returns a single book.








