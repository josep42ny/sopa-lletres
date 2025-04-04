<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    // Per llegir per exemple els valors d'una caixa de texte
    $nom1 = $_POST["nom"];
    echo "El nom introduït és: " . $nom1;

    $correu1 = $_POST["correu"];
    echo "Els correu introduït és: " . $correu1;

    $motiu1 = $_POST["motiu"];
    echo "El motiu és: " . $motiu1;

    $telefon1 = $_POST["telegon"];
    echo "El telèfon introduït és: " . $telefon1;

    $d_naixement1 = $_POST["d-naixement"];
    echo "La data de naixement és: " . $d_naixement1;

    $missatge1 = $_POST["missatge"];
    echo "El missatge introduït és: " . $missatge1;
    
    echo "<br>";

}
?>  