import React, { useState } from 'react'
const fs = require('fs')
import Blocks from '../components/Blocks'
import Rigs from '../components/Rigs'
import Viewer from '../components/Viewer'
import styles from '../styles/browser.module.css'

const debug = require('debug')('hb:pages:browser')

function Browser(props) {
  const { blocks, rigs } = props

  const [view, setView] = useState()

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Headrush Pedalboard Browser</h1>
      <div className={styles.content}>
        <div className={styles.nav}>
          <Blocks blocks={blocks} onSelect={setView} />
          <Rigs rigs={rigs} onSelect={setView} />
        </div>
        <div className={styles.viewer}>
          <Viewer view={view} />
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps({ query }) {
  const { hr } = query
  const blocks = {}
  const rigs = {}
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

  return {
    props: {
      blocks,
      rigs,
    },
  }
}

export default Browser
