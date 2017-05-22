//Настройка маршрутов
var ObjectID = require('mongodb').ObjectID;
module.exports = function(app, db) {
  app.get('/notes/:id', (req, res) => { //чтение с бд, запрпос клиента-гет
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    db.collection('seton').findOne(details, (err, item) => {
      if (err) {
        res.send({'error':'An error has occurred'});
      } else {
        console.log(item);
        res.send(item);
        var fs = require('fs');
        fs.writeFile('/Users/Администратор/Desktop/Практика/projects/RestAPI/Rest_API(authorization)/app/database/test.txt', "dd\n", function(error){
                        if(error) throw error; // если возникла ошибка
                        console.log("Асинхронная запись файла завершена. Содержимое файла:");
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