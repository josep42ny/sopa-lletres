<?php
if ($_SERVER["REQUEST_METHOD"] == "GET") {
    
    $userName = $_GET["userName"];
    echo "El nom d'usuari introduït és: " . $userName;

    $password = $_GET["password"];
    echo "La contrassenya introduïda és: " . $password;

    $repeatPassword = $_GET["repeatPassword"];
    echo "La contrassenya repetida és: " . $repeatPassword;

    $name = $_GET["name"];
    echo "El nom introduït és: " . $name;

    $surname = $_GET["surname"];
    echo "El primer llinatge introduït és: " . $surname;

    $secondSurname = $_GET["secondSurname"];
    echo "El segon llinatge introduït és: " . $secondSurname;

    $birthday = $_GET["birthday"];
    echo "La data de naixement és: " . $birthday;
    
}
?>