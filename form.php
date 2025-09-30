<!DOCTYPE html>
<html lang="uk">
<head>
    <meta charset="UTF-8">
    <title>Дякую!</title>
</head>
<body>
    <h1>Дякую за ваше повідомлення!</h1>
    <?php
    // Перевіряємо, чи форма була відправлена
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Безпечно отримуємо дані з форми
        $name = htmlspecialchars($_POST['user_name']);

        // Виводимо їх на сторінку
        echo "<p><strong>Ім'я:</strong> " . $name . "</p>";
    } else {
        // Якщо хтось зайшов на form.php без відправки форми
        echo "<p>Форма не була відправлена.</p>";
    }
    ?>
    <a href="index.html">Повернутися на головну</a>
</body>
</html>