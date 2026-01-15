<?php
// Replace with your real receiving email
$receiving_email_address = 'amurillo.1018@gmail.com';

// Check if form data exists
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Collect POST data safely
    $name = htmlspecialchars(trim($_POST['name']));
    $email = filter_var(trim($_POST['email']), FILTER_VALIDATE_EMAIL);
    $phone = htmlspecialchars(trim($_POST['phone']));
    $message = htmlspecialchars(trim($_POST['message']));

    if (!$email) {
        echo json_encode(['status' => 'error', 'message' => 'Invalid email address.']);
        exit;
    }

    // Subject
    $subject = "Appointment Request from Website";

    // HTML email body
    $body = "
    <html>
    <head>
        <style>
            body { font-family: Arial, sans-serif; background-color: #f5f5f5; color: #333; }
            .container { max-width: 600px; margin: 20px auto; background-color: #fff; padding: 20px; border-radius: 10px; box-shadow: 0 0 10px rgba(0,0,0,0.1); }
            h2 { color: #007bff; }
            p { line-height: 1.6; }
            .info { margin-bottom: 15px; }
            .label { font-weight: bold; }
        </style>
    </head>
    <body>
        <div class='container'>
            <h2>New Callback Request</h2>
            <p>A visitor has requested a call from your website. Details below:</p>
            <div class='info'><span class='label'>Name:</span> {$name}</div>
            <div class='info'><span class='label'>Email:</span> {$email}</div>
            <div class='info'><span class='label'>Phone:</span> {$phone}</div>
            <div class='info'><span class='label'>Message:</span> {$message}</div>
            <p>Please contact them as soon as possible.</p>
        </div>
    </body>
    </html>
    ";

    // Email headers for HTML
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= "From: {$name} <{$email}>" . "\r\n";

    // Send email
    if (mail($receiving_email_address, $subject, $body, $headers)) {
        echo json_encode(['status' => 'success', 'message' => 'Your request has been sent successfully.']);
    } else {
        echo json_encode(['status' => 'error', 'message' => 'There was a problem sending your request.']);
    }
}
?>
