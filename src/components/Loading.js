import React from 'react'
import Proptypes from 'prop-types'

const style = {
  fontSize: '35px',
  position: 'absolute',
  left: '0',
  right: '0',
  marginTop: '20px',
  textAlign: 'center',

}

export default class Loading extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      text: props.text
    }
  }

  componentDidMount() {
    const { text, speed } = this.props

    this.interval = window.setInterval(() => {
      this.state.text === `${text}...`
        ? this.setState({text: `${text}...`})
        : this.setState(({ text }) => ({ text: text + '.'}))
    }, speed)
  }

  componentWillUnmount() {
    window.clearInterval(this.interval)
  }

  render() {
    return (
      <h1 style={style}>
        {this.state.text}
      </h1>
    )
  }
}

Loading.propTypes = {
  text: Proptypes.string.isRequired,
  speed: Proptypes.number.isRequired
}

Loading.defaultProps = {
  text: 'Loading',
  speed: 300
}
