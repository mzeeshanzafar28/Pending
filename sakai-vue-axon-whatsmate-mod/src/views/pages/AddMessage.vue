<script setup>
import { ref } from 'vue';

const dropdownItems = ref([
  { name: 'Option 1', code: 'Option 1' },
  { name: 'Option 2', code: 'Option 2' },
  { name: 'Option 3', code: 'Option 3' }
]);

const dropdownItem = ref(null);
</script>

<template>
  <div class="container">
    <div class="card p-fluid">
      <h5>Add Message</h5>
      <div class="field">
        <label for="phone">Phone No.</label>
        <InputText id="phone" type="text" />
      </div>
      <div class="field">
        <label for="message">Message</label>
        <Textarea id="message" rows="4" />
      </div>
      <div class="field">
        <label for="type">Type</label>
        <Dropdown id="type" v-model="dropdownItem" :options="dropdownItems" optionLabel="name" placeholder="Select One" />
      </div>
      <div class="field">
        <label for="type">Type</label>
        <InputText id="age1" type="text" />
      </div>
      <Button label="Submit"></Button>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5; /* Optional: Add a background color */
}

.card {
  width: 80%; /* Adjust the width as necessary */
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  border-radius: 8px;
}

button{
    width:auto;
    float: right;
}
</style>
