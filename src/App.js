import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Backendless from 'backendless';

const APP_ID = 'F35C7212-126B-2730-FF90-1575F3064000';
const API_KEY = '4A3EA4A7-7314-4FEB-FF1A-22F36DDAD800';
Backendless.serverURL = 'https://api.backendless.com';
Backendless.initApp(APP_ID, API_KEY);

const initialState = {
  loading: true,
  message: '',
  error  : null
};

export default class App extends React.Component {
  state = initialState;

  componentDidMount() {
    // Backendless.Data.of('TestTable').save({ foo: 'bar' })
    //  .then(obj => {
    //    const message = 'A data object has been saved in Backendless. Check \'TestTable\' in Backendless Console.' +
    //      `ObjectId = ${obj.objectId}`
	//
    //    this.setState({ message, loading: false })
    //  })
    //  .catch(error => this.setState({ error: `Got an error - ${error}`, loading: false }))
  }

  render() {
    const { error, loading, message } = this.state;

    return (
      <View style={styles.container}>
        <Text>{ loading ? 'DemLeeGram' : message || error } </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
                