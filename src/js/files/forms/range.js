import * as noUiSlider from 'nouislider';
console.log('noUiSlider', wNumb)
import wNumb from 'wnumb'
//"use strict"
// Подключение стилей из scss/base/forms/range.scss 
// в файле scss/forms/forms.scss

// Подключение cтилей из node_modules
// import 'nouislider/dist/nouislider.css';
//var from = 0
export function rangeInit() {
	"use strict"
	const rangeItems = document.querySelectorAll('[data-range]');
	if (rangeItems.length) {
		rangeItems.forEach(rangeItem => {
			var fromValue = rangeItem.querySelector('[data-range-from]');
			var toValue = rangeItem.querySelector('[data-range-to]');
			const item = rangeItem.querySelector('[data-range-item]');
			noUiSlider.create(item, {
				start: [Number(fromValue.value), Number(toValue.value)], // [0,200000]
				connect: false,
				tooltips: [true, true],
				step: 10,
				margin: 20,
				range: {
				  'min': Number(fromValue.dataset.rangeFrom),
				  'max': Number(toValue.dataset.rangeTo)
				},
				format: wNumb({
					decimals: 3,
				})

			});
			item.noUiSlider.on('update', function (values ) {
				//console.log('текст', fromValue.value)
				fromValue.value = values[0];
				//fromValue.value = this.$refs.fromValue.value
				toValue.value = values[1];

			});
		});
	}
	//return from
}

