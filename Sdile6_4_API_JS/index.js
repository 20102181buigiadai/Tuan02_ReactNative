//const urlBacon = "https://baconipsum.com/api/?type=all-meat";
const urlBacon = "https://retoolapi.dev/KZnYjS/data";

$.ajax({
    url: urlBacon,
    beforeSend: function(xhr) {
        xhr.overrideMimeType("text/plain; charset=x-user-defined");
    },
}).done(function(data) {
    if (console && console.log) {
        console.log("Sample of data:", data.slice(0, 100));
    }
});