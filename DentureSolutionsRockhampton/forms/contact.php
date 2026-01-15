<?php

$receiving_email_address = 'amurillo.1018@gmail.com';

if ($_SERVER["REQUEST_METHOD"] === "POST") {

    // Sanitize inputs
    $name    = htmlspecialchars(trim($_POST['name'] ?? ''));
    $email   = filter_var(trim($_POST['email'] ?? ''), FILTER_VALIDATE_EMAIL);
    $phone   = htmlspecialchars(trim($_POST['phone'] ?? ''));
    $message = htmlspecialchars(trim($_POST['message'] ?? ''));

    if (!$name || !$email || !$phone) {
        http_response_code(400);
        echo "Please fill in all required fields.";
        exit;
    }

    $subject = "Message Request from Website";

    // Modern HTML email
    $body = "
    <html>
    <head>
        <meta charset='UTF-8'>
        <style>
            body { background:#f4f6f8; font-family: Arial, sans-serif; }
            .card {
                max-width:600px;
                margin:30px auto;
                background:#ffffff;
                border-radius:10px;
                padding:25px;
                box-shadow:0 5px 15px rgba(0,0,0,0.1);
            }
            h2 { color:#0d6efd; margin-bottom:15px; }
            .item { margin-bottom:10px; }
            .label { font-weight:bold; color:#333; }
            .footer {
                margin-top:20px;
                font-size:13px;
                color:#777;
            }
        </style>
    </head>
    <body>
        <div class='card'>
            <h2>Callback Request</h2>
            <p>A customer has submitted a message request from the website.</p>

            <div class='item'><span class='label'>Name:</span> {$name}</div>
            <div class='item'><span class='label'>Email:</span> {$email}</div>
            <div class='item'><span class='label'>Phone:</span> {$phone}</div>
            <div class='item'><span class='label'>Message:</span><br>{$message}</div>

            <div class='footer'>
                Please contact the customer as soon as possible.
                <br>
                <br>
                www.denturesolutionsrockhampton.com.au
            </div>
        </div>
    </body>
    </html>
    ";

    // Headers
    $headers  = "MIME-Version: 1.0\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8\r\n";
    $headers .= "From: Website Message <no-reply@denturesolutionsrockhampton.com.au>\r\n";
    $headers .= "Reply-To: {$email}\r\n";

    if (mail($receiving_email_address, $subject, $body, $headers)) {
        echo "OK";
    } else {
        http_response_code(500);
        echo "Email failed to send.";
    }
}
?>
