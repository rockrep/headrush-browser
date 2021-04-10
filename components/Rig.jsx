import RigBlock from './RigBlock'
import styles from '../styles/rig.module.css'

const debug = require('debug')('hb:components:rig')

const Rig = ({name, json})=> {
  const shortName = name.replace('.rig', '')
  const {content} = json
  debug({content})

  const contentJson = JSON.parse(content);
  const { data } = contentJson

  const {
    Patch: { childorder: blockOrder, children: blockChildren },
  } = data;

  // TODO- handle layout changes for non-serial signal routing
  const routing = blockChildren?.Chain?.children?.Routing?.string ?? 'S'
  debug({routing})

  // re-order the Output block to the end of the chain
  const orderedBlocks = blockOrder.filter(p => p !== 'Output').concat(["Output"])
  debug({orderedBlocks})

  const rigBlocks = orderedBlocks.map(block => <RigBlock key={block} block={block} routing={routing} json={blockChildren[block]} />)

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>{shortName}</h1>
      <div className={styles.rigBlocks}>{rigBlocks}</div>
    </div>
  )
}

export default Rig