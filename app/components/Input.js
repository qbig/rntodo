import React, { Component, PropTypes } from 'react'
import { TextInput, View, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
	self: {
		height: 40,
		textAlign: 'left',
		backgroundColor: 'lightgray',
		borderColor: 'gray',
		paddingLeft: 10
	}
})

export default class Input extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
  }

  onSubmit = () => {
  	this.props.onAdd(this.state.text)
  	this.setState({ text: "" })
  }
  
  render() {
    return (
    		<TextInput style={styles.self}
    			onChangeText={(text) => this.setState({text})}
    			value={this.state.text}
    			placeholder = 'Enter an item!'
    			onSubmitEditing={this.onSubmit}
    			multiline={false}  
    		/>
	)
  }
}
