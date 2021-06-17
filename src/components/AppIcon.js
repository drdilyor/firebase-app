import icons from '@/icons'

export default {
  name: 'AppIcon',
  functional: true,

  props: {
    // Passing as array is only intended as a
    // workaround buefy!! Use string from your code
    icon: {type: [String, Array], required: true},
    size: {type: String, default: '24'}
  },
  render(h, context) {
    const props = context.props
    const size = props.size.match(/(?<num>\d+)/).groups.num
    let icon = typeof props.icon == 'string' ? props.icon : props.icon[1]

    // this allows writing account instead of mdiAccount
    if (!icon.startsWith('mdi')) icon = 'mdi-' + icon

    // convert kebab-case to camelCase
    icon = icon.split('-').map(
      (item, index) => index ? item[0].toUpperCase() + item.slice(1).toLowerCase()
                             : item
    ).join('')

    return h('svg', {attrs: {
      width: size, height: size,
      viewBox: `0 0 24 24`,
    }}, [
      h('path', {attrs: {
        d: icons[icon]
      }}, [])
    ])
  }
}
