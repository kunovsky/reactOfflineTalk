/* HomePageContent.js */

import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Button } from 'native-base';

import s from './HomePageContent.styles';

const HomePageContent = ({ isConnected }) => (
  <View>
    <View style={s.buttonContainerStyle}>
      <Button
        disabled={!isConnected}
        style={[s.button, !isConnected && s.offlineButton]}>
        <Text
          style={[s.buttonText, !isConnected && s.offlineButtonText ]}>
          {isConnected ? 'Online' : 'Offline'}
        </Text>
      </Button>
    </View>
  </View>
);

HomePageContent.propTypes = {
  content: PropTypes.bool.isRequired
};

export default HomePageContent;
