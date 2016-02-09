
// This section of code is how we prepare our code
// so this it is prepared to react to user events.
$(document).ready(function() {
  $(".btn").on("click", addPlayer);
  $(".link-delete").on("click", deletePlayer);
  $("ol").on("click", ".link-delete", deletePlayer);
});

// This function prompts the user for a to-do player
// and then appends it to the existing list of players.
// It also updates the counter at the top of the screen.
function addPlayer() {
  var text = window.prompt("Add Player");
  var delete_link = '<a href="#" class="link-delete">(Delete)</a>'
  console.log("Yup!");
  $('ol').append("<ol>" + text + " " + delete_link + "</ol>");
  var numplayers = $("li").length;

  // Challenge: Differentiate between 1 player vs. more players
  if (numplayers == 1) {
    $(".total").html(numPlayers + " player");
  }
  else {
    $(".total").html(numPlayers + " players");
  }
}

// This function deletes an player from the list.
// The "event" parameter holds information on which
// player the user wishes to remove.
function deleteplayer(event) {
  console.info(event);
  $(event.target).remove();
  $(event.target).parent().fadeOut();

}
