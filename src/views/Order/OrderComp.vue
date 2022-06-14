<template>
  <div class="order">
    <div class="order__container">
        <div class="order__body ">
          <form @submit.prevent="submitHandler()" id="order" class="order__form">
            <div class="order__receiving receiving-block">
                <div class="receiving-block__title">
                    <div class="receiving-block__dott"><span>1</span></div>
                    <div class="receiving-block__title title">Выберите способ получения</div>
                </div>
                <div class="receiving-block__content">
                    <div @click="changeTypeOrder(), typeOrder='pickup'" id="pickup" class="receiving-block__pickup pickup-content">
                        <div class="pickup-content__title">Самовывоз</div>
                        <div class="pickup-content__title-text">Из магазина, пункта выдачи или постамата</div>
                        <div class="pickup-content__text">В магазине через 15 минут,<span> бесплатно</span></div>
                        <div class="pickup-content__text">В пунктах выдачи завтра,<span> бесплатно</span></div>
                    </div>
                    <div @click="changeTypeOrder(), typeOrder='delivery'" id="delivery" class="receiving-block__pickup pickup-content">
                        <div class="pickup-content__title">Доставка</div>
                        <div class="pickup-content__title-text">Курьером до вашей двери</div>
                        <div class="pickup-content__text">Доставка завтра,<span> бесплатно</span></div>
                        <div class="pickup-content__text">Экспресс-доставка,<span> 200₽</span></div>
                    </div>
                </div>
            </div>

            <div class="order__data data-block">
                <div class="data-block__title">
                    <div class="receiving-block__dott"><span>2</span></div>
                    <div class="data-block__title title">Данные получателя</div>
                </div>
                <div class="data-block__content">

                    <div class="data-block__item">
                        <label for="formName" class="data-block__label">ФИО*:</label>    
                        <input 
                          :class="{'data-block__input_invalid': nameError.length}"
                          v-model.trim="name"
                          type="text"
                          placeholder="Введите ФИО"
                          name="name" 
                          id="formName" 
                          class="data-block__input">
                        <small>{{nameError.length ? nameError[nameError.length-1].$message : ''}}</small>
                    </div>
                        
                    <div class="data-block__item">
                        <label for="formEmail" class="data-block__label">Email*:</label>    
                        <input 
                          :class="{'data-block__input_invalid': emailError.length}"
                          v-model.trim="email"
                          type="text"
                          placeholder="Введите E-mail"
                          name="email"
                          id="formEmail"
                          class="data-block__input">
                        <small>{{emailError.length ? emailError[emailError.length-1].$message : ''}}</small> 
                    </div>

                    <div class="data-block__item">
                      <label for="formPhone" class="data-block__label">Номер телефона*:</label>    
                      <input
                        :class="{'data-block__input_invalid': phoneError.length}" 
                        v-model.trim="phone"
                        type="tel"
                        placeholder="Введите номер телефона"
                        name="phone"
                        id="formPhone"
                        class="data-block__input">
                        <small>{{phoneError.length ? phoneError[phoneError.length-1].$message : ''}}</small>
                    </div>
                </div>        
            </div>
            <div class="order__check checkbox-order">
                <input  v-model="agree" id="c_1" data-error="Ошибка" class="checkbox-order__input" type="checkbox" name="agreement">
                <label for="c_1" class="checkbox-order__label"><span class="checkbox-order__text">Я даю согласие на обработку персональных данных</span></label>
            </div>

            <div type="submit" class="order__submit">
                <button type="submit" class="button">Оформить заказ</button>
            </div>
          </form>  
        </div>
    </div>
  </div>
</template>

<script>
import useVuelidate from '@vuelidate/core'
import { required, minLength, email , helpers, numeric, } from "@vuelidate/validators";

export default {
  setup: () => ({ v$: useVuelidate({ $lazy: true, $autoDirty: true }) }),
  validations() {
    return {
      name: { 
        required: helpers.withMessage('Поле не может быть пустым', required),
        minLength: helpers.withMessage('Должно быть больше одного символа', minLength(2)),
        $autoDirty: true
      },
      email: { 
        required: helpers.withMessage('Поле не может быть пустым', required),
        email: helpers.withMessage('Введите корректные email', email)
      },
      phone: { 
        required: helpers.withMessage('Поле не может быть пустым', required),
        minLength: helpers.withMessage('Должно быть больше девяти символов', minLength(10)),
        numeric: helpers.withMessage('Можно ввести лишь числа', numeric)
      }
    }
  },
  computed: {
    nameError() {
      let nameError = [] 
      if (this.v$.$errors) {
        this.v$.$errors.forEach(error=> {
          if (error.$property === 'name') {
            nameError.push(error)
          }
        })
        return nameError
      } else {
        return nameError
      }
    },

    emailError() {
      let emailError = [] 
      if (this.v$.$errors) {
        this.v$.$errors.forEach(error=> {
          if (error.$property === 'email') {
            emailError.push(error)
          }
        })
        return emailError
      } else {
        return emailError
      }
    },

    phoneError() {
      let phoneError = [] 
      if (this.v$.$errors) {
        this.v$.$errors.forEach(error=> {
          if (error.$property === 'phone') {
            phoneError.push(error)
          }
        })
        return phoneError
      } else {
        return phoneError
      }
    },
    
  },
  data() {
    return {
      name: '',
      email: '',
      phone: '',
      agree: true,
      typeOrder: 'pickup',
    }
  },

  methods: {
    async submitHandler() {
      if (this.agree) {
        this.v$.$validate()
        if (!this.v$.$error) {
          this.$router.push('/catalog')
          this.v$.$reset()
          this.$store.dispatch('ZEROEDCART')
          //const cart = { name , email , phone, typeOrder }
          // некоторые действия
        } else {
          return
        }
      }
    },
    changeTypeOrder() {
        const pickup = document.getElementById('pickup')
        const delivery = document.getElementById('delivery')

        if(this.typeOrder === 'pickup') {
          pickup.classList.add('pickup-content__active')
          delivery.classList.remove('pickup-content__active')
        } else {
          delivery.classList.add('pickup-content__active')
          pickup.classList.remove('pickup-content__active') 
        }
    }
    

  },
  watch: {
    nameError(val) {
      console.log(val)
      this.nameError
    },
    emailError(val) {
      console.log(val)
      this.emailError
    },
    phoneError(val) {
      console.log(val)
      this.phoneError
    },   
  },
}
</script> 