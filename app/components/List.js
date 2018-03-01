import React, { Component, PropTypes } from 'react'
import { View, Text, FlatList, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'

import Checkbox from './Checkbox'

const styles = StyleSheet.create({
	self: {
		flex:1
	}
})



export default class List extends Component {

  _renderItem = ({item, index}) => (
    <Checkbox
      index={index}
      key={item.id}
      onPressItem={this.props.onToggle}
      onDelete={this.props.onDelete}
      completed={item.completed}
      text={item.text}
    />
  );

  render() {
    return (
    	<FlatList 
    		style={styles.self}
    		data={this.props.items}
        	keyExtractor={(item, index) => "key-"+index}
        	renderItem={this._renderItem}
    	/>
	)
  }
}
