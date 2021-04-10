import NavList from './NavList'

const Blocks = ({blocks, onSelect}) => (
  <NavList list={blocks} type="block" header="Blocks" onSelect={onSelect} />
)

export default Blocks