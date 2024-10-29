<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    $bgColor = $_POST["backgroundTheme"];
    $buttonColor = $_POST["theme"];

    echo "Color de fons seleccionat: " . $bgColor . "<br>";
    echo "Color de botó seleccionat: " . $buttonColor . "<br>";

}
?>