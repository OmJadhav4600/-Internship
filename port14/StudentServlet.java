package com.student.servlets;

import com.student.dao.Student;
import com.student.dao.StudentDAO;
import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/register")
public class StudentServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String name = request.getParameter("name");
        int age = Integer.parseInt(request.getParameter("age"));
        String email = request.getParameter("email");
        String course = request.getParameter("course");

        Student student = new Student(name, age, email, course);
        boolean result = StudentDAO.insertStudent(student);

        if (result) {
            response.getWriter().println("Student Registered Successfully!");
        } else {
            response.getWriter().println("Registration Failed!");
        }
    }
}
