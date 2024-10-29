<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    // Per llegir per exemple els valors d'una caixa de texte
    $llista_de_sopes1 = $_POST["llista-de*sopes"];
    echo "La sopa triada és: " . $llista_de_sopes1;

}
?>