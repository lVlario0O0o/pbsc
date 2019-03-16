import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {Dark_Grey, White} from '../constant/color';

export default class Header extends Component<Props> {
  render() {
    return (
        <View style={styles.header}>
          <View style={styles.innerHeader}>
            <Text style={styles.apptitle}>Gender Neutral Dating App</Text>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flex: 0.2,
    backgroundColor: White,
    alignItems: 'flex-end',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  innerHeader: {
    flex:1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    height: 60,
    maxWidth: 500,
    backgroundColor: Dark_Grey,
  },
  apptitle: {
    fontFamily: 'Roboto',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left',
    color: White,
    paddingLeft: 16,
  },
});
