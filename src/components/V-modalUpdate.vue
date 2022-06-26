<template>
  <div class="modalCreate">
    <b-button 
      class="modalCreate__button"
      @click="modalToogle()">
      Edit astronaut information
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
        <h3 class="content__title">Edit astronaut information</h3>

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

            <b-button class="content__form__button content__form__button--submit" @click="modalToogle()" type="submit">Save astronaut</b-button>
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
  props: ['profile'],
  data() {
    return {
      modalShow: false,
      response: null,
      astronaut: {
        name: "",
        surname: "",
        age: 0,
        location: "Earth",
        power: "Top Secret"
      }
    }
  },
  methods: {
    modalToogle() {
      this.astronaut = this.profile;
      if (this.astronaut) this.modalShow = !this.modalShow;
    },
    onSubmit() {
      axios
        .post('https://astronauts-on-orbit-api.herokuapp.com/astronautUpdate?name=' + this.astronaut.name +'&surname=' + this.astronaut.surname + '&age=' + this.astronaut.age + '&power=' + this.astronaut.power + '&location=' + this.astronaut.location + '&id=' + this.astronaut.id)
        .then(response => (
          this.response = response,
          this.modalShow = false,
          this.$router.push('/crewProfile/' + this.astronaut.id)
        ));
    }
  }
}
</script>

<style scoped>
.modalCreate {

}
  .modalCreate__button {
    width: 100%;
    height: 60px;

    background-color: #242731;
    color: #808191;
    border: none;
    font-weight: bold;
    text-transform: uppercase;
    cursor: pointer;

    transition: 0.3s;
  }
  .modalCreate__button:hover {
    background-color: rgb(53, 58, 75);
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
