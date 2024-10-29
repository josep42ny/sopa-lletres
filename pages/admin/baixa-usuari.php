<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    $baixa_usuari1 = $_POST["baixa-usuaris"];
    echo "L'usuari que se ha donat de baixa és: " . $baixa_usuari1;

}
?>