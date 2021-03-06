const debug = require('debug')('hb:components:rig-block')
import styles from '../styles/rig-block.module.css'
import { blockColor, childParser, suffix } from '../lib'

const RigBlock = ({block, routing, json}) => {
  debug({block})
  if (block === "Chain" || block === "Rig") return null
  if (routing === 'S' && block === "Mix") return null
  // if (routing === 'PS-1') // TODO, others?
  const checkDoubled = block === "Amp" || block === "Cab" || block === "Amp 2" || block === "Cab 2"
  const { childorder, children } = json;

  // filter out doubled amp or cab settings (those with suffix '2') if Doubling.state is falsey
  const order = checkDoubled
    ? children.Doubling.state
      ? childorder
      : childorder.filter(child => !child.endsWith("2") && child !== "DoubleStates")
    : childorder

  const backgroundColor = blockColor(children.Colour);
  const style = { backgroundColor }

  const settings = ['PresetName'].concat(order.sort().filter(o => o !== 'PresetName')).map(setting => <li className={styles.li} key={setting}><b>{setting}</b>: {childParser(children[setting], block === 'IR')}{suffix(setting, block)}</li>)

  return (
    <div className={styles.rigBlock}>
      <h2 className={styles.h2}>{block}</h2>
      <div className={styles.settings} style={style}>
        <ul className={styles.ul}>{settings}</ul>
      </div>
    </div>
  )
}

export default RigBlock