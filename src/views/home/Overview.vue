<template>
  <div class="overview-wrapper">
    <div class="statistics-row-wrap">
      <div class="statistics-title">赋码概况</div>
      <div class="content-wrap">
        <div class="row-item-wrap">
          <p class="item-title">累计赋码</p>
          <p class="count-wrap">
            <span>72,973</span>
            <span>个</span>
          </p>
          <p class="compare-wrap">相比昨日 109个 ⬆</p>
        </div>
        <div class="row-item-wrap">
          <p class="item-title">企业码</p>
          <p class="count-wrap">
            <span>72,973</span>
            <span>个</span>
          </p>
          <p class="compare-wrap">相比昨日 109个 ⬆</p>
        </div>
        <div class="row-item-wrap">
          <p class="item-title">人员码</p>
          <p class="count-wrap">
            <span>72,973</span>
            <span>个</span>
          </p>
          <p class="compare-wrap">相比昨日 109个 ⬆</p>
        </div>
        <div class="row-item-wrap">
          <p class="item-title">工程码</p>
          <p class="count-wrap">
            <span>72,973</span>
            <span>个</span>
          </p>
          <p class="compare-wrap">相比昨日 109个 ⬆</p>
        </div>
      </div>
    </div>
    <div class="row-wrap">
      <div class="row-item-wrap">
        <p class="chart-title">企业码概况</p>
        <div class="chart-wrap">
          <Pie :series="pieData" />
        </div>
      </div>
      <div class="row-item-wrap">
        <p class="chart-title">人员码概况</p>
        <div class="chart-wrap">
          <Pie :series="pieData" />
        </div>
      </div>
      <div class="row-item-wrap">
        <p class="chart-title">工程码概况</p>
        <div class="chart-wrap">
          <Pie :series="pieData" />
        </div>
      </div>
    </div>
    <div class="row-wrap">
      <div class="row-item-wrap">
        <p class="chart-title">企业码概况</p>
        <div class="chart-wrap">
          <Bar :series="barData.series" :x-axis="barData.xAxis" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onBeforeMount } from 'vue'
import Pie from '@/components/charts/Pie.vue'
import Bar from '@/components/charts/Bar.vue'

const pieData = ref([
  {
    data: [
      { value: 1048, name: 'Search Engine' },
      { value: 735, name: 'Direct' },
      { value: 580, name: 'Email' },
      { value: 484, name: 'Union Ads' },
      { value: 300, name: 'Video Ads' },
    ],
    type: 'pie',
    label: {
      show: false,
    },
    radius: ['40%', '70%'],
    center: ['25%', '50%'],
  },
])

const barData = ref({ series: [{ type: 'bar', data: [12, 45, 78], barMaxWidth: 50 }], xAxis: ['周一', '周二', '周三'] })

onBeforeMount(() => {
  getOverviewInfo()
})

/**
 * @desc 获取统计和图表数据
 */
const getOverviewInfo = () => {}
</script>

<style lang="less" scoped>
.overview-wrapper {
  .statistics-row-wrap {
    padding: 14px;
    background-color: #ffffff;
    .statistics-title {
      margin-bottom: 14px;
      font-weight: bold;
    }
    .content-wrap {
      display: flex;
      .row-item-wrap {
        flex: 1;
        .count-wrap {
          width: 100%;
          height: 50px;
          line-height: 50px;
          span:first-child {
            font-size: 20px;
            font-weight: bold;
          }
        }
        .compare-wrap {
        }
        .table-wrap {
          width: 100%;
          height: 292px;
          margin-top: 10px;
        }
      }
    }
  }
  .row-wrap {
    display: flex;
    margin-top: 14px;
    .row-item-wrap {
      flex: 1;
      padding: 14px;
      margin-right: 14px;
      background-color: #ffffff;
      &:last-child {
        margin-right: 0;
      }
      .chart-title {
        margin-bottom: 14px;
        font-weight: bold;
      }
      .chart-wrap {
        width: 100%;
        height: 240px;
      }
    }
  }
}
</style>
