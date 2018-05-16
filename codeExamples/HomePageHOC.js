/* HomePageHOC.js */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { withNetworkConnectivity } from 'react-native-offline'; // <- This is where the magic happens
import { compose, mapProps, setPropTypes } from 'recompose';

import HomePageContent from './components/HomePageContent';

const mapStateToProps = props => ({ /* Create mapped props here */ });

const mapDispatchToProps = dispatch => ({ /* Create mapped actions here */ });

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withNetworkConnectivity(), // Chain this HOC to our compose function
  mapProps(({ isConnected }) => ({ isConnected ), // This gives us access to the isConnected boolean
  setPropTypes({ isConnected: PropTypes.bool.isRequired }),
);

const EnhancedWrapper = enhance(props => (<HomePageContent {...props}/>));

export default EnhancedWrapper;
