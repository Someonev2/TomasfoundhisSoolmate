<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
   
    $_POST="http://guestlist2025-b291.restdb.io/mail"
    $name = htmlspecialchars($_POST['name']);
    $contact = htmlspecialchars($_POST['contact']);
    $attendance = htmlspecialchars($_POST['attendance']);
    $plus_one = htmlspecialchars($_POST['plus_one']);
    $dietary = htmlspecialchars($_POST['dietary']);

    $to = "alice.an822@gmail.com"; // Replace with your email
    $subject = "RSVP Submission";
    $message = "Name: $name\n";
    $message .= "Attendance: $attendance\n";
    $message .= "Contact: $contact\n";
    $message .= "Plus 1? $plus_one\n";
    if (!empty($dietary)) {
        $message .= "Dietary Suggestions: $dietary\n";
    }

    $headers = "From: noreply@example.com";

    if (mail($to, $subject, $message, $headers)) {
        echo "RSVP submitted successfully!";
    } else {
        echo "Failed to send RSVP.";
    }
}
?>
