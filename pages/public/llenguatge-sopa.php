<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    $language = $_POST["language"];

    echo "Llenguatge seleccionat: " . $language . "<br>";

}
?>