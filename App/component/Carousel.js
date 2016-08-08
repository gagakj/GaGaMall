import React, {PropTypes, Component} from 'react'
import ViewPager from './ViewPager'
import {
  StyleSheet
} from 'react-native'

/*
 * 本质就是一个只显示3个内容的ViewPager
 */
export default class extends Component {
  static propTypes = {
    count: PropTypes.number,
    selectedIndex: PropTypes.number,
    onSelectedIndexChange: PropTypes.func,
    renderCard: PropTypes.func,
    style: PropTypes.any
  };

  render () {
    let cards = []
    const {count, selectedIndex, renderCard} = this.props

    for (let i = 0; i < count; i++) {
      let content = null
      if (Math.abs(i - selectedIndex) < 2) { // 只渲染当前页面以及左右共计3个View
        content = renderCard(i)
      }
      cards.push(content)
    }
    return (
      <ViewPager style={styles.carousel} {...this.props} bounces>
        {cards}
      </ViewPager>
    )
  }
}

// overflow是一个对子组件在屏幕外时性能相关的属性
var styles = StyleSheet.create({
  carousel: {
    margin: 10,
    marginTop: 5,
    overflow: 'visible',
    backgroundColor: '#6ec0df'
  }
})
