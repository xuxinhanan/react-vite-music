import React, { useEffect } from 'react'
import Slider from '@/components/slider'
import RecommendList from '@/components/list'
import Scroll from '@/components/srcoll'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { getBannerList, getRecommendList } from '@/store/recommend'
import Loading from '@/components/loading'

const Content = styled.div`
  position: fixed;
  top: 90px;
  bottom: 0;
  width: 100%;
`

function Recommend(props) {
  const { recommendList, bannerList, enderLoading } = useSelector(
    store => store.recommend
  )
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getBannerList())
    dispatch(getRecommendList())
  }, [])

  return (
    <Content>
      <Scroll className="list">
        <div>
          <Slider bannerList={bannerList}></Slider>
          <RecommendList recommendList={recommendList}></RecommendList>
        </div>
      </Scroll>
      {enderLoading ? <Loading></Loading> : null}
    </Content>
  )
}

export default React.memo(Recommend)
