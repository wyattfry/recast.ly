class App extends React.Component { 
  constructor(props) {
    super(props);
    this.getVideos = this.getVideos.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.state = {videos: window.exampleVideoData, currentVideo: window.exampleVideoData[0]};
  }
  componentDidMount() {
    this.props.searchYouTube({query: 'hamster dance'}, this.getVideos);
  }
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search searchHandler={this.handleSearch} appState={this.state} />
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVideo}/>
          </div>
          <div className="col-md-5">
            <VideoList eventHandler={this.handleClick.bind(this)} videos={this.state.videos}/>
          </div>
        </div>
      </div>);
  }
  handleClick(video) {
    this.setState({currentVideo: video});
  }

  handleSearch(videos) { this.setState({'videos': videos}); }
    
  getVideos(data) {
    this.setState({'videos': data});
  }
}
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
// <div><h5><em>videoList</em> view goes here</h5></div> -->
