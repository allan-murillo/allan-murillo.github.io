<?php

// Replace this with your own email address
$siteOwnersEmail = 'allan.hmbs@gmail.com';


if($_POST) {

   $name = trim(stripslashes($_POST['first_name']));
   $email = trim(stripslashes($_POST['email']));
   $subject = trim(stripslashes($_POST['phone']));
   $contact_message = trim(stripslashes($_POST['last_name']));

   // Check Name
	if (strlen($name) < 2) {
		$message = "Please enter your name.";

		echo "<script type='text/javascript'>alert('$message');</script>";

		// '<script type="text/javascript">alert("Please enter your name.")</script>'; 
		//$error['name'] = echo;
	}
	// Check Email
	if (!preg_match('/^[a-z0-9&\'\.\-_\+]+@[a-z0-9\-]+\.([a-z0-9\-]+\.)*+[a-z]{2}/is', $email)) {

 		echo '<script type="text/javascript">alert("Please enter a valid email address.")</script>'; 

		 //$error['email'] = "Please enter a valid email address.";
	}
	// Check Message
	//if (strlen($contact_message) < 15) {

		 //echo '<script type="text/javascript">alert("Please enter your message. It should have at least 15 characters.")</script>';
		// $error['message'] = "Please enter your message. It should have at least 15 characters.";
	//}
   // Subject
	if ($subject == '') { $subject = "Contact Form Submission"; }


   // Set Message
   $message .= "Email from: " . $name . " " . $contact_message . "<br />" ;
	$message .= "Email address: " . $email . "<br />";
   $message .= "Mobile Number: <br />";
   $message .= $subject;
   $message .= "<br /> ----- <br /> This is from website email inquiry. <br />";

   // Set From: header
   $from =  $name . "<" . $email . ">";

   // Email Headers
	$headers = "From: " . $from . "\r\n";
	$headers .= "Reply-To: ". $email . "\r\n";
 	$headers .= "MIME-Version: 1.0\r\n";
	$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";


   if (!$error) {

      ini_set("sendmail_from", $siteOwnersEmail); // for windows server
      $mail = mail($siteOwnersEmail, $subject, $message, $headers);

			if ($mail) { header("Location: https://skinbya2.000webhostapp.com/contact.html"); /* Redirect browser */ 
exit(); }
      else { header("Location: https://skinbya2.000webhostapp.com/contact.html"); /* Redirect browser */ 
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