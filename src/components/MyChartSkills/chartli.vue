<script>
import { Line } from 'vue-chartjs';

export default {
  extends: Line,
  mounted () {
    this.renderChart({
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'GitHub',
          backgroundColor: '#1C899B',
          data: [35, 49, 22, 24, 9, 12, 3]
        },
        {
          label: 'GitLab',
          backgroundColor: '#cda8e8',
          data: [40, 39, 10, 40, 39, 80, 40]
        }        
      ]
    }, {responsive: true, maintainAspectRatio: false})
  }
}
</script>