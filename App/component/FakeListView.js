import React, { Component, PropTypes } from 'react'
import {
  View,
  ScrollView,
  StyleSheet
} from 'react-native'

export default class extends Component {

  static propTypes = {
    data: PropTypes.object,
    needSeparator: PropTypes.bool,
    renderRow: PropTypes.func,
    renderSectionHeader: PropTypes.func,
    renderEmptyView: PropTypes.func
  };

  static defaultProps = {
    needSeparator: true
  }

  render () {
    const {data, renderEmptyView} = this.props
    let length = 0
    for (let day in this.props.data) {
      length += data[day].length
    }
    console.log('length: ', length)
    return (
        length > 0
      ? <ScrollView>
          {this.renderContent()}
        </ScrollView>
      : renderEmptyView()
    )
  }

  renderContent () {
    const {data, renderRow, renderSectionHeader} = this.props
    let result = []
    for (let item in data) {
      let sectionView = (
        <View key={item}>
        {[
          renderSectionHeader(data[item], item),
          data[item].map((row, index) => renderRow(row, index, this.renderSeparator))
        ]}
        </View>
      )
      result.push(sectionView)
    }
    return result
  }

  renderSeparator = (row, index) =>
    <View key={`${row}vs${index}`} style={styles.separator} />

}

const styles = StyleSheet.create({
  separator: {
    height: 1,
    backgroundColor: '#eee'
  }
})
