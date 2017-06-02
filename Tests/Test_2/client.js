var XHR = new XMLHttpRequest();

var xhr = new XHR();

// (2) запрос на другой домен :)
xhr.open('GET', '/', true);

xhr.onload = function() {
  alert( this.responseText );
}

xhr.onerror = function() {
  alert( 'Ошибка ' + this.status );
}

xhr.send();