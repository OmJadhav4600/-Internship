import java.util.Scanner;

class Admin {
    private Library library;
    private Scanner scanner;

    public Admin(Library library) {
        this.library = library;
        this.scanner = new Scanner(System.in);
    }

    public void adminMenu() {
        while (true) {
            System.out.println("\nAdmin Menu:");
            System.out.println("1. Add Book");
            System.out.println("2. Remove Book");
            System.out.println("3. View Books");
            System.out.println("4. Exit");

            int choice = scanner.nextInt();
            scanner.nextLine();

            switch (choice) {
                case 1:
                    addBook();
                    break;
                case 2:
                    removeBook();
                    break;
                case 3:
                    library.displayBooks();
                    break;
                case 4:
                    return;
                default:
                    System.out.println("Invalid choice. Try again.");
            }
        }
    }

    private void addBook() {
        System.out.print("Enter Book ID: ");
        int id = scanner.nextInt();
        scanner.nextLine();
        System.out.print("Enter Title: ");
        String title = scanner.nextLine();
        System.out.print("Enter Author: ");
        String author = scanner.nextLine();
        System.out.print("Enter Quantity: ");
        int quantity = scanner.nextInt();

        library.addBook(new Book(id, title, author, quantity));
    }

    private void removeBook() {
        System.out.print("Enter Book ID to remove: ");
        int id = scanner.nextInt();
        library.removeBook(id);
    }
}
