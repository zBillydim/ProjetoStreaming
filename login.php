<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'];
    $password = $_POST['password'];
    if ($username == "admin" && $password == "admin") {
        session_start();
        $_SESSION['username'] = $username;
        header('Location: index.html');
    } else {
        echo "Credenciais inválidas.";
    }
}
?>