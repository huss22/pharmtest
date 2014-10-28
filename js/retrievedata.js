var ref = new Firebase("https://boiling-heat-5681.firebaseio.com/");
var postsRef = ref.child("Medicines");
postsRef.on('child_added', function (snapshot) {
  var newPost = snapshot.val();
  var date = new Date(newPost.Timestamp);
  $('#result').append("<option id =  " + newPost.UID + '>' + newPost.MedName + ', Added on : ' + $.format.date(date, "ddd D of MMM, yyyy h:mm a") + '</option>');
});

function rerun (snapshot) {
	var ref = new Firebase("https://boiling-heat-5681.firebaseio.com/");
	var postsRef = ref.child("Medicines");
  var newPost = snapshot.val();
  var date = new Date(newPost.Timestamp);
  $('#result').empty();
  $('#result').append("<option></option>")
  $('#result').append("<option id =  " + newPost.UID + '>' + newPost.MedName + ', Added on : ' + $.format.date(date, "ddd D of MMM, yyyy h:mm a") + '</option>');
}

$(document).ready(function(){
	$("#result").select2({
    placeholder: "Select a Medicine",
    width: "90%"
});
});

$(document).on('change','#result', function(){
	window.grabid = $("#result option:selected").attr("id");
	console.log(grabid);
});
