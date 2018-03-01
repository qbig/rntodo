import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
	self: {
		height: 55,
		backgroundColor: 'lightblue',
		justifyContent: 'center',
		alignItems: 'center'
	},
	text: {
		textAlign: 'center'
	}
})

export default class Title extends Component {

  render() {
    return (
    	<View style={styles.self} >
    		<Text style={styles.text}> {this.props.title}</Text>
    	</View>
	)
  }
}
