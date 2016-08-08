var ParallaxBackground = require('ParallaxBackground')
var React = require('React')
var ReactNative = require('react-native')
var ViewPager = require('./ViewPager')
var Platform = require('Platform')
import SegmentTab from './SegmentTab'
export const STATUS_BAR_HEIGHT = (Platform.OS === 'ios' ? 20 : 25)
export const NAV_BAR_HEIGHT = (Platform.OS === 'ios' ? 44 : 56)
export const ABOVE_LOLIPOP = Platform.Version && Platform.Version > 19
import {
  Text,
  View,
  Dimensions,
  NativeModules,
  Animated,
  StyleSheet
} from 'react-native'

type Props = {
  title: string;
  selectedSegment?: number;
  selectedSectionColor: string;
  backgroundImage: number;
  backgroundColor: string;
  parallaxContent?: ?ReactElement;
  stickyHeader?: ?ReactElement;
  onSegmentChange?: (segment: number) => void;
  needTransitionTitle: bool;
  children?: any;
};

type State = {
  idx: number;
  anim: Animated.Value;
  stickyHeaderHeight: number;
};

export const EMPTY_CELL_HEIGHT = Dimensions.get('window').height > 600 ? 200 : 150

export default class extends React.Component {
  props: Props;
  state: State;
  _refs: Array<any>;
  _pinned: any;

  static defaultProps = {
    selectedSectionColor: 'rgba(255,255,255,0.5)',
    needTransitionTitle: false
  };

  constructor (props: Props) {
    super(props)

    this.state = {
      idx: this.props.selectedSegment || 0,
      anim: new Animated.Value(0),
      stickyHeaderHeight: 0
    };

    (this: any).renderFakeHeader = this.renderFakeHeader.bind(this);
    (this: any).handleStickyHeaderLayout = this.handleStickyHeaderLayout.bind(this);
    (this: any).handleSelectSegment = this.handleSelectSegment.bind(this)
    this._refs = []
  }

  render () {
    const segments = []
    const content = React.Children.map(this.props.children, (child, idx) => {
      segments.push(child.props.title)
      return React.cloneElement(child, {
        ref: (ref) => { this._refs[idx] = ref },
        onScroll: (e) => this.handleScroll(idx, e),
        style: styles.listView,
        showsVerticalScrollIndicator: false,
        scrollEventThrottle: 16,
        contentInset: {bottom: 49, top: 0},
        automaticallyAdjustContentInsets: false,
        renderHeader: this.renderFakeHeader,
        scrollsToTop: idx === this.state.idx
      })
    })

    // segments 的指示器
    let {stickyHeader} = this.props
    let assistantHeight = STATUS_BAR_HEIGHT + NAV_BAR_HEIGHT
    if (segments.length > 1) {
      assistantHeight = STATUS_BAR_HEIGHT
      stickyHeader = (
        <View style={{alignItems: 'center', justifyContent: 'center', marginBottom: 7}}>
          <SegmentTab
            data={segments}
            titleSize={12}
            borderRadius={13.5}
            horizontalHeight={27}
            horizontalWidth={160}
            selected={this.state.idx}
            activeColor={this.props.selectedSectionColor}
            onPress={this.handleSelectSegment}
          />
          {stickyHeader}
        </View>
      )
    }
    // TODO: Bind to ViewPager animation
    const backgroundShift = segments.length === 1
      ? 0
      : this.state.idx / (segments.length - 1)
    return (
      <View style={styles.container}>
        <View style={styles.headerWrapper}>
          <ParallaxBackground
            minHeight={this.state.stickyHeaderHeight + 64}
            maxHeight={EMPTY_CELL_HEIGHT + this.state.stickyHeaderHeight + assistantHeight}
            offset={this.state.anim}
            backgroundImage={this.props.backgroundImage}
            backgroundShift={backgroundShift}
            backgroundColor={this.props.backgroundColor}>
            {this.renderParallaxContent()}
          </ParallaxBackground>
          <View style={{height: STATUS_BAR_HEIGHT + NAV_BAR_HEIGHT, paddingTop: STATUS_BAR_HEIGHT, alignItems: 'center', justifyContent: 'center'}}>
            {this.renderHeaderTitle()}
          </View>
          {this.renderFixedStickyHeader(stickyHeader)}
        </View>
        <ViewPager
          count={segments.length}
          selectedIndex={this.state.idx}
          onSelectedIndexChange={this.handleSelectSegment}>
          {content}
        </ViewPager>
        {this.renderFloatingStickyHeader(stickyHeader)}
      </View>
    )
  }

  renderParallaxContent () {
    if (this.props.parallaxContent) {
      return this.props.parallaxContent
    }
    return (
      <Text style={styles.parallaxText}>
        {this.props.title}
      </Text>
    )
  }

  renderHeaderTitle (): ?ReactElement { // 导航条标题，有伸缩视图时标题常驻，没有则逐渐出现
    var transform
    if (!this.props.parallaxContent || Platform.OS === 'ios' && this.props.needTransitionTitle) {
      var distance = EMPTY_CELL_HEIGHT - this.state.stickyHeaderHeight
      transform = {
        opacity: this.state.anim.interpolate({
          inputRange: [distance - 20, distance],
          outputRange: [0, 1],
          extrapolate: 'clamp'
        })
      }
    }
    return (
      <Animated.Text style={[styles.headerTitle, transform]}>
        {this.props.title}
      </Animated.Text>
    )
  }

  handleScroll (idx: number, e: any) {
    if (idx !== this.state.idx) {
      return
    }
    let y = 0
    if (Platform.OS === 'ios') {
      this.state.anim.setValue(e.nativeEvent.contentOffset.y)
      const height = EMPTY_CELL_HEIGHT - this.state.stickyHeaderHeight
      y = Math.min(e.nativeEvent.contentOffset.y, height)
    }
    this._refs.forEach((ref, ii) => { // 同步其他几个segmentListView的滑动高度
      if (ii !== idx && ref) {
        ref.scrollTo && ref.scrollTo({y, animated: false})
      }
    })
  }

  renderFakeHeader () { // 给ListView渲染假头部
    if (Platform.OS === 'ios') {
      const height = EMPTY_CELL_HEIGHT - this.state.stickyHeaderHeight
      return (
        <View style={{height}} />
      )
    }
  }

  renderFixedStickyHeader (stickyHeader: ?ReactElement) {
    return <View style={{height: this.state.stickyHeaderHeight}} />
  }

  renderFloatingStickyHeader (stickyHeader: ?ReactElement) {
    if (!stickyHeader || Platform.OS !== 'ios') {
      return
    }
    var opacity = this.state.stickyHeaderHeight === 0 ? 0 : 1
    var transform

    if (!NativeModules.F8Scrolling) {
      var distance = EMPTY_CELL_HEIGHT - this.state.stickyHeaderHeight;
      var translateY = this.state.anim.interpolate({
        inputRange: [0, distance],
        outputRange: [distance, 0],
        extrapolateRight: 'clamp',
      });
      transform = [{translateY}];
    }
    return (
      <Animated.View
        ref={(ref) => { this._pinned = ref }}
        onLayout={this.handleStickyHeaderLayout}
        style={[styles.stickyHeader, {opacity}, {transform}]}>
        {stickyHeader}
      </Animated.View>
    )
  }

  handleStickyHeaderLayout ({nativeEvent: { layout, target }}: any) {
    this.setState({stickyHeaderHeight: layout.height})
  }

  componentWillReceiveProps (nextProps: Props) { // 点击切换segment
    if (typeof nextProps.selectedSegment === 'number' &&
        nextProps.selectedSegment !== this.state.idx) {
      this.setState({idx: nextProps.selectedSegment})
    }
  }

  componentDidUpdate (prevProps: Props, prevState: State) {
    if (!NativeModules.F8Scrolling) {
      return
    }
    if (this.state.idx !== prevState.idx ||
        this.state.stickyHeaderHeight !== prevState.stickyHeaderHeight) {
      var distance = EMPTY_CELL_HEIGHT - this.state.stickyHeaderHeight

      if (this._refs[prevState.idx] && this._refs[prevState.idx].getScrollResponder) {
        const oldScrollViewTag = ReactNative.findNodeHandle(
          this._refs[prevState.idx].getScrollResponder()
        )
        NativeModules.F8Scrolling.unpin(oldScrollViewTag)
      }

      if (this._refs[this.state.idx] && this._refs[this.state.idx].getScrollResponder) {
        const newScrollViewTag = ReactNative.findNodeHandle(
          this._refs[this.state.idx].getScrollResponder()
        )
        const pinnedViewTag = ReactNative.findNodeHandle(this._pinned)
        NativeModules.F8Scrolling.pin(newScrollViewTag, pinnedViewTag, distance)
      }
    }
  }

  handleSelectSegment (idx: number) {
    if (this.state.idx !== idx) {
      const {onSegmentChange} = this.props
      this.setState({idx}, () => onSegmentChange && onSegmentChange(idx))
    }
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  headerWrapper: {
    backgroundColor: 'transparent',
    // FIXME: elevation doesn't seem to work without setting border
    borderRightWidth: 1,
    marginRight: -1,
    borderRightColor: 'transparent'
  },
  headerTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 19
  },
  parallaxText: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    letterSpacing: -1
  },
  stickyHeader: {
    position: 'absolute',
    top: 64,
    left: 0,
    right: 0
  }
})
