<?php
class UNI
{
    function get($opt)
    {
        $arr = array();
        $ALLROW = @mysqli_query($GLOBALS['connect'], $opt);
        while ($row = @mysqli_fetch_array($ALLROW, MYSQLI_ASSOC)) {
            $arr[] = $row;
        }
        return $arr;
    }
}

if (isset($_POST)) {
    $arr = $_POST['arr'];
    $get = UNI::get('SELECT id,name,date FROM table'); // Предположим есть таблица "table". Впишите сюда MySQL запрос чтобы получить колонки (id, name и date)
    //$arr['table'] = $get;
    $arr['table'] = array('id' => 1, 'name' => 'new', 'date' => '2022.05.16'); // Т.к. таблица предполагаемая, то симулируем.
   // echo true; // в echo отдайте $arr в json формате
   
	if($arr['table']){
		header('Content-Type: application/json');
		echo json_encode($arr['table']);		
	}
	else {
		echo('Нет данных');
	}
}


?>