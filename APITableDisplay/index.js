var myurl = 'https://retoolapi.dev/xwZOUz/data'

var myfn = (resolve, reject) => {
  var xhttp = new XMLHttpRequest()
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var users = JSON.parse(xhttp.responseText)
      resolve(users)
    }
  }
  xhttp.open('GET', myurl, true)
  xhttp.send()
}

var promise = new Promise(myfn)

console.log(promise)

promise.then(data => {
  console.log(data)
  //screen display
  document.getElementById('text').value = data[0].id+" "+data[0].Name+" "+data[0].Date+" "+data[0].Location_
  // hiển thị data ra màn hình tbody
  var tbody = document.getElementById('tbody')
  var html = ''
  data.forEach((item, index) => {
    html += `
            <tr>
            <td>${index + 1}</td>
            <td>${item.Name}</td>
            <td>${item.Date}</td>
            <td>${item.Location}</td>
            </tr>
        `
  })
  tbody.innerHTML = html
})
