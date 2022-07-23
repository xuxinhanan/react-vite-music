import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { getBannerRequest, getRecommendListRequest } from '@/service/recommend'

const initialState = {
  bannerList: [],
  recommendList: [],
  loading: false
}

const getBannerList = createAsyncThunk('getBannerListRequest', async () => {
  const response = await getBannerRequest()
  return response.banners
})

const getRecommendList = createAsyncThunk(
  'getRecommendListRequest',
  async () => {
    const response = await getRecommendListRequest()
    return response.result
  }
)

const recommendReducer = createSlice({
  name: 'recommend',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getBannerList.pending, state => {
        state.loading = true
      })
      .addCase(getBannerList.fulfilled, (state, action) => {
        state.loading = false
        state.bannerList = action.payload
      })
      .addCase(getBannerList.rejected, (state, action) => {
        state.loading = false
        console.log(__filename, '请求错误', action.error)
      })

      .addCase(getRecommendList.pending, state => {
        state.loading = true
      })
      .addCase(getRecommendList.fulfilled, (state, action) => {
        state.loading = false
        state.recommendList = action.payload
      })
      .addCase(getRecommendList.rejected, (state, action) => {
        state.loading = false
        console.log(__filename, '请求错误', action.error)
      })
  }
})

export { getBannerList, getRecommendList }

export default recommendReducer.reducer
