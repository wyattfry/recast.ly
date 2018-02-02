var searchYouTube = function (options, callback) {
  // TODO
  
  if (options !== undefined) {
    $.ajax({
      type: 'GET',
      url: options.url || 'https://www.googleapis.com/youtube/v3/search',
      data: {
        key: options.key || window.YOUTUBE_API_KEY,
        q: options.query || 'surfing',
        part: 'snippet',
        videoEmbeddable: true,
        type: 'video',
        maxResults: options.max || 5
      },
      success: function(data) {
        callback(data.items);
      },
      error: function(event) {
        console.log(event);
      }}
    );
  }
};


window.searchYouTube = searchYouTube;
