<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "allan.hmbs@gmail.com"; // Replace with your email address where you want to receive the form submissions.
    $subject = "Appointment Request";

    // Gather user input
    $service = $_POST["service"];
    $doctor = $_POST["doctor"];
    $name = $_POST["name"];
    $email = $_POST["email"];
    $appointmentDate = $_POST["appointmentDate"];
    $appointmentTime = $_POST["appointmentTime"];

    // Compose the email message
    $message = "Service: $service\n";
    $message .= "Doctor: $doctor\n";
    $message .= "Name: $name\n";
    $message .= "Email: $email\n";
    $message .= "Appointment Date: $appointmentDate\n";
    $message .= "Appointment Time: $appointmentTime\n";

    // Additional headers
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Attempt to send the email
    if (mail($to, $subject, $message, $headers)) {
        echo "Thank you! Your appointment request has been submitted successfully.";
    } else {
        echo "Error: Unable to send the appointment request. Please try again later.";
    }
}
?>
