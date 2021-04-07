import {Button} from '@material-ui/core'
import styles from '../styles/nav.module.css'

const debug = require('debug')('hb:components:blocks')

export default function Blocks({blocks, onSelect}) {
  const type = "block"
  return (
    <div className={styles.container}>
      <h2 className={styles.h2}>Blocks</h2>
      <ul>
        {Object.keys(blocks).map(block => <li className={styles.li} key={block}><Button variant="text" onClick={() => onSelect({type, key: block, json: blocks[block]})}>{block}</Button></li>)}
      </ul>
    </div>
  )
}