<?php
	$name = $_POST['name'];
	$phone = $_POST['phone'];
	$ref = $_POST['ref'];
	$email = $_POST['email'];
	$ques = $_POST['ques'];
	$formname = $_POST['formname'];
	$service = $_POST['service'];
	$country = $_POST['country'];
	$invest = $_POST['invest'];

	if(!empty($_POST['type']) && $_POST['type'] == "callback" ) {

		$maillist = array('v@comenti.ru, waterandfire_87@mail.ru'); // добавить е-mail(ы)
		$subject = "Регион Инвест | Заявка"; //изменить название компании
		$message = "Имя: $name \n
					Номер телефона: $phone\n
					Откуда: $formname\n
					Реферер: $ref\n";
		foreach ($maillist as $mail) {
			mail($mail, $subject, $message, "Content-type:text/plain; charset = utf-8") or print "Не могу отправить письмо !!!";
		}
		unset($name,$email,$phone,$ref);	
	}
	if(!empty($_POST['type']) && $_POST['type'] == "request") {
		$maillist = array('dortezy@gmail.com'); // добавить е-mail(ы)
		$subject = "Horizon Global | Заявка"; //изменить название компании
		$message = "Имя: $name \n
		            Номер телефона: $phone\n
					Электронный адрес: $email \n
					Услуга: $service \n
					Страна: $country \n
					Сумма инвестиций: $invest \n
					Откуда: $formname\n
					Реферер: $ref\n";
		foreach ($maillist as $mail) {
			mail($mail, $subject, $message, "Content-type:text/plain; charset = utf-8") or print "Не могу отправить письмо !!!";
		}
		unset($name,$email,$phone,$ques,$ref);	
	}
	if(!empty($_POST['type']) && $_POST['type'] == "question") {
		$maillist = array('v@comenti.ru, waterandfire_87@mail.ru'); // добавить е-mail(ы)
		$subject = "Регион Инвест | Заявка"; //изменить название компании
		$message = "Имя: $name \n
					Номер телефона: $phone\n
					Электронный адрес: $email \n
					Откуда: $formname\n
					Реферер: $ref\n
					Вопрос: $ques\n";
		foreach ($maillist as $mail) {
			mail($mail, $subject, $message, "Content-type:text/plain; charset = utf-8") or print "Не могу отправить письмо !!!";
		}
		unset($name,$email,$phone,$ques,$ref);
	}
?>