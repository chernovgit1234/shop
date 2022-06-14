<template>
  <div>
    <div  class="vue-nouislider">
    </div>
  </div>
</template>

<script>
import * as  noUiSlider from 'nouislider';
import wNumb from 'wnumb'

export default {
  emits: ['updateRange'],
  props: {

    valuesRange: {
      type: Array,
      required: true
    },
    rangeDef: {
      type: Object,
      required: true
    },
 
  },
  data () {
    return {
      init: false,
      values: this.valuesRange,
      config: {
        
        connect: false,
				tooltips: [true, true],
				step: 10,
				margin: 20,
        format: wNumb({
					decimals: 0,
				}),
        range: this.rangeDef
      }
    };
  },
  computed: {
    slider() {
      return document.querySelector('[data-range-item]');
    }
  },
  mounted () {

    this.config.start = this.values;
    noUiSlider.create(this.slider, this.config);
    this.slider.noUiSlider.on('update', this.updateValue);
  },
  
  methods: {
    updateValue(value, handle) {
      this.values[handle] = value[handle];

      this.$emit('updateRange:value', this.values);
    },
  },
};
</script>


