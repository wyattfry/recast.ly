var Search = (props) => (
  <div className="search-bar form-inline">
    <input onChange={ (event) => searchYouTube({query: event.target.value}, props.searchHandler)} className="form-control" type="text" />
    <button onClick={ (event) => searchYouTube({query: event.target.value}, props.searchHandler)} className="btn hidden-sm-down">
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div> 
);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;

// <input onChange={ () => searchYouTube(props.appState.options, props.searchHandler)} className="form-control" type="text" />