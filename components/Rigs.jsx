import NavList from './NavList'

const Rigs = ({rigs, onSelect}) => (
  <NavList list={rigs} type="rig" header="Rigs" onSelect={onSelect} />
)

export default Rigs