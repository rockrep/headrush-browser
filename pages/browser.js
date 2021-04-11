const fs = require('fs')
const { promisify } = require('util')
import React, { useState } from 'react'
import Link from 'next/link'
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

  const props = { blocks: {}, rigs: {}, headrushRoot: hr || '' }

  if (!hr) {
    return { props }
  }

  debug({ hr })
  const rd = promisify(fs.readdir)
  const rf = promisify(fs.readFile)

  const blockEntries = await rd(`${hr}/Blocks`, {withFileTypes: true})
  const rigs = await rd(`${hr}/Rigs`)

  try {
    for (const entry of blockEntries.filter(b => b.isDirectory())) {
      const { name: block } = entry
      props.blocks[block] = {}
      const presets = await rd(`${hr}/Blocks/${block}`, {withFileTypes: true})
      for (const pEntry of presets.filter(p => p.isDirectory)) {
        const {name: preset} = pEntry
        const stream = await rf(`${hr}/Blocks/${block}/${preset}`)
        const json = JSON.parse(stream) || {}

        props.blocks[block][preset] = json
      }
    }
    for (const rig of rigs.filter(r => r !== '.DS_Store')) {
      props.rigs[rig] = {}
      const stream = await rf(`${hr}/Rigs/${rig}`)
      const json = JSON.parse(stream) || {}
      props.rigs[rig] = json
    }
  } catch (err) {
    debug(err.message)
    // no-op
  }
  // debug({ props })
  return { props }
}

export default Browser
