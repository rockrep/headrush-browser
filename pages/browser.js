import React, { useState } from 'react'
import Link from 'next/link'
const fs = require('fs')
import { parseCookies } from '../helpers/'
import Blocks from '../components/Blocks'
import Rigs from '../components/Rigs'
import Viewer from '../components/Viewer'
import Footer from '../components/Footer'
import styles from '../styles/browser.module.css'

const debug = require('debug')('hb:pages:browser')

function Browser(props) {
  const { blocks, rigs, headrushRoot } = props
  const [view, setView] = useState()

  const foundData = Object.keys(blocks).length > 0 && Object.keys(rigs).length > 0

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>
        <Link href="/">HeadRush Browser</Link>
      </h1>
      <img className={styles.img} src="./HeadRush_black-logo.png" width="200" />
      {foundData && (
        <div className={styles.content}>
          <div className={styles.nav}>
            <Blocks blocks={blocks} onSelect={setView} />
            <Rigs rigs={rigs} onSelect={setView} />
          </div>
          <div className={styles.viewer}>
            <Viewer view={view} />
          </div>
        </div>
      )}
      {!foundData && (
        <div className={styles.error}>
          <p>
            No data found at <b>{headrushRoot}</b>. Please <Link href="/">change HeadRush root folder</Link>
          </p>
        </div>
      )}
      <Footer />
    </div>
  )
}

export async function getServerSideProps({ req }) {
  debug('getServerSideProps')
  const data = parseCookies(req)
  const hr = data?.headrushRoot ? JSON.parse(data.headrushRoot) : ''

  const blocks = {}
  const rigs = {}
  try {
    if (hr) {
      fs.readdirSync(`${hr}/Blocks`).forEach(block => {
        blocks[block] = {}
        fs.readdirSync(`${hr}/Blocks/${block}`).forEach(preset => {
          const stream = fs.readFileSync(`${hr}/Blocks/${block}/${preset}`)
          const json = JSON.parse(stream) || {}

          blocks[block][preset] = json
        })
      })
      fs.readdirSync(`${hr}/Rigs`).forEach(rig => {
        rigs[rig] = {}
        const stream = fs.readFileSync(`${hr}/Rigs/${rig}`)
        const json = JSON.parse(stream) || {}
        rigs[rig] = json
      })
    }
  } catch (err) {
    // no-op
  }

  return {
    props: {
      blocks,
      rigs,
      headrushRoot: hr || '',
    },
  }
}

export default Browser
