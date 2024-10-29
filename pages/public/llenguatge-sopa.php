<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    $language = $_POST["language"];
    $buttonColor = $_POST["theme"];

    echo "Llenguatge seleccionat: " . $language . "<br>";

}
?>