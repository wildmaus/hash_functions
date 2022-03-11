function checkTime(str, idSha, idStr256, idStr512) {
    let time = Date.now();
    sha256(str);
    let timeSha256 = Date.now() - time;
    document.getElementById(idSha).innerHTML = timeSha256 + "ms";
  
    time = Date.now();
    streebog(str, 256);
    let timeStreebog256 = Date.now() - time;
    document.getElementById(idStr256).innerHTML = timeStreebog256 + "ms";
  
    time = Date.now();
    streebog(str, 512);
    let timeStreebog512 = Date.now() - time;
    document.getElementById(idStr512).innerHTML = timeStreebog512 + "ms";
  }