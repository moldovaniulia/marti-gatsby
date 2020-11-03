import React from 'react'
import { Link } from 'gatsby'

import Helmet from 'react-helmet'

import AppComponent from '../components/component'
import projectStyles from '../style.module.css'
import styles from './index.module.css'

const Page = () => {
  return (
    <div className={styles.container}>
      <Helmet>
        <title>marti</title>
        <meta property="og:title" content="marti" />
      </Helmet>
      <span className={styles.text}>
        Heading
        <br />
        pop zop
      </span>
      <label>
        lkdsjfl dfs
        <span className={styles.text02}>jnfksd ldsj</span>
        flsd
        <br data-type="br" />
        lkdsjflkds jkdsnfjksdÂ 
      </label>
      <a
        href="https://example.com"
        target="_blank"
        rel="noreferrer noopener"
        className={styles.link}
      >
        <h6 className={` ${projectStyles.thqHeading6} ${projectStyles.thqLink} `}>
          Link
          <br />
          lkdfklds lkdsmfklsdmkÂ 
        </h6>
      </a>
      <p>Label</p>
      <button className={` ${projectStyles.thqButton} ${styles.button} `}>Button</button>
      <button className={` ${projectStyles.thqButton} ${styles.button1} `}>
        ButÂ 
        <span className={styles.text05}>ton</span>
      </button>
      <a
        href="https://example.com"
        target="_blank"
        rel="noreferrer noopener"
        className={projectStyles.thqLink}
      >
        Link
      </a>
      <a
        href="https://example.com"
        target="_blank"
        rel="noreferrer noopener"
        className={projectStyles.thqLink}
      >
        Link
      </a>
      <a
        href="https://example.com"
        target="_blank"
        rel="noreferrer noopener"
        className={` ${projectStyles.thqLink} ${styles.text08} `}
      >
        Link
      </a>
      <h1 className={projectStyles.thqHeading1}>
        Â ldsmflksd
        <Link to="/page1" className={projectStyles.thqLink}>
          kfdsnfklsdn
        </Link>
        fklsdnfklds fd
      </h1>
      <span className={styles.text11}>
        pop top
        <a
          href="https://www.youtube.com/watch?v=bBOo2w2bn_o&amp;t=286s"
          target="_blank"
          rel="noreferrer noopener"
          className={projectStyles.thqLink}
        >
          <br />
          dslfmsdx
        </a>
        tÂ  dsnflksdÂ 
      </span>
      <img
        src="/playground_assets/png-1200h.png"
        className={` ${projectStyles.thqImage} ${styles.image} `}
      />
      <AppComponent src="/playground_assets/png-1200h.png"></AppComponent>
    </div>
  )
}

export default Page
