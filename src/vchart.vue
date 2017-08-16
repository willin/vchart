<<template>
  <div ref="chart" v-bind:class="[{chart:true, ratio: this.ratio}]">
    Hello World
  </div>
</template>

<script>
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
    }
  },
  data() {
    return {
      chart: null
    };
  }
};
</script>
