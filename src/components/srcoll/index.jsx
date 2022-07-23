import React, {
  forwardRef,
  useState,
  useEffect,
  useRef,
  useMemo,
  useImperativeHandle
} from 'react'
import PropTypes from 'prop-types'
import BScroll from 'better-scroll'
import styled from 'styled-components'
import { debounce } from '@/assets/js/utils'

const ScrollContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`

const PullUpLoading = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 5px;
  width: 60px;
  height: 60px;
  margin: auto;
  z-index: 100;
`

export const PullDownLoading = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0px;
  height: 30px;
  margin: auto;
  z-index: 100;
`

const Scroll = forwardRef((props, ref) => {
  const [bScroll, setBScroll] = useState()

  const srcollContainerRef = useRef()

  const {
    direction,
    click,
    refresh,
    pullUpLoading,
    pullDownLoading,
    bounceTop,
    bounceBottom
  } = props

  const { pullUp, pullDown, onScroll } = props

  let pullUpDebounce = useMemo(() => {
    return debounce(pullUp, 500)
  }, [pullUp])

  let pullDownDebounce = useMemo(() => {
    return debounce(pullDown, 500)
  }, [pullDown])

  /**
   * @description: 创建 better-scroll 实例
   */
  useEffect(() => {
    const scroll = new BScroll(srcollContainerRef.current, {
      scrollX: direction === 'horizontal',
      scrollY: direction === 'vertical',
      propTypes: 3,
      click: click,
      bounce: {
        top: bounceTop,
        bottom: bounceBottom
      }
    })
    setBScroll(scroll)
    return () => {
      setBScroll(null)
    }
  }, [])

  /**
   * @description: 给实例绑定 scroll 事件
   */
  useEffect(() => {
    if (!bScroll || !onScroll) return
    bScroll.on('scroll', onScroll)
    return () => {
      bScroll.off('scroll', onScroll)
    }
  }, [onScroll, bScroll])

  /**
   * @description: 进行上拉到底的判断，调用上拉刷新的函数
   */
  useEffect(() => {
    if (!bScroll || !pullUp) return
    const handlePullUp = () => {
      if (bScroll.y <= bScroll.maxScrollY + 100) {
        pullUpDebounce()
      }
    }
    bScroll.on('scrollEnd', handlePullUp)
    return () => {
      bScroll.off('scrollEnd', handlePullUp)
    }
  }, [pullUp, pullDownDebounce, bScroll])

  /**
   * @description: 进行下拉的判断，调用下拉刷新的函数
   */
  useEffect(() => {
    if (!bScroll || !pullDown) return
    const handlePullDown = pos => {
      if (pos.y > 50) {
        pullDownDebounce()
      }
    }
    bScroll.on('touchEnd', handlePullDown)
    return () => {
      bScroll.off('touchEnd', handlePullDown)
    }
  }, [pullDown, pullDownDebounce, bScroll])

  /**
   * @description: 每次重新渲染都要刷新实例，防止无法滚动
   */
  useEffect(() => {
    if (refresh && bScroll) {
      bScroll.refresh()
    }
  })

  /**
   * @description: 和 forwardRef 一起使用，ref 已经在 forWardRef 中默认传入
   * @description: 给外界暴露 refresh、getBScroll 方法
   */
  useImperativeHandle(ref, () => ({
    refresh() {
      if (bScroll) {
        bScroll.refresh()
        bScroll.scrollTo(0, 0)
      }
    },
    getBScroll() {
      if (bScroll) {
        return bScroll
      }
    }
  }))

  const PullUpdisplayStyle = pullUpLoading
    ? { display: '' }
    : {
        display: 'none'
      }

  const PullDowndisplayStyle = pullDownLoading
    ? {
        display: ''
      }
    : {
        display: 'none'
      }

  return (
    <ScrollContainer ref={srcollContainerRef}>
      {props.children}
      {/* 滑到底部加载动画 */}
      {/* <pullUpLoading style={PullUpdisplayStyle}></pullUpLoading> */}
      {/* 顶部下拉刷新动画 */}
      {/* <PullDownLoading style={PullDowndisplayStyle}></PullDownLoading> */}
    </ScrollContainer>
  )
})

Scroll.propTypes = {
  direction: PropTypes.oneOf(['vertical', 'horizontal']), // 滚动的方向
  refresh: PropTypes.bool, // 是否刷新
  onScroll: PropTypes.func, // 滑动触发的回调函数
  pullUp: PropTypes.func, // 上拉加载逻辑
  pullDown: PropTypes.func, // 下拉加载逻辑
  pullUpLoading: PropTypes.bool, // 是否显示上拉 loading 动画
  pullDownLoading: PropTypes.bool, // 是否显示下拉 loading 动画
  bounceTop: PropTypes.bool, // 是否支持向上吸顶
  bounceBottom: PropTypes.bool // 是否支持向下吸底
}

Scroll.defaultProps = {
  direction: 'vertical',
  click: true,
  refresh: true,
  onScroll: null,
  pullUpLoading: false,
  pullDownLoading: false,
  pullUp: null,
  pullDown: null,
  bounceTop: true,
  bounceBottom: true
}

export default Scroll
