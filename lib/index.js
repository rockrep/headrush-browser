const debug = require('debug')('hb:lib')

const childParser = ({ type, state, string, value }, isIR = false) => {
  // debug({ type, state, value, string })
  switch (type) {
    case 1:
      return state === true ? 'ON' : 'OFF'
    default: {
      if (Number.isInteger(value)) return value
      if (!isNaN(parseFloat(value))) return parseFloat(value).toFixed(2)
      if (isIR) {
        return string
      }
      return string
    }
  }
}

exports.childParser = childParser

const suffix = (setting, block) => {
  if (setting.match(/Delay/) && block.match(/Tape Echo/)) return ''
  if (setting.match(/(Gain|RigVolume|Thresh|Knee)/)) return ' dB'
  if (setting.match(/(Freq|HiCut|LoCut|Rate|LFOSpeed)/)) return ' Hz'
  if (setting.match(/(Release|PreDelay|Delay)/)) return ' ms'
  if (setting.match(/(Stereo)/)) return ' deg'
  if (setting.match(/PresetName/)) return ''
  if (setting.match(/(Drive|Tone|Level|Pres|Bass|Mid|Treb|Master|Mix|Depth|Feedback|Volume|MinVolume|Decay|Width|Wow|Tilt)/)) return ' %'
  if (setting.match(/Ratio/)) return ' : 1'
  return ''
}
exports.suffix = suffix

const blockColor = colorSetting => {
  if (colorSetting) {
    const { type, value, string, state } = colorSetting
    hrColor = childParser({ type, state, string, value })
    switch (hrColor) {
      case 'Yellow':
        return 'lightgoldenrodyellow'
      case 'Orange':
        return 'orange'
      case 'Blue':
        return 'cornflowerblue'
      case 'Green':
        return 'lightgreen'
      case 'Red':
        return 'salmon'
      case 'Purple':
        return 'mediumpurple'
      case 'Pink':
        return 'pink'
      case 'Dark Green':
        return 'darkseagreen'
      case 'Light Blue':
        return 'lightblue'
      default:
        return 'white'
    }
  }

  return 'white'
}

exports.blockColor = blockColor
