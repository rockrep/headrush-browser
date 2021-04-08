const debug = require('debug')('hb:components:preset')
import styles from '../styles/preset.module.css'
import {childParser} from '../lib/utils'

export default function Preset({name, preset}) {
  const {content} = preset
  const {data} = JSON.parse(content)
  const dataValues = Object.values(data)
  const { childorder, children } = dataValues[0]

  const settings = childorder.map(setting => <li className={styles.li} key={setting}><b>{setting}</b>: {childParser(children[setting])}</li>)

  return (
    <div className={styles.preset}>
      <h2 className={styles.name}>{name}</h2>
      <ul className={styles.ul}>{settings}</ul>
    </div>
  )
}
