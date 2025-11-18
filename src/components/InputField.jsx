import { Component } from "react"

class InputField extends Component {
  render() {
    return (
      <input
        className={this.props.className}
        placeholder={this.props.pholder}
      />
    )
  }
}

export default InputField
