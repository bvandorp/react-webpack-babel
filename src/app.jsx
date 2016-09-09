import 'foundation-sites/dist/foundation.min.css';
import styles from './index.scss';
import React from 'react';

export default class App extends React.Component {
  render() {
    return (
      <div className="small-4 small-offset-4">
        <h1>It Works!</h1>
        <p>This React project just works including <span className={styles.blueBg}>module</span> local styles.</p>
        <p>Global bootstrap css import works too as you can see on the following button.</p>
        <p><a className="button">Enjoy!</a></p>
      </div>
    )
  }
}
