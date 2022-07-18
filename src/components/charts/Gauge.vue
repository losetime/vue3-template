<template>
  <div :id="randomId"></div>
</template>

<script setup lang="ts">
import { watch } from 'vue'
import useEcharts from '@/hooks/useEcharts'

const props = defineProps<{
  series: Array<any>
}>()

watch(
  () => props.series,
  () => {
    if (props.series.length > 0) {
      destroyInstance()
      chartInit()
    }
  },
)

/**
 * @desc 初始化图表
 */
const chartInit = () => {
  destroyInstance()
  onDomInit()
  let option: any = {}
  option.color = colorsEnum
  option.series = props.series
  option && chartInstance.value.setOption(option)
}

const { chartInstance, randomId, colorsEnum, onDomInit, destroyInstance } = useEcharts(chartInit, props.series)

defineExpose({
  chartInit,
  destroyInstance,
})
</script>
