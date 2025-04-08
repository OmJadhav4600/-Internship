import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

// Patient Class
class Patient {
    String name, gender, contact, address, medicalHistory, admissionDate;
    int age;

    public Patient(String name, int age, String gender, String contact, String address, String medicalHistory, String admissionDate) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.contact = contact;
        this.address = address;
        this.medicalHistory = medicalHistory;
        this.admissionDate = admissionDate;
    }

    @Override
    public String toString() {
        return "Patient Name: " + name + ", Age: " + age + ", Gender: " + gender + ", Contact: " + contact + ", Address: " + address;
    }

    public String getPatientDetails() {
	        return "Name: " + name + "\nAge: " + age + "\nGender: " + gender + "\nContact: " + contact + "\nAddress: " + address +
	                "\nMedical History: " + medicalHistory + "\nAdmission Date: " + admissionDate;
    }

}

// Staff Class
class Staff {
    String name, gender, contact, role, department;
    int age;

    public Staff(String name, int age, String gender, String contact, String role, String department) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.contact = contact;
        this.role = role;
        this.department = department;
    }

    @Override
    public String toString() {
        return "Staff Name: " + name + ", Role: " + role + ", Department: " + department;
    }
}

// Appointment Class
class Appointment {
    String patientName, doctorName, dateTime, reason;

    public Appointment(String patientName, String doctorName, String dateTime, String reason) {
        this.patientName = patientName;
        this.doctorName = doctorName;
        this.dateTime = dateTime;
        this.reason = reason;
    }

    @Override
    public String toString() {
        return "Appointment with Dr. " + doctorName + " for " + patientName + " on " + dateTime + " for " + reason;
    }
}

// Bill Class
class Bill {
    String patientName;
    double consultationFee, roomCharges, serviceCharges;

    public Bill(String patientName, double consultationFee, double roomCharges, double serviceCharges) {
        this.patientName = patientName;
        this.consultationFee = consultationFee;
        this.roomCharges = roomCharges;
        this.serviceCharges = serviceCharges;
    }

    @Override
    public String toString() {
        return "Bill for " + patientName + ": Consultation Fee = " + consultationFee + ", Room Charges = " + roomCharges + ", Service Charges = " + serviceCharges;
    }
}

// Person Class (Main)
public class Person {

    private static final Scanner scanner = new Scanner(System.in);
    private static final List<Patient> patients = new ArrayList<>();
    private static final List<Staff> staffMembers = new ArrayList<>();
    private static final List<Appointment> appointments = new ArrayList<>();
    private static final List<Bill> bills = new ArrayList<>();

    public static void main(String[] args) {
        while (true) {
            System.out.println("\n\nHospital Management System");
            System.out.println("1. Add Patient");
            System.out.println("2. Add Staff Member");
            System.out.println("3. Schedule Appointment");
            System.out.println("4. View Appointments");
            System.out.println("5. Generate Bill");
            System.out.println("6. View Bills");
             System.out.println("7. View Patient Details");
            System.out.println("8. Exit");
            System.out.print("\nEnter your choice:");

            int choice = scanner.nextInt();
            scanner.nextLine(); // Clear buffer

            switch (choice) {
                case 1:
                    addPatient();
                    break;
                case 2:
                    addStaffMember();
                    break;
                case 3:
                    scheduleAppointment();
                    break;
                case 4:
                    viewAppointments();
                    break;
                case 5:
                    generateBill();
                    break;
                case 6:
                    viewBills();
                    break;
                    case 7:
					viewPatientDetails();
                    break;
                case 8:
                    System.out.println("Exiting the system. Goodbye! /n");
                    return;
                default:
                    System.out.println("Invalid option! Please try again.");
            }
        }
    }

    private static void addPatient() {
        System.out.print("Name: ");
        String name = scanner.nextLine();
        System.out.print("Age: ");
        int age = scanner.nextInt();
        scanner.nextLine(); // Clear buffer
        System.out.print("Gender: ");
        String gender = scanner.nextLine();
        System.out.print("Contact Number: ");
        String contact = scanner.nextLine();
        System.out.print("Address: ");
        String address = scanner.nextLine();
        System.out.print("Medical History: ");
        String medicalHistory = scanner.nextLine();
        System.out.print("Admission Date (dd/mm/yyyy): ");
        String admissionDate = scanner.nextLine();

        Patient patient = new Patient(name, age, gender, contact, address, medicalHistory, admissionDate);
        patients.add(patient);
        System.out.println("Patient added successfully!");
    }

    private static void addStaffMember() {
        System.out.print("Name: ");
        String name = scanner.nextLine();
        System.out.print("Age: ");
        int age = scanner.nextInt();
        scanner.nextLine(); // Clear buffer
        System.out.print("Gender: ");
        String gender = scanner.nextLine();
        System.out.print("Contact Number: ");
        String contact = scanner.nextLine();
        System.out.print("Role: ");
        String role = scanner.nextLine();
        System.out.print("Department: ");
        String department = scanner.nextLine();

        Staff staff = new Staff(name, age, gender, contact, role, department);
        staffMembers.add(staff);
        System.out.println("Staff member added successfully!");
    }

    private static void scheduleAppointment() {
        System.out.print("Patient Name: ");
        String patientName = scanner.nextLine();
        System.out.print("Doctor Name: ");
        String doctorName = scanner.nextLine();
        System.out.print("Date and Time (dd/mm/yyyy hh:mm): ");
        String dateTime = scanner.nextLine();
        System.out.print("Reason for Appointment: ");
        String reason = scanner.nextLine();

        Appointment appointment = new Appointment(patientName, doctorName, dateTime, reason);
        appointments.add(appointment);
        System.out.println("Appointment scheduled successfully!");
    }

    private static void viewAppointments() {
        if (appointments.isEmpty()) {
            System.out.println("No appointments scheduled.");
        } else {
            appointments.forEach(System.out::println);
        }
    }

    private static void generateBill() {
        System.out.print("Patient Name: ");
        String patientName = scanner.nextLine();
        System.out.print("Consultation Fee: ");
        double consultationFee = scanner.nextDouble();
        System.out.print("Room Charges: ");
        double roomCharges = scanner.nextDouble();
        System.out.print("Service Charges: ");
        double serviceCharges = scanner.nextDouble();
        scanner.nextLine(); // Clear buffer

        Bill bill = new Bill(patientName, consultationFee, roomCharges, serviceCharges);
        bills.add(bill);
        System.out.println("Bill generated successfully!");
    }

    private static void viewBills() {
        if (bills.isEmpty()) {
            System.out.println("No bills available.");
        } else {
            bills.forEach(System.out::println);
        }
    }
      private static void viewPatientDetails() {
	        if (patients.isEmpty()) {
	            System.out.println("No patients available.");
	        } else {
	            System.out.println("Patient Details:");
	            patients.forEach(patient -> System.out.println(patient.getPatientDetails()));
	        }
    }
}
