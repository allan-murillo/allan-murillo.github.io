<?php

// Replace this with your own email address
$siteOwnersEmail = 'allan.hmbs@gmail.com';


if($_POST) {

   $name = trim(stripslashes($_POST['first_name']));
   $email = trim(stripslashes($_POST['email']));
   $subject = trim(stripslashes($_POST['phone']));
   $contact_message = trim(stripslashes($_POST['last_name']));
   $error = "";

   if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
	$error = "Invalid email address";
  }


   // Set Message
   $message .= "Email from: " . $name . " " . $contact_message . "<br />" ;
	$message .= "Email address: " . $email . "<br />";
   $message .= "Mobile Number: <br />";
   $message .= $subject;
   $message .= "<br /> ----- <br /> This is from A2Skin website email inquiry. <br />";

   // Set From: header
   $from =  $name . "<" . $email . ">";

   // Email Headers
	$headers = "From: " . $from . "\r\n";
	$headers .= "Reply-To: ". $email . "\r\n";
 	$headers .= "MIME-Version: 1.0\r\n";
	$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";


	if (empty($error)){

      ini_set("sendmail_from", $siteOwnersEmail); // for windows server
      $mail = mail($siteOwnersEmail, $subject, $message, $headers);

			if ($mail) { header("Location: http://a2skinmedspa.com/index.html"); /* Redirect browser */ 
exit(); }
      else { header("Location: http://a2skinmedspa.com/index.html"); /* Redirect browser */ 
       }

		
	} # end if - no validation error

	else {

		$response = (isset($error['name'])) ? $error['name'] . "<br /> \n" : null;
		$response .= (isset($error['email'])) ? $error['email'] . "<br /> \n" : null;
		$response .= (isset($error['message'])) ? $error['message'] . "<br />" : null;
		
		echo $response;
		
	} # end if - there was a validation error
}

?>