class VideoListEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {selected: false};
  }
  render() {
    return (
      <div className="video-list-entry media" key={this.props.key}>
        <div className="media-left media-middle">
          <img className="media-object" src={this.props.video.snippet.thumbnails.default.url} alt="" /></div>
        <div className="media-body">
          <div onClick={this.handleClick.bind(this, this.props.video.id.videoId)} className="video-list-entry-title">{this.props.video.snippet.title}</div>
          <div className="video-list-entry-detail">{this.props.video.snippet.description}</div>
        </div>
      </div>);
  }
  handleClick() {
    this.setState({selected: true});
    
  }
}

// Generally, if you refer to a method without () after it, such as
// onClick={this.handleClick}, you should bind that method


// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoListEntry.propTypes = {
  video: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.VideoListEntry = VideoListEntry;
