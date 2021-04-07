const debug = require('debug')('hb:components:block')

export default function Block({name, json}) {
  debug({json})
  const presetName = Object.keys(json)[0]
  const preset = Object.values(json)[0]
  debug({preset})
  const {content} = preset
  debug({content})
  const {data} = JSON.parse(content)
  debug({data})

  const dataValues = Object.values(data);
  debug({dataValues})
  const { childorder, children } = dataValues[0];
  debug({childorder})
  debug({children})
  return (
    <div>
      <h1>{name}</h1>
      <h2>{presetName}</h2>
      <ul>

      {childorder.map(setting => {
        const child = children[setting];
        const {type, state, string, value} = child
        return (
          <li key={setting}>setting: {setting}: type: {type}, state: {state}, string: {string}, value: {value}</li>
        )
      })}
      </ul>

    </div>
  )
  // return (<div>Hello</div>)
}