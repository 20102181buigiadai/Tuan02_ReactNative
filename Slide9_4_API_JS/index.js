var url = 'https://retoolapi.dev/KZnYjS/data' // var url = "http://localhost:8080/api/v1/users"; //var url = 'https://my-json-server.typicode.com/typicode/demo/posts';
// // Post a user
var data = {}
//data.firstname = "John"; //data.lastname = "Snow";
data.id = '80'
data.Column2 = 81
data.Column3 = 'Raleigh, North Carolina, United States'
data.Column4 = false
data.Column5 = 	'Invoice'

var json = JSON.stringify(data)
var xhr = new XMLHttpRequest()
xhr.open('POST', url, true)
xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8')
xhr.onload = function () {
  var users = JSON.parse(xhr.responseText)
  if (xhr.readyState == 4 && xhr.status == '201') {
    console.table(users)
  } else {
    console.error(users)
  }
}
xhr.send(json)
