<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    $language = $_POST["language"];
    $bgColor = $_POST["backgroundTheme"];
    $buttonColor = $_POST["theme"];

    echo "Llenguatge seleccionat: " . $language . "<br>";
    echo "Color de fons seleccionat: " . $bgColor . "<br>";
    echo "Color de botó seleccionat: " . $buttonColor . "<br>";

}
?>