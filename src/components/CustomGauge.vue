<template>
  <chart
    :options="{
      series: [
        {
          type: 'gauge',
          progress: {
            show: true,
            width: 18,
          },
          axisLine: {
            lineStyle: {
              width: 18,
            },
          },
          axisTick: {
            show: false,
          },
          splitLine: {
            length: 15,
            lineStyle: {
              width: 2,
              color: '#999',
            },
          },
          axisLabel: {
            distance: 25,
            color: '#999',
            fontSize: 20,
          },
          anchor: {
            show: true,
            showAbove: true,
            size: 25,
            itemStyle: {
              borderWidth: 10,
            },
          },
          title: {
            show: false,
          },
          detail: {
            valueAnimation: true,
            fontSize: 80,
            offsetCenter: [0, '70%'],
          },
          data: [
            {
              value: 70,
            },
          ],
        },
      ],
    }"
    autoresize
  />
</template>

<script>
export default {
  name: "CustomGauge",
  props: {
    val: [String, Number],
    name: [String, Number],
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
.echarts {
  width: 100%;
}
</style>