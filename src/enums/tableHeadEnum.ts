// -------------------------------------- 数据汇聚 -----------------------------------------------

// 格式化任务状态
const formatJobStatus = (status: string) => {
  switch (status) {
    case '0':
      return '成功'
    case '1':
      return '失败'
    case '2':
      return '待运行'
    case '3':
      return '运行中'
    default:
      return '--'
  }
}

// 汇聚概况-异常任务监控
export const taskAbnormalMonitorColumns = [
  {
    title: '资源名称',
    dataIndex: 'aggName',
    key: 'aggName',
    width: 160,
  },
  {
    title: '已同步数据/应同步数据',
    key: 'slotOne',
    width: 180,
  },
  {
    title: '开始时间',
    key: 'execDate',
    dataIndex: 'execDate',
    width: 160,
  },
  {
    title: '任务状态',
    key: 'taskStatus',
    dataIndex: 'taskStatus',
  },
  {
    title: '运行日志',
    key: 'action',
    align: 'center',
  },
]

// 汇聚概况-API推送异常信息
export const apiPushAbnormalColumns = [
  {
    title: '表名',
    dataIndex: 'tableName',
    key: 'tableName',
  },
  {
    title: '接收量/推送量',
    key: 'slotOne',
  },
  {
    title: '推送时间',
    key: 'pushTime',
    dataIndex: 'pushTime',
  },
  {
    title: '运行日志',
    key: 'action',
    align: 'center',
  },
]

// 数据源
export const dataSourceColumns = [
  {
    title: '序号',
    key: 'serialNumber',
    width: 100,
  },
  {
    title: '数据名称',
    dataIndex: 'dsName',
    key: 'dsName',
  },
  {
    title: '数据源类型',
    key: 'dsType',
    dataIndex: 'dsType',
  },
  {
    title: '主机/IP',
    key: 'host',
    dataIndex: 'host',
  },
  {
    title: '服务端口',
    key: 'port',
    dataIndex: 'port',
  },
  {
    title: '数据库类别',
    key: 'type',
    customRender: ({ record }: { record: any }) => (record.type == '0' ? '源' : '目标'),
  },
  {
    title: '创建时间',
    key: 'createTime',
    dataIndex: 'createTime',
  },
  {
    title: '操作',
    key: 'action',
    align: 'center',
  },
]

// 数据汇入
export const dataAffluxColumns = [
  {
    title: '序号',
    key: 'serialNumber',
    width: 100,
  },
  {
    title: '资源名称',
    dataIndex: 'aggName',
    key: 'aggName',
  },
  {
    title: '资源类型',
    key: 'dsType',
    dataIndex: 'dsType',
    width: 120,
  },
  {
    title: '数据源名称',
    key: 'destDb',
    dataIndex: 'destDb',
    width: 120,
  },
  {
    title: '源表',
    key: 'srcTable',
    dataIndex: 'srcTable',
  },
  {
    title: '目标表',
    key: 'destTable',
    dataIndex: 'destTable',
  },
  {
    title: '是否增量',
    key: 'increment',
    customRender: ({ record }: { record: any }) => (record.increment == 0 ? '是' : '否'),
    width: 100,
  },
  {
    title: '操作',
    key: 'action',
    align: 'center',
  },
]

// 任务调度
export const convergenceTaskScheduleColumns = [
  {
    title: '序号',
    key: 'serialNumber',
    width: 100,
  },
  {
    title: '汇聚名称',
    dataIndex: 'aggConfigName',
    key: 'aggConfigName',
  },
  {
    title: 'Cron表达式',
    key: 'cron',
    dataIndex: 'cron',
  },
  {
    title: '任务状态',
    key: 'slotOne',
  },
  {
    title: '创建时间',
    key: 'createTime',
    dataIndex: 'createTime',
  },
  {
    title: '操作',
    key: 'action',
    align: 'center',
  },
]

// 任务监控
export const convergenceTaskMonitorColumns = [
  {
    title: '序号',
    key: 'serialNumber',
    width: 100,
  },
  {
    title: '资源名称',
    dataIndex: 'aggName',
    key: 'aggName',
  },
  {
    title: '资源类型',
    key: 'dsType',
    dataIndex: 'dsType',
  },
  {
    title: '数据源名称',
    key: 'dsName',
    dataIndex: 'dsName',
  },
  {
    title: '是否增量',
    key: 'increment',
    dataIndex: 'increment',
  },
  {
    title: '运行时长',
    key: 'durationTimeFormat',
    dataIndex: 'durationTimeFormat',
  },
  {
    title: '开始时间',
    key: 'startTime',
    dataIndex: 'startTime',
  },
  {
    title: '结束时间',
    key: 'endTime',
    dataIndex: 'endTime',
  },
  {
    title: '任务状态',
    key: 'execStatus',
    customRender: ({ record }: { record: any }) => formatJobStatus(record.execStatus),
  },
  {
    title: '应同步数据量',
    key: 'toImportAmount',
    dataIndex: 'toImportAmount',
  },
  {
    title: '已同步数据量',
    key: 'importedAmount',
    dataIndex: 'importedAmount',
  },
  {
    title: '操作',
    key: 'action',
    align: 'center',
  },
]

// API推送接入
export const apiPushAccessColumns = [
  {
    title: '序号',
    key: 'serialNumber',
    width: 100,
  },
  {
    title: '工程名称',
    dataIndex: 'projectName',
    key: 'projectName',
  },
  {
    title: '工程ID',
    key: 'projectId',
    dataIndex: 'projectId',
  },
  {
    title: '版本信息',
    key: 'version',
    dataIndex: 'version',
  },
  {
    title: '表数量',
    key: 'tableQuantity',
    dataIndex: 'tableQuantity',
  },
  {
    title: '创建时间',
    key: 'createTime',
    dataIndex: 'createTime',
  },
  {
    title: '操作',
    key: 'action',
    align: 'center',
  },
]

// API推送监控
export const apiPushMonitorColumns = [
  {
    title: '序号',
    key: 'serialNumber',
    width: 100,
  },
  {
    title: '表名',
    dataIndex: 'tableName',
    key: 'tableName',
  },
  {
    title: '表名中文注释',
    key: 'tableComment',
    dataIndex: 'tableComment',
  },
  {
    title: '工程名',
    key: 'projectName',
    dataIndex: 'projectName',
  },
  {
    title: '接收量/推送量',
    key: 'pushRate',
    customRender: ({ record }: { record: any }) => `${record.accessQuantity}/${record.pushQuantity}`,
  },
  {
    title: '推送时间',
    key: 'pushTime',
    dataIndex: 'pushTime',
  },
  {
    title: '推送规则',
    key: 'pushRule',
    dataIndex: 'pushRule',
  },
  {
    title: '操作',
    key: 'action',
    align: 'center',
  },
]

// -------------------------------------- 数据标准化 -----------------------------------------------

// 标准化概况-近7日异常任务监控
export const day7taskAbnormalMonitorColumns = [
  {
    title: '表名',
    dataIndex: 'srcTable',
    key: 'srcTable',
  },
  {
    title: '数据库',
    key: 'dbName',
    dataIndex: 'dbName',
  },
  {
    title: '任务开始时间',
    key: 'startTime',
    dataIndex: 'startTime',
  },
  {
    title: '任务结束时间',
    key: 'endTime',
    dataIndex: 'endTime',
  },
  {
    title: '运行结果',
    key: 'execStatus',
    dataIndex: 'execStatus',
  },
]

// 标准化配置
export const standardizedConfigColumns = [
  {
    title: '序号',
    key: 'serialNumber',
    width: 100,
  },
  {
    title: '表名',
    dataIndex: 'srcTable',
    key: 'srcTable',
  },
  {
    title: '数据库',
    key: 'srcDbName',
    dataIndex: 'srcDbName',
  },
  {
    title: '创建时间',
    key: 'createTime',
    dataIndex: 'createTime',
  },
  {
    title: '操作',
    key: 'action',
    align: 'center',
  },
]

// 标准化配置详情
export const configDetailColumns = [
  {
    title: '序号',
    key: 'slotOne',
    align: 'center',
  },
  {
    title: '字段名',
    key: 'slotTwo',
    align: 'center',
    width: 150,
  },
  {
    title: '字段中文注释',
    key: 'srcColDesc',
    align: 'center',
    dataIndex: 'srcColDesc',
  },
  {
    title: '字段类型',
    key: 'srcColType',
    align: 'center',
    dataIndex: 'srcColType',
  },
  {
    title: '规则',
    key: 'slotThree',
    width: 400,
  },
  {
    title: '操作',
    key: 'action',
    align: 'center',
  },
]

// 任务调度
export const standardizedTaskScheduleColumns = [
  {
    title: '序号',
    key: 'serialNumber',
    width: 100,
  },
  {
    title: '表名',
    dataIndex: 'srcTable',
    key: 'srcTable',
  },
  {
    title: 'Cron表达式',
    key: 'cron',
    dataIndex: 'cron',
  },
  {
    title: '任务状态',
    key: 'slotOne',
  },
  {
    title: '创建时间',
    key: 'createTime',
    dataIndex: 'createTime',
  },
  {
    title: '操作',
    key: 'action',
    align: 'center',
  },
]

// 任务监控
export const standardizedTaskMonitorColumns = [
  {
    title: '序号',
    key: 'serialNumber',
    width: 100,
  },
  {
    title: '表名',
    dataIndex: 'srcTable',
    key: 'srcTable',
  },
  {
    title: '数据库',
    key: 'srcDbName',
    dataIndex: 'srcDbName',
  },
  {
    title: '运行时长',
    key: 'durationTimeFormat',
    dataIndex: 'durationTimeFormat',
  },
  {
    title: '开始时间',
    key: 'startTime',
    dataIndex: 'startTime',
  },
  {
    title: '结束时间',
    key: 'endTime',
    dataIndex: 'endTime',
  },
  {
    title: '任务状态',
    key: 'execStatus',
    customRender: ({ record }: { record: any }) => formatJobStatus(record.execStatus),
  },
  {
    title: '操作',
    key: 'action',
    align: 'center',
  },
]

// -------------------------------------- 数据开发 -----------------------------------------------

// 模型概况-近7日异常任务监控
export const day7ModelRunAbnormalColumns = [
  {
    title: '模型名称',
    dataIndex: 'scriptName',
    key: 'scriptName',
  },
  {
    title: '运行时长',
    key: 'durationTimeFormat',
    dataIndex: 'durationTimeFormat',
  },
  {
    title: '开始时间',
    key: 'startTime',
    dataIndex: 'startTime',
  },
  {
    title: '结束时间',
    key: 'endTime',
    dataIndex: 'endTime',
  },
  {
    title: '任务状态',
    key: 'execStatus',
    dataIndex: 'execStatus',
  },
  {
    title: '运行日志',
    key: 'action',
    align: 'center',
  },
]

// 流程中心
export const flowCenterColumns = [
  {
    title: '序号',
    key: 'serialNumber',
    width: 100,
  },
  {
    title: '流程名称',
    key: 'flowName',
    dataIndex: 'flowName',
  },
  {
    title: '发布状态',
    key: 'status',
    customRender: ({ record }: { record: any }) => (record.status === '0' ? '未发布' : '已发布'),
  },
  {
    title: '创建时间',
    key: 'createTime',
    dataIndex: 'createTime',
  },
  {
    title: '操作',
    key: 'action',
  },
]

// 任务调度
export const developmentTaskScheduleColumns = [
  {
    title: '序号',
    key: 'serialNumber',
    width: 100,
  },
  {
    title: '模型/流程名称',
    key: 'scriptName',
    customRender: ({ record }: { record: any }) => (record.type === '0' ? record.scriptName : record.flowName),
  },
  {
    title: 'Cron表达式',
    key: 'cron',
    dataIndex: 'cron',
  },
  {
    title: '任务状态',
    key: 'slotOne',
  },
  {
    title: '创建时间',
    key: 'createTime',
    dataIndex: 'createTime',
  },
  {
    title: '操作',
    key: 'action',
    align: 'center',
  },
]

// 任务监控
export const developmentTaskMonitorColumns = [
  {
    title: '序号',
    key: 'serialNumber',
    width: 100,
  },
  {
    title: '模型/流程名称',
    dataIndex: 'scriptName',
    customRender: ({ record }: { record: any }) => (record.type === '0' ? record.scriptName : record.flowName),
  },
  {
    title: '运行时长',
    key: 'durationTimeFormat',
    dataIndex: 'durationTimeFormat',
  },
  {
    title: '开始时间',
    key: 'startTime',
    dataIndex: 'startTime',
  },
  {
    title: '结束时间',
    key: 'endTime',
    dataIndex: 'endTime',
  },
  {
    title: '任务状态',
    key: 'execStatus',
    customRender: ({ record }: { record: any }) => formatJobStatus(record.execStatus),
  },
  {
    title: '操作',
    key: 'action',
    align: 'center',
  },
]

// 节点列表明细
export const nodeListColumns = [
  {
    title: '序号',
    key: 'serialNumber',
    width: 100,
  },
  {
    title: '节点名称',
    key: 'flowNodeName',
    dataIndex: 'flowNodeName',
  },
  {
    title: '模型名称',
    key: 'scriptName',
    dataIndex: 'scriptName',
  },
  {
    title: '运行时长',
    key: 'durationTimeFormat',
    dataIndex: 'durationTimeFormat',
  },
  {
    title: '开始时间',
    key: 'startTime',
    dataIndex: 'startTime',
  },
  {
    title: '结束时间',
    key: 'endTime',
    dataIndex: 'endTime',
  },
  {
    title: '任务状态',
    key: 'slotOne',
  },
  {
    title: '操作',
    key: 'action',
    align: 'center',
  },
]

// -------------------------------------- 数据共享 -----------------------------------------------

// 数据服务概况-近24小时各API调用频次
export const apiInvokeFrequencyColumns = [
  {
    title: '资源名称',
    dataIndex: 'srcName',
    key: 'srcName',
  },
  {
    title: '关联表',
    key: 'applyTable',
    dataIndex: 'applyTable',
  },
  {
    title: '开发者',
    key: 'applyUser',
    dataIndex: 'applyUser',
    width: 80,
  },
  {
    title: '调用频次',
    key: 'num',
    dataIndex: 'num',
    width: 80,
  },
]

// 数据服务概况-API调用异常明细
export const apiInvokeAbnormalColumns = [
  {
    title: '资源名称',
    dataIndex: 'srcName',
    key: 'srcName',
  },
  {
    title: '关联表',
    key: 'applyTable',
    dataIndex: 'applyTable',
  },
  {
    title: '申请账户',
    key: 'applyUser',
    dataIndex: 'applyUser',
  },
  {
    title: '调用时间',
    key: 'createTime',
    dataIndex: 'createTime',
  },
  {
    title: '调用结果',
    key: 'status',
    dataIndex: 'status',
  },
  {
    title: '日志',
    key: 'action',
    align: 'center',
  },
]

// 数据共享-申请服务已通过
export const applyServiceApprovedColumns = [
  {
    title: '申请表名',
    dataIndex: 'applyTable',
    key: 'applyTable',
  },
  {
    title: 'MAC',
    key: 'mac',
    dataIndex: 'mac',
  },
  {
    title: 'IP',
    key: 'host',
    dataIndex: 'host',
  },
  {
    title: '请求地址',
    key: 'url',
    dataIndex: 'url',
  },
  {
    title: 'KEY',
    key: 'secretkey',
    dataIndex: 'secretkey',
  },
  {
    title: '审核时间',
    key: 'approverTime',
    dataIndex: 'approverTime',
  },
  {
    title: '操作',
    key: 'action',
    align: 'center',
  },
]

// 数据共享-申请服务已驳回
export const applyServiceRejectedColumns = [
  {
    title: '申请表名',
    dataIndex: 'applyTable',
    key: 'applyTable',
  },
  {
    title: 'MAC',
    key: 'mac',
    dataIndex: 'mac',
  },
  {
    title: 'IP',
    key: 'host',
    dataIndex: 'host',
  },
  {
    title: '参数',
    key: 'queryCondition',
    dataIndex: 'queryCondition',
  },
  {
    title: '申请原因',
    key: 'applyCause',
    dataIndex: 'applyCause',
  },
  {
    title: '审核时间',
    key: 'approverTime',
    dataIndex: 'approverTime',
  },
  {
    title: '审核备注',
    key: 'approverDesc',
    dataIndex: 'approverDesc',
  },
  {
    title: '操作',
    key: 'action',
    align: 'center',
  },
]

// 数据共享-申请服务审核中
export const applyServiceUnderReviewColumns = [
  {
    title: '申请表名',
    dataIndex: 'applyTable',
    key: 'applyTable',
  },
  {
    title: 'MAC',
    key: 'mac',
    dataIndex: 'mac',
  },
  {
    title: 'IP',
    key: 'host',
    dataIndex: 'host',
  },
  {
    title: '参数',
    key: 'queryCondition',
    dataIndex: 'queryCondition',
  },
  {
    title: '申请原因',
    key: 'applyCause',
    dataIndex: 'applyCause',
  },
  {
    title: '审请时间',
    key: 'applyTime',
    dataIndex: 'applyTime',
  },
  {
    title: '申请人',
    key: 'applyName',
    dataIndex: 'applyName',
  },
  {
    title: '操作',
    key: 'action',
    align: 'center',
  },
]

// 数据共享-API调用日志
export const apiCallLogColumns = [
  {
    title: '资源名称',
    dataIndex: 'srcName',
    key: 'srcName',
  },
  {
    title: '关联表',
    key: 'applyTable',
    dataIndex: 'applyTable',
  },
  {
    title: '申请账户',
    key: 'applyUser',
    dataIndex: 'applyUser',
  },
  {
    title: '调用时间',
    key: 'createTime',
    dataIndex: 'createTime',
  },
  {
    title: '调用结果',
    key: 'status',
    customRender: ({ record }: { record: any }) => (record.status === '0' ? '失败' : '成功'),
  },
  {
    title: '日志',
    key: 'action',
    align: 'center',
  },
]

// -------------------------------------- 数据智能 -----------------------------------------------

// 数据智能-数据智能
export const dataIntelligenceColumns = [
  {
    title: '序号',
    key: 'serialNumber',
    width: 100,
  },
  {
    title: '专题名称',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '创建时间',
    key: 'createTime',
    dataIndex: 'createTime',
  },
  {
    title: '操作',
    key: 'action',
    align: 'center',
  },
]

// -------------------------------------- 数据资产 -----------------------------------------------

// 数据目录
export const tableFieldColumns = [
  {
    title: '字段名',
    dataIndex: 'fieldName',
    key: 'fieldName',
  },
  {
    title: '字段类型',
    key: 'fieldType',
    dataIndex: 'fieldType',
  },
  {
    title: '字段中文名',
    key: 'fieldCh',
    dataIndex: 'fieldCh',
  },
]

// 目录管理
export const relateSystemColumns = [
  {
    title: '系统名称',
    dataIndex: 'systemName',
    key: 'systemName',
  },
  {
    title: '操作',
    key: 'action',
    align: 'center',
  },
]

// 系统管理
export const systemManageColumns = [
  {
    title: '系统名称',
    dataIndex: 'systemName',
    key: 'systemName',
  },
  {
    title: '系统编码',
    dataIndex: 'systemCode',
    key: 'systemCode',
  },
  {
    title: '操作',
    key: 'action',
    align: 'center',
  },
]

// -------------------------------------- 告警解决方案配置 -----------------------------------------------

// 在线监测告警
export const onlineMonitorColumns = [
  {
    title: '序号',
    key: 'serialNumber',
    width: 100,
  },
  {
    title: '装置名称',
    key: 'userName',
    dataIndex: 'userName',
  },
  {
    title: '描述',
    key: 'nickName',
    dataIndex: 'nickName',
  },
  {
    title: '建议解决方案',
    key: 'phonenumber',
    dataIndex: 'phonenumber',
  },
  {
    title: '操作',
    key: 'action',
    align: 'center',
    width: 200,
  },
]

// 辅助控制告警
export const assistantControlColumns = [
  {
    title: '序号',
    key: 'serialNumber',
    width: 100,
  },
  {
    title: '通信ID',
    key: 'userName',
    dataIndex: 'userName',
  },
  {
    title: '信号名称',
    key: 'nickName',
    dataIndex: 'nickName',
  },
  {
    title: '通信类型',
    key: 'phonenumber',
    dataIndex: 'phonenumber',
  },
  {
    title: '告警位置&类别',
    key: 'phonenumber',
    dataIndex: 'phonenumber',
  },
  {
    title: '建议解决方案',
    key: 'phonenumber',
    dataIndex: 'phonenumber',
  },
  {
    title: '操作',
    key: 'action',
    align: 'center',
    width: 200,
  },
]

// -------------------------------------- 系统设置 -----------------------------------------------

// 用户管理
export const userColumns = [
  {
    title: '用户编号',
    dataIndex: 'userId',
    key: 'userId',
  },
  {
    title: '用户名称',
    key: 'userName',
    dataIndex: 'userName',
  },
  {
    title: '用户昵称',
    key: 'nickName',
    dataIndex: 'nickName',
  },
  {
    title: '部门',
    key: 'deptName',
    customRender: ({ record }: { record: any }) => record.dept.deptName,
  },
  {
    title: '手机号码',
    key: 'phonenumber',
    dataIndex: 'phonenumber',
  },
  {
    title: '状态',
    key: 'slotOne',
  },
  {
    title: '创建时间',
    key: 'createTime',
    dataIndex: 'createTime',
    width: 180,
  },
  {
    title: '操作',
    key: 'action',
    align: 'center',
    width: 200,
  },
]

// 角色管理
export const roleColumns = [
  {
    title: '角色编号',
    dataIndex: 'roleId',
    key: 'roleId',
  },
  {
    title: '角色名称',
    key: 'roleName',
    dataIndex: 'roleName',
  },
  {
    title: '权限字符',
    key: 'roleKey',
    dataIndex: 'roleKey',
  },
  {
    title: '显示顺序',
    key: 'roleSort',
    dataIndex: 'roleSort',
  },
  {
    title: '状态',
    key: 'slotOne',
  },
  {
    title: '创建时间',
    key: 'createTime',
    dataIndex: 'createTime',
  },
  {
    title: '操作',
    key: 'action',
    align: 'center',
  },
]

// 菜单管理
export const menuColumns = [
  {
    title: '菜单名称',
    dataIndex: 'menuName',
    key: 'menuName',
  },
  {
    title: '图标',
    key: 'icon',
    dataIndex: 'icon',
    width: 180,
  },
  {
    title: '排序',
    key: 'orderNum',
    dataIndex: 'orderNum',
    width: 80,
  },
  {
    title: '权限标识',
    key: 'perms',
    dataIndex: 'perms',
    width: 100,
  },
  {
    title: '组件路径',
    key: 'component',
    dataIndex: 'component',
  },
  {
    title: '状态',
    key: 'slotOne',
    width: 100,
  },
  {
    title: '创建时间',
    key: 'createTime',
    dataIndex: 'createTime',
  },
  {
    title: '操作',
    key: 'action',
    align: 'center',
  },
]

// 部门管理
export const deptColumns = [
  {
    title: '部门名称',
    dataIndex: 'deptName',
    key: 'deptName',
  },
  {
    title: '排序',
    key: 'orderNum',
    dataIndex: 'orderNum',
  },
  {
    title: '状态',
    key: 'slotOne',
  },
  {
    title: '创建时间',
    key: 'createTime',
    dataIndex: 'createTime',
  },
  {
    title: '操作',
    key: 'action',
    align: 'center',
  },
]
