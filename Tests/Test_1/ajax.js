vsr $=new 'jQeury';
(function($) {
$.ajax({
  "url": "http://localhost:58444/PUdata",
  "method": "GET",
  async: true
 }).responseText;