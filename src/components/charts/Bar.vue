<template>
  <div :id="randomId"></div>
</template>

<script setup lang="ts">
import useEcharts from '@/hooks/useEcharts'

const props = defineProps<{
  series: Array<any>
  xAxis?: Array<any>
  yAxis?: Array<any>
}>()

/**
 * @desc 初始化图表
 */
const chartInit = () => {
  destroyInstance()
  onDomInit()
  let option: any = {}
  if (props.xAxis) {
    option = {
      xAxis: {
        type: 'category',
        data: props.xAxis,
      },
      yAxis: [
        {
          type: 'value',
        },
        {
          type: 'value',
        },
      ],
    }
  } else {
    option = {
      xAxis: {
        type: 'value',
      },
      yAxis: {
        type: 'category',
        data: props.yAxis,
        inverse: true,
        axisLabel: {
          formatter: function (name: any) {
            return name.length > 8 ? name.slice(0, 8) + '...' : name
          },
        },
      },
    }
  }
  option.tooltip = {
    trigger: 'axis',
  }
  option.grid = {
    left: '3%',
    right: '2%',
    bottom: '1%',
    top: '10%',
    containLabel: true,
  }
  option.legend = {
    show: true,
    left: 'right',
  }
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
