<?php
// Permitir acesso de qualquer origem
header("Access-Control-Allow-Origin: *");
// Permitir métodos POST e OPTIONS
header("Access-Control-Allow-Methods: POST, OPTIONS");
// Permitir cabeçalhos específicos
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $jsonData = file_get_contents('php://input');

    $url = "http://152.249.226.101:11870/datasnap/rest/app/OrcamentoCriar";

    $ch = curl_init($url);

    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, array(
        'Content-Type: application/json',
    ));
    curl_setopt($ch, CURLOPT_POSTFIELDS, $jsonData);

    $response = curl_exec($ch);

    $dateTime = date('Y-m-d H:i:s'); // Obtém a data e hora atual no formato "AAAA-MM-DD HH:MM:SS"

    if (curl_errno($ch)) {
        $error = 'Error: ' . curl_error($ch);
        echo $error;
        file_put_contents('response.log', $dateTime . ' - ' . $error . PHP_EOL, FILE_APPEND);
    } else {
        echo $response;
        file_put_contents('response.log', $dateTime . ' - ' . $response . PHP_EOL, FILE_APPEND);
    }

    curl_close($ch);
} else {
    $invalidMethod = 'Invalid request method';
    $dateTime = date('Y-m-d H:i:s');
    echo $invalidMethod;
    file_put_contents('response.log', $dateTime . ' - ' . $invalidMethod . PHP_EOL, FILE_APPEND);
}

?>
