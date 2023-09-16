// var url = "http://localhost:8080/api/v1/users";
//var url = 'https://my-json-server.typicode.com/typicode/demo/posts';
// Update a user
// var url = 'http://localhost:8080/api/v1/users'
var url = 'https://retoolapi.dev/KZnYjS/data'
var data = {}
data.Column2 = 99
data.Column3 = 'Viet Nam'
data.Column4 = false
data.Column5 = 'GiaDai'

var json = JSON.stringify(data)
var xhr = new XMLHttpRequest()
xhr.open('PUT', url + '/80', true)
xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8')
xhr.onload = function () {
  var users = JSON.parse(xhr.responseText)
  if (xhr.readyState == 4 && xhr.status == '200') {
    console.table(users)
  } else {
    console.error(users)
  }
}
xhr.send(json)
