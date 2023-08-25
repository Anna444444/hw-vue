Vue.component('chart-data-input', {
  template: `
  <div>
      <table id="data-table">
          <tr>
              <th>Название</th>
              <th>Значение</th>
          </tr>
          <tr v-for="data in chartData">
              <td>{{data.name}}</td>
              <td>{{data.value}}</td>
          </tr>
      </table>

      <form @submit.prevent="addData">
          <label for="name">Название:</label>
          <input type="text" v-model="name" required>
          <label for="value">Значение:</label>
          <input type="number" v-model="value" required>
          <button type="submit">Добавить</button>
      </form>
  </div>
  `,
  data() {
    return {
      name: '',
      value: null,
      chartData: []
    };
  },
  methods: {
    addData() {
      this.chartData.push({ name: this.name, value: parseFloat(this.value) });
      this.name = '';
      this.value = null;
      this.$emit('update-data', this.chartData);
    }
  }
});

Vue.component('chart-renderer', {
  props: ['chartData'],
  template: `
  <div>
      <label for="chart-type">Вид диаграммы:</label>
      <select v-model="chartType" @change="drawChart">
          <option value="bar">Гистограмма</option>
          <option value="pie">Круговая</option>
          <option value="doughnut">Кольцевая</option>
          <option value="line">График</option>
      </select>

      <canvas ref="chartCanvas" width="400" height="200"></canvas>
  </div>
  `,
  data() {
    return {
      chartType: 'bar'
    };
  },
  methods: {
    drawChart() {
      const drawFunction = getDrawFunction(this.chartType);
      drawFunction(this.chartData, this.$refs.chartCanvas);
    }
  },
  watch: {
    chartData: function () {
      this.drawChart();
    }
  },
  mounted() {
    this.drawChart();
  }
});

new Vue({
  el: '#app',
  data: {
    chartData: []
  },
  methods: {
    updateData(newData) {
      this.chartData = newData;
    }
  }
});
