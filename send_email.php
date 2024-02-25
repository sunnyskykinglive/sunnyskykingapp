<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    
    $to = "sunnyskyking.godson@gmail.com";
    $subject = "New Form Submission";
    $message = "Name: $name\nEmail: $email\n\n$message";
    
    $headers = "From: $email";
    
    if (mail($to, $subject, $message, $headers)) {
        echo "Mail sent successfully!";
    } else {
        echo "Failed to send mail. Please try again.";
    }
}
?>