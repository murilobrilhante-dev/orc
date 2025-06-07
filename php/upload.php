<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Verifica se há um arquivo sendo enviado
if (isset($_FILES['file'])) {
    $file = $_FILES['file'];

    // Define o diretório de upload
    $uploadDirectory = '../uploads/';

    // Gera um nome único para o arquivo
    $fileName = time() . '-' . basename($file['name']);
    $uploadFile = $uploadDirectory . $fileName;

    // Verifica o tipo de arquivo
    $fileType = strtolower(pathinfo($uploadFile, PATHINFO_EXTENSION));
    $allowedTypes = array('pdf', 'jpg', 'jpeg', 'png');

    if (in_array($fileType, $allowedTypes)) {
        // Move o arquivo para o diretório de uploads
        if (move_uploaded_file($file['tmp_name'], $uploadFile)) {
            $fileUrl = 'http://' . $_SERVER['HTTP_HOST'] . '/' . $uploadFile;
            echo json_encode(['fileUrl' => $fileUrl]);
        } else {
            http_response_code(500);
            echo json_encode(['error' => 'Failed to move uploaded file.']);
        }
    } else {
        http_response_code(400);
        echo json_encode(['error' => 'Invalid file type.']);
    }
} else {
    http_response_code(400);
    echo json_encode(['error' => 'No file uploaded.']);
}
?>
