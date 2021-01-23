import React from 'react';
import PropTypes from 'prop-types';

class DisplayImg extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { photo } = this.props;
    return (
      <>
        <img src={photo} id="displayimg" alt="" />
      </>
    );
  }
}

DisplayImg.propTypes = {
  photo: PropTypes.string.isRequired,
};

export default DisplayImg;
