import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchGIF} from '../actions/index'
import Gif from './gif';

class GifContainer extends Component {
  componentDidMount() {
    this.props.fetchGIF('game of thrones');
  }
  render() {
    let {gifs} = this.props;
    let stuff;
    if (!gifs) {
      stuff = <div>Loading...</div>
    } else {
      stuff = gifs.map(gif => {
        return <Gif key='gifs' data={gif} />;
      });
    }
    return (
      <div className="GifContainer">
        {stuff}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { gifs: state.gifs }
}

export default connect(mapStateToProps, {fetchGIF})(GifContainer);
