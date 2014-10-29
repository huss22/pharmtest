var ref = new Firebase("https://boiling-heat-5681.firebaseio.com/");
var postsRef = ref.child("Medicines");
postsRef.on('child_added', function (snapshot) {
  var newPost = snapshot.val();
  var date = new Date(newPost.Timestamp);
  $('#result').append("<li id =  " + newPost.UID + '><b>' + newPost.MedName + '</b>, Added on : ' + $.format.date(date, "ddd D of MMM, yyyy h:mm a") + '</li>');
});
