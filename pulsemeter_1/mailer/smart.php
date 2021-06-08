<?php

$name = $_POST['name'];              // получение данных из форм по атрибуту name и
$phone = $_POST['phone'];            // помещение данных в переменные
$email = $_POST['email'];

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

// $mail->SMTPDebug = 3;            // Enable verbose debug output

$mail->isSMTP();                    // настрим mailer для использования SMTP
$mail->Host = 'smtp.gmail.com';     // установить SMTP сервер почтового ресурса с к-рым будем работать
$mail->SMTPAuth = true;             // включить SMTP аутентификация
$mail->Username = '45iss5825@gmail.com';               // Наш логин
$mail->Password = 'G%5""6xB3m3FYT%';               // Наш пароль от ящика
$mail->SMTPSecure = 'ssl';          // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                  // TCP port to connect to

$mail->setFrom('45iss5825@gmail.com', 'Pulse');                // От кого письмо
$mail->addAddress('barss3000@bk.ru');             // Add a recipient
//$mail->addAddress('ellen@example.com');                 // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');           // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');      // Optional name
$mail->isHTML(true);                                      // Set email format to HTML

$mail->Subject = 'Данные';
$mail->Body    = '
		Пользователь оставил данные: <br>
	Имя: ' . $name . ' <br>
	Номер телефона: ' . $phone . ' <br>
	E-mail: ' . $email . '';

if(!$mail->send()) {
    return false;
} else {
    return true;
}

?>