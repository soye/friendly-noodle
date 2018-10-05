import React from 'react';
import PropTypes from 'prop-types';
import SnakeHeadSprite from '../../assets/images/snake-head-solo.gif';
import styles from './Snake.css';

function Snake(props) {
  const SNAKE_WIDTH = SnakeHeadSprite.naturalWidth;
  const SNAKE_HEIGHT = SnakeHeadSprite.naturalHeight;

  return (
    <div>
      <img
        src={SnakeHeadSprite}
        alt="snake sprite"
        className={styles.snake}
      />
    </div>
  );
}

Snake.propTypes = {
  xPos: PropTypes.number.isRequired,
  yPos: PropTypes.number.isRequired
};

Snake.defaultProps = {

};

export default Snake;
