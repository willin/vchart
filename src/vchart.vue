<<template>
  <div v-bind:class="[{chart:true, ratio: this.ratio, empty: this.noData}]" v-text="this.message"></div>
</template>

<script>
import Chartist from 'chartist';

export default {
  props: {
    ratio: { type: String },
    data: { type: Object },
    options: { type: Object },
    type: {
      type: String,
      required: true,
      validator(val) {
        return val === 'Pie' || val === 'Line' || val === 'Bar';
      }
    },
    eventHandlers: { type: Array },
    responsiveOptions: { type: Array },
    empty: { type: String }
  },
  data() {
    return {
      chart: null,
      error: { onError: false, message: '' },
      noData: false,
      message: ''
    };
  },
  mounted() {
    this.draw();
  },
  methods: {
    clear() {
      this.noData = false; // remove class ct-noData
      this.message = ''; // remove message no data
      if (this.error.onError) this.error = { onError: false, message: '' }; // clear error
    },
    draw() {
      if (this.haveNoData()) return this.setNoData();
      this.clear();
      this.chart = new Chartist[this.type](this.$el, this.data, this.options, this.responsiveOptions);
      this.setEventHandlers();
      return null;
    },
    haveNoData() {
      return !this.data || !this.data.series || this.data.series.length < 1 || (
        (this.type !== 'Pie' && !this.options.distributeSeries)
        && (this.data.labels.length < 1 || this.data.series.every((serie) => {
          if (Array.isArray(serie)) return !serie.length;
          return !serie.data.length;
        }))
      );
    },
    redraw() {
      if (this.error.onError) return this.draw();
      if (this.haveNoData()) return this.setNoData();
      this.clear();
      this.chart.update(this.data, this.options);
      return null;
    },
    resetEventHandlers(eventHandlers, oldEventHanlers) {
      for (let i = 0; i < oldEventHanlers.length; i += 1) {
        this.chart.off(oldEventHanlers[i].event, oldEventHanlers[i].fn);
      }
      for (let i = 0; i < eventHandlers.length; i += 1) {
        this.chart.off(eventHandlers[i].event, eventHandlers[i].fn);
      }
    },
    setEventHandlers() {
      if (this.eventHandlers) {
        for (let i = 0; i < this.eventHandlers.length; i += 1) {
          this.chart.on(this.eventHandlers[i].event, this.eventHandlers[i].fn);
        }
      }
    },
    setNoData() {
      this.error = { onError: true, message: this.empty || 'No Data' };
      this.noData = true;
      this.message = this.error.message;
    }
  },
  watch: {
    ratio: 'redraw',
    options: 'draw',
    data: { handler: 'redraw', deep: true },
    type: 'draw',
    eventHandlers: 'resetEventHandlers'
  },
  destroyed() {
    if (this.chart) {
      this.chart.detach();
    }
  }
};
</script>
