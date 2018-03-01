import React, { Component, PropTypes } from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
	self : {
		backgroundColor: 'lightblue',
		height:50,
		position: 'absolute',
		bottom:0,
		left: 0,
  		right: 0,
		alignItems: 'center',
		justifyContent: 'center',
	}

})

export default class Footer extends Component {
  render() {
    return (
    	<TouchableOpacity style={styles.self} onPress={()=>this.props.onDeleteCompleted()}>
    		<Text>Remove Completed Items </Text>
    	</TouchableOpacity>
	)
  }
}
