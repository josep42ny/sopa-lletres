<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    // Per llegir per exemple els valors d'una caixa de texte
    $nom_sopa1 = $_POST["nom-sopa"];
    echo "El nom introduït és: " . $nom_sopa1;

    echo "<br>";

    $dificultat1 = $_POST["dificultat"];
    echo "dificultat sel·leccionada és: " . $dificultat1;

    echo "<br>"

    $paraula1 = $_POST["paraula1"];
    $paraula2 = $_POST["paraula2"];
    $paraula3 = $_POST["paraula3"];
    $paraula4 = $_POST["paraula4"];
    $paraula5 = $_POST["paraula5"];
    $paraula6 = $_POST["paraula6"];
    $paraula7 = $_POST["paraula7"];
    $paraula8 = $_POST["paraula8"];
    $paraula9 = $_POST["paraula9"];
    $paraula10 = $_POST["paraula10"];
    echo "Les paraules son: " . $paraula1 . $paraula2 . $paraula3 . $paraula4 . $paraula5 . $paraula6 . $paraula7 . $paraula8 . $paraula9 . $paraula10;

}
?>