$("#github").on("keyup", function() {
  var user = $("#github").val();

  emptyCurrentList();

  $.ajax({
    url: "https://api.github.com/users/" + user + "/repos",
    success: function(repos) {
      iterateThroughData(repos);
    },
    error: function(data) {
      insertError();
    }
  });
});

function iterateThroughData(repos) {
  _.forEachRight(repos, function(repo) {
    insertHTML(repo);
  });
}

function insertHTML(repo) {
  $("#repositories").append("<li>" + repo.title + "</li>");
}

function emptyCurrentList() {
  $("#repositories").empty();
}

function insertError() {
  $("#repositories").append("<li>Uh oh, we're having a problem!</li>");
}
