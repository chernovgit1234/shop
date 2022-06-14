<template>
    <select name="form[]" class="constrol" @change="onChange($event)" >
        <option v-for="(option, i) in options" :key="i" :value=i>{{option}}</option>
    </select>
</template>

<script>

export default {
    name: "Select",  
    props: {
        options: {
            type: []
        },
    },
    emits: {
        'change-select'(str) {
            if (str) {
              return true
            }
            console.warn('Нет данных')
            return false
        }
    },
    data() {
        return {
          selectedValue: ''
        }
    },
    methods: {
        onChange(event) {
            this.selectedValue = this.options[event.target.value]
            this.$emit('change-select', this.selectedValue)
            this.$store.commit('changeSelect', this.selectedValue)
        },
    },
}
</script>
