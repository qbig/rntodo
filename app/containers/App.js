import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, ScrollView, StyleSheet, TextInput, Text } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Actions } from 'react-native-router-flux'

import { actionCreators } from '../redux/todoRedux'
import Title from '../components/Title'
import Input from '../components/Input'
import List from '../components/List'
import Footer from '../components/Footer'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    borderWidth: 4,
    borderColor: 'blue',

  },
  title: {
    flex: 0.1,
  },
  input: {
    flex: 0.1,
  },
  list: {
    flex: 0.7
  },
  footer: {
    flex: 0.1,
  },
})

const mapStateToProps = (state) => ({
  items: state.items,
})

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch)
}

class App extends Component {
  constructor(props) {
    super(props)
  }

  static propTypes = {
    items: PropTypes.array.isRequired,
    //dispatch: PropTypes.func.isRequired,
  }

  render() {
    return (
      <ScrollView contentContainerStyle={{flex:1}} style={styles.container}>
        <Title style={styles.title} title="Todo List"/>
        <Input style={styles.input} onAdd={(text) => {
            //var action = actionCreators.addItem(text);
            //this.props.dispatch(action)}
            this.props.addItem(text)} // because of 'mapDispatchToProps'
          }
        />
        <List style={styles.list} items={this.props.items} 
          onToggle={(index) => {
            this.props.toggleItemCompletes(index)
          }}
          onDelete={(index) => {
            this.props.removeItem(index)
          }}

        />
        <Footer style={styles.footer} onDeleteCompleted={()=>{
          this.props.removeCompletedItems()
        }} />
      </ScrollView>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
