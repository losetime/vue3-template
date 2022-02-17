<template>
  <a-modal
    v-model:visible="visible"
    :title="title"
    :destroyOnClose="true"
    :afterClose="handleCancel"
    :confirm-loading="confirmLoading"
    @ok="handleConfirm"
    width="600px"
  >
    <a-textarea v-model:value="solution" placeholder="请输入" :rows="4" />
  </a-modal>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { actionTypeEnum } from '@/enums/commonEnum'
import { apiUpdateOnlineMonitorSolution } from '@/service/api/alarm'
import { message } from 'ant-design-vue'

const props = defineProps<{
  handleRefresh: Function
  getSourceData: Function
}>()

const visible = ref<boolean>(false)

const title = ref<string>('建议解决方案')

const solution = ref('')

const handleType = ref<number>(actionTypeEnum.ADD)

/**
 * @desc 初始化对话框
 */
const initModal = (type: number, initInfo: any) => {
  handleType.value = type
  if (type !== actionTypeEnum.ADD) {
    solution.value = initInfo.solution
  }
  visible.value = true
}
// 确认loading
const confirmLoading = ref(false)

/**
 * @desc 确认操作
 */
const handleConfirm = async () => {
  confirmLoading.value = true
  const params = { solution: solution.value }
  const { code } = await apiUpdateOnlineMonitorSolution(params as any)
  confirmLoading.value = false
  if (code === 200) {
    if (handleType.value === actionTypeEnum.ADD) {
      props.handleRefresh()
      message.success('操作成功')
    } else {
      props.getSourceData()
      message.success('操作成功')
    }
    handleCancel()
  }
}

/**
 * @desc 取消操作
 */
const handleCancel = () => {
  visible.value = false
}

defineExpose({
  initModal,
})
</script>
