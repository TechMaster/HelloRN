import React, { Component } from 'react';
import { AppRegistry, Text, TextInput, View } from 'react-native';

export default class PizzaTranslator extends Component {
  constructor(props) {
    super(props);
    this.state = {pizza: ''};  //Tạo một biến lưu trạng thái là text
  }

  render() {
    return (
      <View style={{padding: 10}}>
        <TextInput
          style={{height: 40}}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({pizza: text})}  //Khi người dùng gõ thì cập nhật lại trạng thái text
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.pizza.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>
      </View>
    );
  }
}