import React, { Component, PropTypes } from 'react'
import {
  View,
  ListView,
  StyleSheet
} from 'react-native'

const dataSource = new ListView.DataSource({
  getRowData: (dataBlob, sid, rid) => dataBlob[sid][rid],
  getSectionHeaderData: (dataBlob, sid) => dataBlob[sid],
  rowHasChanged: (row1, row2) => row1 !== row2,
  sectionHeaderHasChanged: (s1, s2) => s1 !== s2
})

export default class extends Component {

  static propTypes = {
    data: PropTypes.any,
    needSeparator: PropTypes.bool,
    renderEmptyView: PropTypes.func
  };

  static defaultProps = {
    needSeparator: true
  }

  constructor (props) {
    super(props)
    this.length = 0
    this.state = {
      dataSource: this.cloneWithData(dataSource, props.data)
    }
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.data !== nextProps.data) {
      this.setState({
        dataSource: this.cloneWithData(this.state.dataSource, nextProps.data)
      })
    }
  }

  render () {
    const {renderEmptyView} = this.props
    return (
      this.length > 0
    ? <ListView
        {...this.props}
        ref='listview'
        initialListSize={10}
        pageSize={10}
        removeClippedSubviews={false}
        renderSeparator={this.renderSeparator}
        dataSource={this.state.dataSource}
      />
    : renderEmptyView()
    )
  }

  scrollTo (...args: Array<any>) {
    this.refs.listview.scrollTo(...args)
  }

  getScrollResponder (): any {
    return this.refs.listview.getScrollResponder()
  }

  cloneWithData (dataSource, data) {
    if (!data) {
      this.length = 0
      return dataSource.cloneWithRows([])
    }
    if (Array.isArray(data)) {
      this.length = data.length
      return dataSource.cloneWithRows(data)
    }
    this.length = 0
    for (let day in data) {
      this.length += data[day].length
    }
    return dataSource.cloneWithRowsAndSections(data)
  }

  renderSeparator = (sectionID, rowID) =>
    this.props.needSeparator && <View key={`${sectionID}vs${rowID}`} style={styles.separator} />

}

const styles = StyleSheet.create({
  separator: {
    height: 1,
    backgroundColor: '#eee'
  }
})
