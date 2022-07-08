import { reactive, onMounted } from 'vue'
import { formatParams } from '@/utils/base'

/**
 * @desc 表格逻辑
 * @param isImmediately 是否立即执行
 */
const useTable = (getTableData: Function, tableParams?: Object, isImmediately?: boolean) => {
  const tableData = reactive({
    result: [],
    total: 0,
    loading: false,
  })

  const reqParams = reactive({
    current: 1,
    size: 20,
  })

  const onChangeSize = (size: number) => {
    reqParams.size = size
  }

  const getSourceData = () => {
    tableData.loading = true
    const tempParams = formatParams({ ...tableParams })
    const params = Object.keys(tempParams).length > 0 ? { ...reqParams, ...tableParams } : reqParams
    getTableData(params).then((res: any) => {
      tableData.loading = false
      if (res.code === 200) {
        if (res.data.records.length <= 0 && reqParams.current > 1) {
          reqParams.current -= 1
          getSourceData()
        } else {
          tableData.result = res.data.records
          tableData.total = res.data.total
        }
      }
    })
  }

  /**
   * @desc 重新请求
   */
  const handleReacquire = (page?: number) => {
    if (typeof page === 'number') {
      reqParams.current = page
    }
    getSourceData()
  }

  onMounted(() => {
    if (isImmediately) {
      getSourceData()
    }
  })

  return {
    tableData,
    reqParams,
    onChangeSize,
    handleReacquire,
  }
}

export default useTable
