<template>
  <div>
    <div>
      <form @submit.prevent="submitForm">
        <div style="display: flex; flex-wrap: wrap" class="formContainer">
          <div class="formCol">
            <label for="currentOrganization">Current Organization </label>
            <input
              type="text"
              id="currentOrganization"
              v-model="fields.currentOrganization"
              required
            />

            <label for="skills">Skills</label>
            <input type="text" id="skills" v-model="fields.skills" required />
            <label for="availableFrom">Available From</label>
            <input
              type="text"
              id="currentSalary"
              v-model="fields.currentSalary"
              required
            />
            <label for="currentSalary">Current Salary</label>
            <input
              type="text"
              id="noticePeriod"
              v-model="fields.noticePeriod"
              required
            /><label for="noticePeriod">Notice Period</label>
            <input
              type="text"
              id="fullAddress"
              v-model="fields.fullAddress"
              required
            />
            <label for="fullAddress">Full Address</label>
            <input type="text" id="resume" v-model="fields.resume" required />
            <label for="resume">Resume</label>
            <input
              type="text"
              id="totalExperience"
              v-model="fields.totalExperience"
              required
            />
            <label for="totalExperience">Total Experience</label>
            <input
              type="text"
              id="totalExperience"
              v-model="fields.totalExperience"
              required
            />
          </div>

          <div class="formCol">
            <label for="summary">Summary</label>
            <input type="text" id="summary" v-model="fields.summary" required />
            <label for="currentEmploymentStatus"
              >current Employment Status</label
            >
            <input
              type="text"
              id="currentEmploymentStatus"
              v-model="fields.currentEmploymentStatus"
              required
            />
            <label for="dob">Date of Birth</label>
            <input type="text" id="dob" v-model="fields.dob" required />
            <label for="releventExperience">Relevant Experience</label>
            <input
              type="text"
              id="releventExperience"
              v-model="fields.releventExperience"
              required
            />
            <label for="salaryExpectation">Salary Expectation</label>
            <input
              type="text"
              id="salaryExpectation"
              v-model="fields.salaryExpectation"
              required
            />
            <label for="status">status</label>
            <input type="text" id="status" v-model="fields.status" required />
            <label for="salaryType">Salary Type</label>
            <input
              type="text"
              id="status"
              v-model="fields.salaryType"
              required
            />
            <label for="languageSkills">Language Skills</label>
            <input
              type="text"
              id="languageSkills"
              v-model="fields.languageSkills"
              required
            />
          </div>
        </div>
        <!-- Update button -->
        <button type="button" @click="updateForm">Update</button>
        <!-- Submit button -->
        <button type="submit">Submit</button>
      </form>

      <!-- Display form data for testing -->
      <div v-if="submitted">
        <h2>Form Data:</h2>
        <ul>
          <li v-for="(value, key) in fields" :key="key">
            {{ key }}: {{ value }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fields: {
        currentOrganization: "",
        Skills: "",
        availableFrom: "",
        currentSalary: "",
        noticePeriod: "",
        fullAddress: "",
        resume: "",
        totalExperience: "",
        summary: "",
        currentEmploymentStatus: "",
        dob: "",
        releventExperience: "",
        salaryExpectation: "",
        status: "",
        salaryType: "",
        languageSkills: "",
      },
      submitted: false,
    };
  },
  methods: {
    submitForm() {
      console.log("Form submitted:", this.fields);
      this.submitted = true;
    },
    updateForm() {
      console.log("Form updated:", this.fields);
    },
  },
};
</script>

<style scoped>
.formContainer {
  display: flex;
  flex-wrap: wrap;
}
.formCol {
  flex: 1;
  padding: 10px;
}

form {
  width: 100%;
  /* max-width: 600px; */
  margin: 20px auto;
  padding: 10px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

label {
  display: block;
  margin-bottom: 8px;
}

input[type="text"] {
  width: 100%;
  padding: 5px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>