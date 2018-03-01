import React, { Component, PropTypes } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const styles = StyleSheet.create({
	container: {
		height: 40,
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingLeft: 10,
		flexDirection: 'row'
	}
})

export default class Checkbox extends Component {
  
  render() {
    const textStyle = this.props.completed ? "line-through" : "none";
    return (
      <TouchableOpacity style={styles.container} onPress={()=>this.props.onPressItem(this.props.index)}>
    
          <Text style={{ textDecorationLine: textStyle}}>
            {this.props.text}
          </Text>

          <TouchableOpacity 
          	onPress={()=>this.props.onDelete(this.props.index)}
          	style={{ paddingRight: 10}} ><Text>X</Text></TouchableOpacity>
    
      </TouchableOpacity>
    );
  }
}
