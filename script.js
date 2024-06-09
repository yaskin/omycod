function Get() {
    var arr = { key1: 'val1', key2: 'val2', key3: 'val3' };
    //alert('Нужно доделать');
    // Сделайте post запрос к файлу get.php. В запросе передайте массив "arr"
    // В запросе должно сработать условие: isset($_POST['get'])
    $.ajax({
        url: 'get.php',
        type: 'POST',
        contentType: 'application/json',
        get: JSON.stringify(arr,null,),
        success: function(get) {
            console.log(get); // подтверждение получения данных

			document.getElementById("getback").textContent = JSON.stringify(get, undefined, 2);
/*/			
				for (var i = 0, len = get.length; i < len; i++) {
					var id = get[i].id;
					var name = get[i].name;
					var date = get[i].date; 
					
					console.log(get[i]);
					
					$('(#getback').append("<tr>" +
						"<td>" + id + "<\/td>" +
						"<td>" + name + "<\/td>" +
						"<td>" + persent + "<\/td>" +
						"<td>" + date + "<\/td>" +
					"<\/tr>")	;					

				}
			*/
        },
        error: function(err) {
            console.error('Ошибка:', err);
        }
    });
}