import { $http } from '../http/index'

import {
  IGetOnlineMonitorList,
  IGetAssistantControlList,
  IUpdateOnlineMonitorSolution,
  IUpdateAssistantControlSolution,
} from '../types/alarm'

enum Api {
  getOnlineMonitorList = '',
  getAssistantControlList = '',
}

// -------------------------------------- 在线监测告警 -----------------------------------------------

/**
 * @desc: 获取在线监测告警列表
 */
export function apiGetOnlineMonitorList(params: IGetOnlineMonitorList): Promise<any> {
  return $http.request({
    url: Api.getOnlineMonitorList,
    method: 'GET',
    params,
  })
}

/**
 * @desc: 更新告警解决方案
 */
export function apiUpdateOnlineMonitorSolution(params: IUpdateOnlineMonitorSolution): Promise<any> {
  return $http.request({
    url: Api.getOnlineMonitorList,
    method: 'GET',
    params,
  })
}

// -------------------------------------- 辅助控制告警 -----------------------------------------------

/**
 * @desc: 获取在线监测告警列表
 */
export function apiGetAssistantControlList(params: IGetAssistantControlList): Promise<any> {
  return $http.request({
    url: Api.getAssistantControlList,
    method: 'GET',
    params,
  })
}

/**
 * @desc: 更新告警解决方案
 */
export function apiUpdateAssistantControlSolution(params: IUpdateAssistantControlSolution): Promise<any> {
  return $http.request({
    url: Api.getOnlineMonitorList,
    method: 'GET',
    params,
  })
}
