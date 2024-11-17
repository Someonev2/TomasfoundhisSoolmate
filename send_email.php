<?php
header('Content-Type: application/json'); // Set JSON header

try {
        $name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
        $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
        $attendance = filter_var($_POST['attendance'], FILTER_SANITIZE_STRING);
        $plusOne = filter_var($_POST['plus_one'], FILTER_SANITIZE_STRING);
        $dietary = filter_var($_POST['dietary'], FILTER_SANITIZE_STRING);

        // Validate email
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            throw new Exception("Invalid email format");
        }

        // Prepare email
        $to = "alice.an822@gmail.com";
        $subject = "RSVP from " . $name;
        $message = "Name: $name\n"
                . "Email: $email\n"
                . "Attendance: $attendance\n"
                . "Plus One: $plusOne\n"
                . "Dietary: $dietary";
        $headers = [
            'From' => 'noreply@example.com',
            'Reply-To' => $email,
            'X-Mailer' => 'PHP/' . phpversion()
        ];

        // Send email
        if (mail($to, $subject, $message, $headers)) {
            echo json_encode([
                "success" => true,
                "message" => "RSVP submitted successfully"
            ]);
        } else {
            throw new Exception("Failed to send email");
        }
    } else {
        throw new Exception("Invalid request method");
    }

?>
