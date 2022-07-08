import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// 按需加载组件，不用显示手动导入
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import { resolve } from 'path'

export default ({ mode }) => {
  console.log(`当前环境：${mode}`)
  return defineConfig({
    resolve: {
      alias: [
        {
          find: '@',
          replacement: resolve(__dirname, 'src'),
        },
      ],
    },
    plugins: [
      vue(),
      Components({
        resolvers: [
          AntDesignVueResolver({
            // 相当于不用插件时在main.ts里引入的less文件
            importStyle: 'less',
          }),
        ],
      }),
    ],
    css: {
      preprocessorOptions: {
        less: {
          modifyVars: {
            'primary-color': '#015C61',
          },
          javascriptEnabled: true,
        },
      },
    },
    server: {
      host: '0.0.0.0',
      port: 3001,
    },
  })
}
