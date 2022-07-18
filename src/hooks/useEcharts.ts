import { ref, onMounted, computed, watch } from 'vue'
import * as echarts from 'echarts'
import { useStore } from '@/store'
import { nanoid } from 'nanoid'
import { colorsEnum } from '@/enums/commonEnum'

/**
 * @desc 表格逻辑
 * @param isImmediately 是否立即执行
 */
const useEcharts = (chartInit: Function, series: Array<any>) => {
  const store = useStore()

  // 图表实例
  const chartInstance = ref<any>(null)

  const sidebarStatus = computed(() => store.state.sidebarStatus)

  // 生成随机数Id
  const randomId = computed(() => nanoid())

  watch(
    () => sidebarStatus.value,
    () => {
      const timeout = setTimeout(() => {
        destroyInstance()
        chartInit()
        clearTimeout(timeout)
      }, 200)
    },
  )

  onMounted(() => {
    if (Array.isArray(series) && series.length > 0) {
      chartInit()
    }
    window.addEventListener('resize', function () {
      const timeout = setTimeout(() => {
        destroyInstance()
        chartInit()
        clearTimeout(timeout)
      }, 200)
    })
  })

  /**
   * @desc 初始化dom
   */
  const onDomInit = () => {
    const chartDom: any = document.getElementById(randomId.value)
    const parentNode = chartDom.parentNode
    const paddingTop = parseInt(getComputedStyle(parentNode)['paddingTop'].slice(0, -2))
    const paddingLeft = parseInt(getComputedStyle(parentNode)['paddingLeft'].slice(0, -2))
    chartDom.style.height = parentNode.clientHeight - paddingTop * 2 + 'px'
    chartDom.style.width = parentNode.clientWidth - paddingLeft * 2 + 'px'
    chartInstance.value = echarts.init(chartDom)
  }

  /**
   * @desc 销毁实例
   */
  const destroyInstance = () => {
    if (chartInstance.value) {
      chartInstance.value.dispose()
      chartInstance.value = null
    }
  }

  return {
    echarts,
    chartInstance,
    randomId,
    colorsEnum,
    onDomInit,
    destroyInstance,
  }
}

export default useEcharts
