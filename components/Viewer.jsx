import Block from './Block'
import Rig from './Rig'
import styles from '../styles/viewer.module.css'

export default function Viewer({view}) {
  const {type, key, json} = view || {}
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Viewer</h1>
      {type === 'rig' && <Rig name={key} json={json} />}
      {type === 'block' && <Block name={key} json={json} />}
    </div>
  )
}