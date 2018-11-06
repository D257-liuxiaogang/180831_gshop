/*
使用mockjs提供mock数据接口
 */
import Mock from 'mockjs'
import data from './data'

//返回 goods 的接口
Mock.mock('/goods', {code: 0, data: data.goods})
//返回 ratings 的接口
Mock.mock('/ratings', {code: 0, data: data.ratings})
//返回 info 的接口
Mock.mock('/info', {code: 0, data: data.info})

// 不需要暴露,只需要运行即可
