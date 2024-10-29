<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    $option=$_POST["removeSoup"];

    echo "Opció seleccionada és: " . "<br>";
    for ($i=0;$i<count($option);$i++) {
        echo $option[$i] . "<br>";
    }

}
?>