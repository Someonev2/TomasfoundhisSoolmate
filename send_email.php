<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Assume form data is coming in, you can add validation here
    $name = $_POST['name'];
    $Email = $_POST['email'];
    $attendance = $_POST['attendance'];
    $plusOne = $_POST['plus_one'];
    $dietary = $_POST['dietary'];

    // Example: Send the email (adjust with your email logic)
    $to = "alice.an822@gmail.com";
    $subject = "RSVP from $name";
    $message = "Name: $name\nEmail: $Email\nAttendance: $attendance\nPlus One: $plusOne\nDietary: $dietary";
    $headers = "From: noreply@example.com";

    if (mail($to, $subject, $message, $headers)) {
        echo json_encode(["success" => true]); // Success response
    } else {
        echo json_encode(["success" => false]); // Error response
    }
}
?>
