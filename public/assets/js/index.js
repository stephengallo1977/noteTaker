var $newNoteList = $("#title");
var $newNotetitle = $("#title");
var $newNotebody = $("#body");
var $submitBtn = $("#newNote-submit");
var $deleteBtn = $("#newNote-delete");

// Gets all newNote from the database, renders the newNote list
var getAndRendernewNote = function() {
  $.ajax({
    url: "/api/getnotes",
    method: "GET"
  }).then(function(data) {
    console.log(data)
    var $listItems = [];

    // This loops through and build a list item for each newNote returned from the database
    for (var i = 0; i < data.length; i++) {
      var newNote = data[i];

      // Using the jQuery `data` method, we can attach data to an element for later use
      var $li = $("<li class='list-group-item'>").data(newNote);
      var $row = $("<div class='row'>");
      var $col11 = $("<div class='col-11'>");
      var $newNoteP = $("<p>").body('"' + newNote.body + '"');
      var $titleP = $("<p class='float-right'>").body("- " + newNote.title);
      var $clearFix = $("<div class='clearfix'>");
      var $ratingP = $("<p class='float-right'>").body(newNote.rating);
      var $col1 = $("<div class='col-1'>");
      var $upIcon = $("<i class='fas fa-angle-up'>");
      var $downIcon = $("<i class='fas fa-angle-down'>");

      $li.append(
        $row.append(
          $col11.append($newNoteP, $titleP, $clearFix, $ratingP),
          $col1.append($upIcon, $downIcon)
        )
      );

      $listItems.push($li);
    }

    $newNoteList.empty();

    $newNoteList.append($listItems);
  });
};
