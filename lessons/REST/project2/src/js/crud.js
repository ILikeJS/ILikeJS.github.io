console.log('connect ok');

const url = 'http://localhost';
const port = ':3333';
const data = '/family/';


var read = document.querySelector('input[value="get"]');
var post = document.querySelector('input[value="post"]');
var put = document.querySelector('input[value="put"]');
var del = document.querySelector('input[value="delete"]');

var firstname = document.querySelector('input[name="name"]');
var surname = document.querySelector('input[name="surname"]');
var age = document.querySelector('input[name="age"]');
var num = document.querySelector('input[type="number"]');


// GET
read.addEventListener('click', function() {
    fetch(url + port + data, {
        method: 'GET'
    }).then(function(res) {
        return res.json();
    }).then(function(res) {
      for (var i in res) {
        console.log(res[i]);
      }
    });
});

//POST
post.addEventListener('click', function() {
    fetch(url + port + data, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Cache-Control': 'no-cache'
        },
        body: JSON.stringify({
            name: firstname.value,
            surname: surname.value,
            age: age.value
        })
    }).then(function(res) {
        return res;
    });

});

//PUT
put.addEventListener('click', function() {
    fetch(url + port + data + num.value, {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'

        },
        body: JSON.stringify({
           name: firstname.value,
           surname: surname.value,
           age: age.value
        })
    }).then(function(res) {
        return res;
    });
});

//DELETE
del.addEventListener('click', function() {
    fetch(url + port + data + num.value, {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'

        }
    }).then(function(res) {
        return res;
    });
});
