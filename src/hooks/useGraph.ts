import { ref, onMounted } from 'vue'
import { Graph, Addon } from '@antv/x6'
import '@antv/x6-vue-shape'
import AlgoNode from '@/components/development/flowDesign/AlgoNode.vue'
import { ConnectionPorts } from '@/enums/developmentEnum'

const useGraph = () => {
  const graph = ref()

  const dnd = ref()

  /**
   * @desc 初始化图表
   */
  const initGraph = (id: string) => {
    const graphDom: HTMLElement = document.getElementById(id) as HTMLElement
    graph.value = new Graph({
      container: graphDom,
      background: {
        color: '#DEE4EC',
      },
      // 画布拖拽
      panning: {
        enabled: true,
        eventTypes: ['leftMouseDown', 'mouseWheel'],
      },
      snapline: true, // 对齐辅助线
      history: true, // 撤销重做
      selecting: {
        enabled: true,
        multiple: false,
        showNodeSelectionBox: true,
      },
      mousewheel: {
        enabled: true,
        modifiers: 'ctrl',
        factor: 1.1,
        maxScale: 1.5,
        minScale: 0.5,
      },
      highlighting: {
        magnetAdsorbed: {
          name: 'stroke',
          args: {
            attrs: {
              fill: '#fff',
              stroke: '#31d0c6',
              strokeWidth: 4,
            },
          },
        },
      },
      // 连线规则 https://x6.antv.vision/zh/docs/api/graph/interaction/#connecting
      connecting: {
        snap: true,
        allowBlank: false,
        allowMulti: false, // 是否允许在相同的起始节点和终止之间创建多条边
        allowLoop: false,
        highlight: true,
        connector: 'smooth',
        sourceAnchor: 'right',
        targetAnchor: 'center',
        validateMagnet({ magnet }) {
          return magnet.getAttribute('port-group') !== 'in'
        },
        // 显示可用的链接桩
        validateConnection(connection) {
          const { sourceView, targetView, sourceMagnet, targetMagnet } = connection
          // 不允许连接到自己
          if (sourceView === targetView) {
            return false
          }
          // 只能从输出链接桩创建连接
          if (!sourceMagnet || sourceMagnet.getAttribute('port-group') === 'in') {
            return false
          }
          // 只能连接到输入链接桩
          if (!targetMagnet || targetMagnet.getAttribute('port-group') !== 'in') {
            return false
          }
          return true
        },
        createEdge() {
          return graph.value.createEdge({
            shape: 'flow-edge',
            attrs: {
              line: {
                strokeDasharray: '5 5',
              },
            },
            zIndex: 10,
          })
        },
      },
    })
  }

  /**
   * @desc 初始化拖拽实例
   */
  const initAddon = () => {
    dnd.value = new Addon.Dnd({
      target: graph.value,
      scaled: false,
      animation: true,
    })
  }

  /**
   * @desc 自定义Graph相关组件
   */
  const customGraphRegister = () => {
    Graph.registerNode(
      'flow-node',
      {
        inherit: 'vue-shape',
        width: 160,
        height: 48,
        component: {
          template: '<algo-node></algo-node>',
          components: {
            AlgoNode,
          },
        },
        ports: ConnectionPorts,
      },
      true,
    )
    Graph.registerEdge(
      'flow-edge',
      {
        inherit: 'edge',
        attrs: {
          line: {
            stroke: '#015C61',
            strokeWidth: 1,
            targetMarker: {
              tagName: 'path',
              d: 'M 10 -5 0 0 10 5 z',
            },
          },
        },
        zIndex: 10,
      },
      true,
    )
  }

  onMounted(() => {
    customGraphRegister()
  })

  return {
    initGraph,
    initAddon,
    graph,
    dnd,
  }
}

export default useGraph
