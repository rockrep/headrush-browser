import Preset from './Preset'
import styles from '../styles/block.module.css'

const Block = ({name, json = {}}) => (
  <div>
    <h1 className={styles.h1}>{name}</h1>
    {Object.keys(json).map(key => <Preset key={key} name={key.replace('.block', '')} preset={json[key]} />)}
  </div>
)

export default Block