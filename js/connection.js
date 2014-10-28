var connectedRef = new Firebase("https://boiling-heat-5681.firebaseio.com/.info/connected");
connectedRef.on("value", function(snap) {
  if (snap.val() === true) {
    $('#connectionstatus').empty();
    $('#connectionstatus').append("<b>Server Status:</b> Connected to Server <br>");
  } else {
    $('#connectionstatus').empty();
    $('#connectionstatus').append("<b>Server Status:</b> Not connected to Server <br>");
  }
});
