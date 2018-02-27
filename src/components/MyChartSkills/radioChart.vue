<script>
import { Radar } from 'vue-chartjs';

export default {
extends: Radar,
  mounted () {
    this.renderChart({
      labels: ['Swift', 'Javascript', 'Angular', 'VueJs', 'Jquery', 'PHP'],
      datasets: [
        {
          label: 'Languages',
          backgroundColor: '#E5657B',
          data: [15, 95, 45, 62, 84, 75],
          scale: {
              display: false
          },
          pointStyle: 'dash'
        }       
      ]
    }, {responsive: true, maintainAspectRatio: false})
  }
}
</script>