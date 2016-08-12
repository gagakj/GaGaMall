'use strict';

import React from 'react';

import {
    StyleSheet,
    View,
    Platform,
    ActivityIndicator
} from 'react-native';

class CircleProgress extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
            return (
                <ActivityIndicator
                    animating={true}
                    color='white'
                    style={styles.centering}
                    size='small'
                />
            );
 
    }

}

const styles = StyleSheet.create({
    container: {

    },
    centering: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        width: 40
    }

});

module.exports = CircleProgress;
