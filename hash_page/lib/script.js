sessionStorage.setItem("input", "");
sessionStorage.setItem("shaOutput", "");
sessionStorage.setItem("streebog", "");
sessionStorage.setItem("hashSize", 256);

function getMassageHash() {
  massage = document.getElementById("input").value;
  sessionStorage.setItem("input", massage);
  let shaOutput = document.getElementById("shaOutput");
  let streebogOutput = document.getElementById("streebog");
  shaOutput.value = sha256(massage);
  let hashSize = sessionStorage.getItem("hashSize");
  streebogOutput.value = streebog(massage, +hashSize);
}

function changeHashSize(newHashSize) {
  sessionStorage.setItem("hashSize", newHashSize);
  hashSize = newHashSize;
  document.getElementById("size").innerHTML = `Hash size ${hashSize}`;
  let massage = sessionStorage.getItem("input");
  let shaOutput = document.getElementById("shaOutput");
  shaOutput.value = sha256(massage);
  let streebogOutput = document.getElementById("streebog");
  streebogOutput.value = streebog(massage, +hashSize);
}

document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('textarea, input').forEach(function(e) {
        if(e.value === '') e.value = window.sessionStorage.getItem(e.id, e.value);
        e.addEventListener('input', function() {
            window.sessionStorage.setItem(e.id, e.value);
        })
    })
}); 