import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './component.module.css'

const AppComponent = (props) => {
  return (
    <div className={styles.container}>
      <img src={props.src} className={` ${projectStyles.thqImage} ${styles.image} `} />
    </div>
  )
}

AppComponent.defaultProps = {
  src: '/playground_assets/jpeg-1100h.jpg',
}

AppComponent.propTypes = {
  src: PropTypes.string,
}

export default AppComponent
