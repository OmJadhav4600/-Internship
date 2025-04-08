import java.util.Scanner;

class Student {
    private Library library;
    private Scanner scanner;

    public Student(Library library) {
        this.library = library;
        this.scanner = new Scanner(System.in);
    }

    public void studentMenu() {
        while (true) {
            System.out.println("\nStudent Menu:");
            System.out.println("1. View Books");
            System.out.println("2. Borrow Book");
            System.out.println("3. Return Book");
            System.out.println("4. Exit");

            int choice = scanner.nextInt();
            scanner.nextLine();

            switch (choice) {
                case 1:
                    library.displayBooks();
                    break;
                case 2:
                    borrowBook();
                    break;
                case 3:
                    returnBook();
                    break;
                case 4:
                    return;
                default:
                    System.out.println("Invalid choice. Try again.");
            }
        }
    }

    private void borrowBook() {
        System.out.print("Enter Book ID to borrow: ");
        int id = scanner.nextInt();
        if (library.borrowBook(id)) {
            System.out.println("Book borrowed successfully!");
        } else {
            System.out.println("Book not available.");
        }
    }

    private void returnBook() {
        System.out.print("Enter Book ID to return: ");
        int id = scanner.nextInt();
        library.returnBook(id);
        System.out.println("Book returned successfully!");
    }
}
