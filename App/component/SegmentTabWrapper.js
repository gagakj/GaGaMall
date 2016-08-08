import React, { Component, PropTypes } from 'react'
import SegmentTab from './SegmentTab'
import {
  View
} from 'react-native'

export default class extends Component {
  static propTypes = {
    ...SegmentTab.propTypes,
    tabs: PropTypes.array,
    goToPage: PropTypes.func,
    activeTab: PropTypes.number,
    style: View.propTypes.style
  };

  static defaultProps = { // 返回默认的一些属性值
    tabs: ['One', 'Two'],
    activeTab: 0,
    goToPage () {}
  };

  render () {
    const {tabs, goToPage, activeTab, style} = this.props

    return (
      <View style={[{alignItems: 'center', justifyContent: 'center'}, style]}>
        <SegmentTab
          data={tabs}
          {...this.props}
          selected={activeTab}
          onPress={index => goToPage(index)}/>
      </View>
    )
  }
}
