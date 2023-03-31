// window.addEventListener("load", () => {
//   const input = document.getElementById("upload");
//     const filewrapper =document.getElementById("filewrapper");

//     input.addEventListener("change",()=>{
//         let fileName = e.target.files[0].name;
//         let filetype = e.target.value.split(".").pop();
//         fileshow(fileName, filetype);
        
//     })

//     const fileshow = (fileName, filetype)=>{
//         const showfileboxElem = document.createElement("div");
//         showfileboxElem.classList.add("showfilebox")
//         const leftElem = document.createElement("div");
//         leftElem.classList.add("left");
//         const fileTypeElem = document.createElement("span");
//         fileTypeElem.classList.add("filetype");
//         fileTypeElem.innerHTML=filetype;
//         leftElem.append(fileTypeElem);
//         const filetitleElem = document.createElement("h3");
//         filetitleElem.innerHTML=fileName;
//         leftElem.append(filetitleElem);
//         showfileboxElem.append(leftElem);
//         const rightElem = document.createElement("div");
//         rightElem.classList.add("right");
//         showfileboxElem.append(rightElem);
//         const crossElem =document.createElement("span");
//         crossElem.innerHTML="&#215;";
//         rightElem.append(crossElem);
//         filewrapper.append(showfileboxElem);

//         crossElem.addEventListener("click",()=>{
//             filewrapper.removeChild(showfileboxElem);
//         })
//     }
// });
function readURL(input) {
  if (input.files && input.files[0]) {

    var reader = new FileReader();

    reader.onload = function(e) {
      $('.image-upload-wrap').hide();

      $('.file-upload-image').attr('src', e.target.result);
      $('.file-upload-content').show();

      $('.image-title').html(input.files[0].name);

      // Save the file locally with a specific name
      var link = document.createElement('a');
      link.download = 'test.jpg';
      link.href = e.target.result;
      link.click();

      // Call the process.py script
      var formData = new FormData();
      formData.append('file', input.files[0], 'test.jpg');
      $.ajax({
        url: 'process.py?filename=test.jpg', // Add the file name as a query parameter
        type: 'POST',
        data: formData,
        contentType: false,
        processData: false,
        success: function(response) {
          console.log('Process complete:', response);
        },
        error: function(error) {
          console.error('Error processing file:', error);
        }
      });
    };

    reader.readAsDataURL(input.files[0]);

  } else {
    removeUpload();
  }
}
