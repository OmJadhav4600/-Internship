import java.io.*;
import java.util.*;

class Library {
    private static final String FILE_NAME = "books.txt";
    private List<Book> books = new ArrayList<>();

    public Library() {
        loadBooksFromFile();
    }

    // Load books from file
    private void loadBooksFromFile() {
        try (ObjectInputStream ois = new ObjectInputStream(new FileInputStream(FILE_NAME))) {
            books = (List<Book>) ois.readObject();
        } catch (FileNotFoundException e) {
            System.out.println("No books found. Starting fresh...");
        } catch (IOException | ClassNotFoundException e) {
            System.out.println("Error loading books: " + e.getMessage());
        }
    }

    // Save books to file
    private void saveBooksToFile() {
        try (ObjectOutputStream oos = new ObjectOutputStream(new FileOutputStream(FILE_NAME))) {
            oos.writeObject(books);
        } catch (IOException e) {
            System.out.println("Error saving books: " + e.getMessage());
        }
    }

    // Add book
    public void addBook(Book book) {
        books.add(book);
        saveBooksToFile();
        System.out.println("Book added successfully!");
    }

    // Remove book
    public void removeBook(int bookId) {
        books.removeIf(book -> book.getBookId() == bookId);
        saveBooksToFile();
        System.out.println("Book removed successfully!");
    }

    // Display books
    public void displayBooks() {
        if (books.isEmpty()) {
            System.out.println("No books available.");
            return;
        }
        System.out.println("Book ID | Title | Author | Quantity");
        for (Book book : books) {
            System.out.println(book);
        }
    }

    // Borrow book
    public boolean borrowBook(int bookId) {
        for (Book book : books) {
            if (book.getBookId() == bookId && book.getQuantity() > 0) {
                book.setQuantity(book.getQuantity() - 1);
                saveBooksToFile();
                return true;
            }
        }
        return false;
    }

    // Return book
    public void returnBook(int bookId) {
        for (Book book : books) {
            if (book.getBookId() == bookId) {
                book.setQuantity(book.getQuantity() + 1);
                saveBooksToFile();
                return;
            }
        }
        System.out.println("Book ID not found!");
    }
}
