<?php
if($_SERVER["REQUEST_METHOD"] == "POST") {

    // impostazioni email
    $to = "perta.marco@icloud.com";
    $subject = "Nuovo messaggio dal sito web";
    $name = strip_tags(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $message = trim($_POST["message"]);

    // verifica se i campi sono stati compilati correttamente
    if(empty($name) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo "Si è verificato un errore. Si prega di compilare correttamente tutti i campi e riprovare.";
        exit;
    }

    // contenuto email
    $email_content = "Nome: $name\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "Messaggio:\n$message\n";

    // intestazioni email
    $email_headers = "From: $name <$email>";

    // invio email
    if(mail($to, $subject, $email_content, $email_headers)) {
        http_response_code(200);
        echo "Il tuo messaggio è stato inviato con successo!";
    } else {
        http_response_code(500);
        echo "Si è verificato un errore. Si prega di riprovare.";
    }

} else {
    http_response_code(403);
    echo "Si è verificato un errore. Si prega di riprovare.";
}
?>