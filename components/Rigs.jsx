import {Button} from '@material-ui/core'
import styles from '../styles/nav.module.css'

const debug = require('debug')('hb:components:rigs')

export default function Rigs({rigs, onSelect}) {
  const type = "rig"
  return (
    <div className={styles.container}>
      <h2 className={styles.h2}>Rigs</h2>
      <ul>
        {Object.keys(rigs).map(rig => <li className={styles.li} key={rig}><Button variant="text" onClick={() => onSelect({type, key: rig, json: rigs[rig]})}>{rig}</Button></li>)}
      </ul>
      </div>
  )
}