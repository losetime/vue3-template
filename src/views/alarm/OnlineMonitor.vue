<template>
  <div class="online-monitor-wrapper">
    <div class="handle-wrap">
      配置好的解决方案内容会在数字孪生大屏”告警信息“模块显示，点击具体的告警列表即刻查看相应内容
    </div>
    <div class="table-wrap">
      <ym-table
        rowKey="id"
        :columns="onlineMonitorColumns"
        :getTableList="apiGetOnlineMonitorList"
        :params="searchParams"
        ref="tableInstance"
      >
        <template #action="{ record }">
          <a-space>
            <a-button type="link" size="small" @click="handleEdit(record)">编辑</a-button>
          </a-space>
        </template>
      </ym-table>
    </div>
    <online-monitor-solution ref="detailInstance" :handleReacquire="handleReacquire" />
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import YmTable from '@/components/common/YmTable.vue'
import OnlineMonitorSolution from '@/components/alarm/OnlineMonitorSolution.vue'
import { apiGetOnlineMonitorList } from '@/service/api/alarm'
import { onlineMonitorColumns } from '@/columns/alarm'
import { actionTypeEnum } from '@/enums/commonEnum'

/**
 ********************************* 表格操作 ******************************************
 */

// 表格实例
const tableInstance = ref()

// 搜索参数
const searchParams = reactive({ dsName: '' })

/**
 * @desc 重新获取列表
 */
const handleReacquire = (page?: number) => {
  tableInstance.value.handleReacquire(page)
}

/**
 ********************************* 详情操作 ******************************************
 */

// 详情对话框实例
const detailInstance = ref()

/**
 * @desc 编辑解决方案
 */
const handleEdit = (record: any) => {
  detailInstance.value.initModal(actionTypeEnum.EDIT, record)
}
</script>

<style lang="less" scoped>
.online-monitor-wrapper {
  height: 100%;
  .handle-wrap {
    display: flex;
    justify-content: space-between;
  }
}
</style>
