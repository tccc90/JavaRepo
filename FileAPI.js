// Check for the various File API support.
if (window.File && window.FileReader && window.FileList && window.Blob) {
  // Great success! All the File APIs are supported.
  alert('The File APIs are fully supported in this browser.');
} else {
  alert('The File APIs are not fully supported in this browser.');
}

  function readFileInfo() {
    // var files = evt.target.files; // FileList object

    // // files is a FileList of File objects. List some properties.
    // var output = [];
    // for (var i = 0, f; f = files[i]; i++) {
    //   //string concatenation to disploay files[i] info
    //   output.push('<li><strong>', escape(f.name), '</strong> (', f.type || 'n/a', ') - ',
    //               f.size, ' bytes, last modified: ',
    //               f.lastModifiedDate ? f.lastModifiedDate.toLocaleDateString() : 'n/a',
    //               '</li>');

    // } //next i
    // // document.getElementById('list').innerHTML = '<ul>' + output.join('') + '</ul>';
    // var data=JSON.parse(f)
    alert("Hello, I am Javascript")
  }

