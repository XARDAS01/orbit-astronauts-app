<template>
  <div class="modalCreate">
    <b-button 
      class="modalCreate__button"
      @click="modalShow = !modalShow">
      Add new astronaut to orbit
    </b-button>

    <b-modal
      v-model="modalShow"
      ref="my-modal"
      class="modalCreate__modal"
      centered title="BootstrapVue"
      body-bg-variant="dark"
      body-text-variant="light"
      modal-header-close
      hide-header
      hide-footer>

      <div class="modalCreate__modal__content content">
        <h3 class="content__title">New astronaut going to orbit</h3>

          <b-form class="content__form" @submit="onSubmit()" @reset="onReset">

            <b-form-group
              class="content__form__group"
              id="input-group-name"
              label="Enter astronaut personal information:"
              label-for="input-name"
            >
              <b-form-input
                class="content__form__group__item"
                id="input-name"
                type="name"
                placeholder="Enter name"
                required
                v-model="astronaut.name"
              ></b-form-input>
              <br>
              <b-form-input
                class="content__form__group__item"
                id="input-surname"
                type="surname"
                placeholder="Enter surname"
                required
                v-model="astronaut.surname"
              ></b-form-input>
              <br>
              <b-form-input
                class="content__form__group__item"
                id="input-age"
                type="age"
                placeholder="Enter age"
                required
                oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');"
                v-model="astronaut.age"
              ></b-form-input>
            </b-form-group>

            <b-form-group
              class="content__form__group"
              id="input-group-location"
              label="Enter astronaut work information:"
              label-for="input-location"
            >
              <b-form-input
                class="content__form__group__item"
                id="input-location"
                type="text"
                placeholder="Enter work location"
                required
                v-model="astronaut.location"
              ></b-form-input>
            </b-form-group>

            <b-form-group
              class="content__form__group"
              id="input-group-location"
              label="Enter astronaut superpower:"
              label-for="input-location"
            >
              <b-form-textarea
                class="content__form__group__item"
                id="input-location"
                type="text"
                placeholder="Enter superpower"
                required
                v-model="astronaut.power"
              ></b-form-textarea>
            </b-form-group>

            <b-button class="content__form__button content__form__button--submit" @@click="modalShow = !modalShow" type="submit">Save astronaut</b-button>
            <b-button class="content__form__button content__form__button--reset" type="reset">Reset</b-button>

          </b-form>
      </div>

    </b-modal>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'CreateModalComponent',
  data() {
    return {
      modalShow: false,
      response: null,
      astronaut: {
        name: "Tester",
        surname: "Smith",
        age: 30,
        location: "Earth",
        power: "Top Secret"
      }
    }
  },
  methods: {
    onSubmit() {
      axios
        .post('https://astronauts-on-orbit-api.herokuapp.com/astronautCreate?name=' + this.astronaut.name +'&surname=' + this.astronaut.surname + '&age=' + this.astronaut.age + '&power=' + this.astronaut.power + '&location=' + this.astronaut.location)
        .then(response => (
          this.response = response,
          this.modalShow = false,
          this.$router.push('/crewProfile/' + response.data)
        ));
    }
  }
}
</script>

<style scoped>
.modalCreate {

}

  .modalCreate__button {
    width: 300px;
    height: 60px;
    font-weight: bold;
    text-transform: uppercase;
    border: none;
    border-radius: 14px;
    color: #1F1F1F;
    font-size: 16px;

    margin-left: 20px;
    margin-bottom: 20px;

    background-color: #a3573f;
    transition: 0.3s;
  }

  .modalCreate__button:hover {
    background-color: #c55b3a;
    transition: 0.3s;
    color: #1F1F1F;
    cursor: pointer;
  }

  .modalCreate__modal {
  }
    .modalCreate__modal__content {

    }
      .content {
        padding: 70px;
        border: none;
        background-color:#1A1A1A;
      }
        .content__title {
          margin-bottom: 50px;
          color: rgb(185, 185, 185);
        }
        .content__form {
          color: rgb(185, 185, 185);
        }
          .content__form__button {
            width: 100%;
            margin: 5px 0px;
            border: none;
          }
            .content__form__button--submit {
              margin-top: 20px;
              background-color: #242731;
            }
            .content__form__button--submit:hover {
              background-color: rgb(53, 58, 75);
            }
            .content__form__button--reset {
              background-color: #a3573f;
            }
            .content__form__button--reset:hover {
              background-color: #c55b3a;
            }

          .content__form__group {
            margin: 40px 0px;
          }
            .content__form__group__item {
              background-color: #1F1F1F;
              border: none;
              color: rgb(185, 185, 185);
            }
            .content__form__group__item::placeholder {
              color: rgb(185, 185, 185);
            }
            input[type="text"], textarea[type="text"] {
              background-color : #1F1F1F; 
              color: rgb(185, 185, 185);
            }
</style>
