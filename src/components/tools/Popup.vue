<template>
  <div v-if="isPopupOpen" class="popup">
	<div class="popup__body">
		<div class="popup__content">
			<button data-close type="button" @click="$emit('closePopup')" class="popup__close">Х</button>
			<div class="popup__text">
				<slot name="default">
					
				</slot>
				<div v-if="this.$slots.call">
					<slot name="call">
					
					</slot>
				</div>
				<div v-if="this.$slots.cart">
					<slot name="cart" class="">
					
					</slot>
				</div>
				<div v-if="this.$slots.order">
					<slot name="order">
					
					</slot>
				</div>
				
			</div>
		</div>
	</div>
</div>
</template>

<script>
export default {
  name: "Popup",
  data() {
	return {
      //isPopupOpen: null
	}
  },
  props: {
	isPopupOpen: {
	  type: Boolean,
	  required: true
	}
  },
  methods: {
    
  },
  emits: ['closePopup']
}
</script>

<style scope="sass">
  
</style>