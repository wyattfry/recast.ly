class App extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {videos: props.videos, currentVideo: props.currentVideo};
  } 
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em> view goes here</h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVideo}/>
          </div>
          <div className="col-md-5">
            <VideoList onVideoListEntryClick={this.handleVideoListEntryClick} videos={this.state.videos}/>
          </div>
        </div>
      </div>);
  }
  handleVideoListEntryClick() {
    console.log('from App.jsx: video clicked');
  }
}
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
// <div><h5><em>videoList</em> view goes here</h5></div> -->
