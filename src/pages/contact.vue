<template>
  <div>
    <section-component title="Contact" bg-color="bg-white" text-color="text-blue-950" align-items="items-start">
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </div>
      <form class="w-full p-4 bg-yellow-50 shadow-lg flex flex-col md:grid md:grid-cols-2 mt-4 gap-2" @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="name">Naam (kan ook anoniem)</label>
          <input
            type="text"
            id="name"
            v-model="formData.name"
            @blur="validateField('name')"
          />
          <span v-if="errors.name" class="error">{{ errors.name }}</span>
        </div>

        <div class="form-group">
          <label for="email">E-mail</label>
          <input
            type="email"
            id="email"
            v-model="formData.email"
            @blur="validateField('email')"
          />
          <span v-if="errors.email" class="error">{{ errors.email }}</span>
        </div>

        <div class="form-group md:col-span-2">
          <label for="message">Bericht</label>
          <textarea
            id="message"
            v-model="formData.message"
            @blur="validateField('message')"
            rows="4"
          ></textarea>
          <span v-if="errors.message" class="error">{{ errors.message }}</span>
        </div>

        <button type="submit" :disabled="isSubmitting" class="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 w-fit col-span-2 ml-auto">Versturen</button>
      </form>
    </section-component>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';
import emailjs from 'emailjs-com';
import SectionComponent from '../components/section/index.vue';

const EMAILJS_SERVICE_ID = 'your_service_id';  // Replace with your Service ID
const EMAILJS_TEMPLATE_ID = 'your_template_id';  // Replace with your Template ID
const EMAILJS_USER_ID = 'your_user_id';  // Replace with your User ID

// Reactive state for form data and errors
const formData = reactive({
  name: '',
  email: '',
  message: '',
});

const errors = reactive({
  name: null as string | null,
  email: null as string | null,
  message: null as string | null,
});

// Method to validate individual fields
const validateField = (field: string) => {
  const value = formData[field as keyof typeof formData];
  switch (field) {
    case 'message':
      errors.message = value ? null : 'Bericht mag niet leeg zijn.';
      break;
  }
};

const isSubmitting = ref(false);
// Method to handle form submission
const handleSubmit = async () => {
  isSubmitting.value = true;
  try {
    // Validate all fields
    Object.keys(formData).forEach(validateField);
  
    // Check for errors
    if (Object.values(errors).every((err) => !err)) {
      await sendEmail();
      alert('Form submitted successfully!');
      resetForm();
    } else {
      alert('Niet alle velden zijn correct ingevuld.');
    }
  } catch(err) {
    alert('Kon formulier niet versturen, probeer later opnieuw.');
  } finally {
    isSubmitting.value = false;
  }

};

const sendEmail = async () => {
  try {
    isSubmitting.value = true;
    // Send the form data using EmailJS
    const response = await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formData, EMAILJS_USER_ID);

    // Handle response success
    if (response.status === 200) {
      resetForm();
    }
  } catch (error) {
    // Handle any error during the request
    console.error(error);
    throw error;
  } finally {
    isSubmitting.value = false;
  }
}

// Method to reset the form
const resetForm = () => {
  formData.name = '';
  formData.email = '';
  formData.message = '';
  errors.name = null;
  errors.email = null;
  errors.message = null;
};
</script>
<style scoped>
.form-group {
  @apply flex flex-col
}
.error {
  @apply text-red-500
}

input, textarea{
  @apply min-h-10 p-2
}
</style>