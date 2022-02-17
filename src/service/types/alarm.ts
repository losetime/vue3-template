import { IPaging } from './common'

// -------------------------------------- 在线监测告警 -----------------------------------------------

/**
 * @description: 获取在线监测告警列表
 */
export type IGetOnlineMonitorList = IPaging

/**
 * @desc 更新解决方案
 */
export interface IUpdateOnlineMonitorSolution {
  solution: string
}

// -------------------------------------- 辅助控制告警 -----------------------------------------------

/**
 * @description: 获取辅助控制告警列表
 */
export type IGetAssistantControlList = IPaging

/**
 * @desc 更新解决方案
 */
export interface IUpdateAssistantControlSolution {
  solution: string
}
