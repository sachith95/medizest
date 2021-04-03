<template>
  <div>
    <h1>{{ chart }}</h1>
    <chart
      :options="{
        legend: {
          top: 'bottom',
        },
        series: [
          {
            type: 'pie',
            radius: '50%',
            center: ['50%', '50%'],
            roseType: 'area',
            itemStyle: {
              borderRadius: 8,
            },
            data: [
              { value: 40, name: 'rose 1' },
              { value: 38, name: 'rose 2' },
              { value: 32, name: 'rose 3' },
              { value: 30, name: 'rose 4' },
              { value: 28, name: 'rose 5' },
              { value: 26, name: 'rose 6' },
              { value: 22, name: 'rose 7' },
              { value: 18, name: 'rose 8' },
            ],
          },
        ],
      }"
      autoresize
    />
  </div>
</template>

<script>
export default {
  name: "CustomGauge",
  props: {
    val: [String, Number],
    chart: [String, Number],
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
</style>