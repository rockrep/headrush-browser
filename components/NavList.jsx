import {Button} from '@material-ui/core'
import styles from '../styles/nav.module.css'

const debug = require('debug')('hb:components:nav-list')

export default function NavList({list, type, header, onSelect}) {

  const items = Object.keys(list).map(item => 
    <li className={styles.li} key={item}><Button className={styles.button} variant="text" onClick={() => onSelect({type, key: item, json: list[item]})}>{item.replace('.rig', '')}</Button></li>
  )

  return (
    <div className={styles.container}>
      <h2 className={styles.h2}>{header}</h2>
      <ul>
        {items}
      </ul>
      </div>
  )
}