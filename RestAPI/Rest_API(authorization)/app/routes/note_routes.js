//Настройка маршрутов
var ObjectID = require('mongodb').ObjectID;
module.exports = function(app, db) {
  app.get('/notes/:id', (req, res) => { //чтение с бд, запрпос клиента-гет
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    db='//C:/Users/%D0%90%D0%B4%D0%BC%D0%B8%D0%BD%D0%B8%D1%81%D1%82%D1%80%D0%B0%D1%82%D0%BE%D1%80/Desktop/%D0%9F%D1%80%D0%B0%D0%BA%D1%82%D0%B8%D0%BA%D0%B0/projects/RestAPI/Rest_API(authorization)/app/database/authorization_data.json';
    db.findOne(details, (err, item) => { //строка адресации поиска данных по запросу!
      if (err) {
        res.send({'error':'An error has occurred'});
      } else {
        console.log(item);
        res.send(item);
        var fs = require('fs');
        fs.writeFile('/Users/Администратор/Desktop/Практика/projects/RestAPI/Rest_API(authorization)/app/database/test.txt', "dd\n", function(error){
                        if(error) throw error; // если возникла ошибка
                        console.log("Асинхронная запись файла завершена.s");
                        //var data = fs.readFileSync("hello.txt", "utf8");
                        //console.log(data);  // выводим считанные данные
              }); 
      } 
    });
  });

app.post('/notes', (req, res) => {  //запись в бд, запрос пост
    const note = { text: req.body.body, title: req.body.title };
    db.collection('seton').insert(note, (err, result) => {
      if (err) { 
        res.send({ 'error': 'An error has occurred' }); 
      } else {
        res.send(result.ops[0]);
      }
    });
  });

 app.delete('/notes/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    db.collection('seton').remove(details, (err, item) => {
      if (err) {
        res.send({'error':'An error has occurred'});
      } else {
        res.send('Note ' + id + ' deleted!');
      } 
    });
  });
 
 app.put ('/notes/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    const note = { text: req.body.body, title: req.body.title };
    db.collection('seton').update(details, note, (err, result) => {
      if (err) {
          res.send({'error':'An error has occurred'});
      } else {
          res.send(note);
      } 
    });
  });
};