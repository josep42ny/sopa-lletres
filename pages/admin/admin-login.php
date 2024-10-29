<?php
if ($_SERVER["REQUEST_METHOD"] == "GET") {
    
    $userName = $_GET["userName"];
    echo "El nom introduït és: " . $userName;

    $password = $_GET["password"];
    echo "La contrassenya introduïda és: " . $password;

    $repeatPassword = $_GET["repeatPassword"];
    echo "La contrassenya repetida és: " . $repeatPassword;
    
}
?>