import React, { Component } from 'react';
import Loader from '../../components/Loader';

class SingleSeries extends Component {
  state = {
    show: null
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    fetch(`http://api.tvmaze.com/shows/${id}?embed-episodes`)
    .then((response) =>  response.json() )
    .then(json => this.setState({ show: json }) );
  }

  render(){
    // console.log(this.props);
    const { show } = this.state;
    console.log(show);

    return(
      <div>
        { show === null && <Loader /> }
        {
          show !== null
          &&
          <div>
            <p>{show.name}</p>
            <p>Premiered: {show.premiered}</p>
            <p>Summary: {show.summary}</p>
            <p>Rating: {show.rating.average}</p>
            <p>Official Site: <a href={show.officialSite} target="_blank"> {show.officialSite} </a></p>
            <p>
              <img alt="the show" src={show.image.medium} />
            </p>
          </div>
        }
      </div>
    )
  }
}

export default SingleSeries;