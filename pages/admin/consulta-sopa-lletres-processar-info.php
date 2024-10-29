<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    // Per llegir per exemple els valors d'una caixa de texte
    $llista_sopa_lletres1 = $_POST["llista-sopa-lletres"];
    echo "La sopa triada és: " . $llista_sopa_lletres1;

}
?>