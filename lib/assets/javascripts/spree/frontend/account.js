Spree.fetch_account = function() {
  return $.ajax({
    url: Spree.pathFor("fetch_account_link"),
    success: function(data) {
      return $(data).insertBefore("li#search-bar");
    }
  });
};
