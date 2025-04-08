// Import required modules
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const emailjs = require('emailjs-com');

// Initialize express app
const app = express();

// Serve static files like HTML, CSS, and JS
app.use(express.static('public'));

// Parse URL-encoded form data
app.use(bodyParser.urlencoded({ extended: true }));

// Initialize EmailJS with your user ID (replace with your actual user ID)
emailjs.init("IxFnOZTfypfSGKMQM");

// Endpoint to handle form submission
app.post('/submit', async (req, res) => {
  // Get form data from the POST request
  const { name, college, branch, bloodGroup, phone, email, age, birthdate, adharNo } = req.body;

  // Create a nodemailer transporter for sending emails
  const transporter = nodemailer.createTransport({
    service: 'gmail', // Use 'gmail' for Gmail, or your email service
    auth: {
      user: 'jadhavom4600@gmail.com', // Replace with your email
      pass: 'ohqz ayxx ghmi mvpm', // Replace with your App Password (not your regular Gmail password)
    },
  });

  try {
    // Send email to admin (you)
    await transporter.sendMail({
      from: 'jadhavom4600@gmail.com', // Your email
      to: 'jadhavom4600@gmail.com', // Admin email (your email address)
      subject: 'New Form Submission',
      text: `
        Name: ${name}
        College: ${college} 
        Branch: ${branch}
        Blood Group: ${bloodGroup}
        Phone: ${phone}
        Email: ${email}
        Age: ${age}
        Birthdate: ${birthdate}
        Aadhar Number: ${adharNo}
      `,
    });

    // Send confirmation email to user
    await transporter.sendMail({
      from: 'jadhavom4600@gmail.com', // Your email
      to: email, // User's email
      subject: 'Form Submission Successful',
      text: `Hello ${name},\n\nYour form submission was successful!\n\nThank you,\nTeam`,
    });

    // Send success response back to the client
    res.status(200).send('Emails sent successfully');
  } catch (err) {
    console.error('Error sending emails:', err);
    res.status(500).send('Failed to send emails');
  }
});

// Start the server on port 3000
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});

// Client-side JavaScript (to handle form submission and EmailJS)
document.getElementById('detailsForm').addEventListener('submit', async function (e) {
  e.preventDefault();
  const formData = new FormData(this);
  const submitButton = document.getElementById('submitBtn');
  submitButton.disabled = true; // Disable submit button to prevent multiple submissions

  try {
    // Step 1: Send form data to the server using fetch
    const response = await fetch('/submit', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      alert('Form submitted successfully!');
      this.reset(); // Reset the form fields

      // Step 2: Send email using EmailJS
      const emailResponse = await emailjs.sendForm('service_vzd1n76', 'template_s03fym5', this);

      if (emailResponse.status === 200) {
        // Step 3: Prepare WhatsApp message with form data
        let message = 'Personal Details Form Submitted:\n\n';
        for (const [key, value] of formData.entries()) {
          message += `${key}: ${value}\n`;
        }

        // Encode the message for WhatsApp and open the link
        const encodedMessage = encodeURIComponent(message);
        const whatsappURL = `https://wa.me/+917823868937?text=${encodedMessage}`;
        window.open(whatsappURL, '_blank');
      } else {
        alert('Error submitting form. Please try again.');
      }
    } else {
      const errorText = await response.text();
      console.error('Server Error:', response.status, errorText);
      alert(`Error ${response.status}: Unable to submit form. ${errorText}`);
    }
  } catch (error) {
    console.error('Error during form submission:', error);
    alert('An error occurred. Please try again later.');
  } finally {
    submitButton.disabled = false; // Re-enable the submit button after request completion
  }
});



