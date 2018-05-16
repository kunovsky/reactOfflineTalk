/* HomePageContent.js */

import React from 'react';
import PropTypes from 'prop-types';
import { Text, Button } from 'native-base';

import s from './HomePageContent.styles';

const HomePageContent = ({ isConnected }) => (
  <Button
    disabled={!isConnected}
    style={[s.button, !isConnected && s.offlineButton]}>
    <Text
      style={[s.buttonText, !isConnected && s.offlineButtonText ]}>
      {isConnected ? 'Online' : 'Offline'}
    </Text>
  </Button>
);

HomePageContent.propTypes = {
  isConnected: PropTypes.bool.isRequired
};

export default HomePageContent;
