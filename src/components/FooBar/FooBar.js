import styles from './FooBar.css';

import React, { Component } from 'react';

export default class FooBar extends Component {

  render() {
    return (
      <div className={styles.root}>
        <p className={styles.text}>FooBar</p>
      </div>
    );
  }

};
