<template>
  <div :id="randomId"></div>
</template>

<script setup lang="ts">
import { watch } from 'vue'
import useEcharts from '@/hooks/useEcharts'

const props = defineProps<{
  series: any
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

const formattValue = (val: string) => {
  return val ? parseInt(val) : 0
}

/**
 * @desc 饼图图例处理
 */
const handlePieLegend = () => {
  return {
    type: 'scroll',
    orient: 'vertical',
    right: 0,
    bottom: 10,
    pageIconColor: '#219F94',
    pageIconInactiveColor: '#219F94',
    formatter: function (name: string) {
      // 获取legend显示内容
      let data = props.series[0].data //你的数据
      let total = 0 // 数据综合
      let currentValue = 0
      for (let i = 0, l = data.length; i < l; i++) {
        total += formattValue(data[i].value)
        if (data[i].name == name) {
          currentValue = formattValue(data[i].value)
        }
      }
      const rate = ((currentValue / total) * 100).toFixed(1)
      return [
        '{a|' + echarts.format.truncateText(name, 80, '14px Microsoft Yahei', '…', {}) + '}',
        '{b|' + rate + '%}',
        '{x|' + currentValue + '}',
      ].join(' ')
    },
    tooltip: {
      show: true,
    },
    textStyle: {
      rich: {
        a: {
          color: 'rgba(0, 0, 0, 0.85)',
          width: 80,
          align: 'left',
        },
        b: {
          width: 50,
          align: 'left',
          color: 'rgba(0, 0, 0, 0.85)',
        },
        x: {
          width: 30,
          align: 'left',
          color: 'rgba(0, 0, 0, 0.85)',
        },
      },
    },
  }
}

/**
 * @desc 初始化图表
 */
const chartInit = () => {
  destroyInstance()
  onDomInit()
  const option: any = {}
  option.tooltip = {
    trigger: 'item',
  }
  option.legend = handlePieLegend()
  option.color = colorsEnum
  option.series = props.series
  option && chartInstance.value.setOption(option)
}

const { echarts, chartInstance, randomId, colorsEnum, onDomInit, destroyInstance } = useEcharts(chartInit, props.series)

defineExpose({
  chartInit,
  destroyInstance,
})
</script>
