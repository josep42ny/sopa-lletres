<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    $userName = $_POST["userName"];
    echo "El nom introduït és: " . $userName . "<br>";

    $password = $_POST["password"];
    echo "La contrassenya introduïda és: " . $password . "<br>";

    $repeatPassword = $_POST["repeatPassword"];
    echo "La contrassenya repetida és: " . $repeatPassword . "<br>";
    
}
?>