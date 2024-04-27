<template>
  <div>
    <div class="userDetails">
      <div class="container">
        <div class="column">
          <div style="display: flex; padding: 10px;">
            <div class="heading">Current Organization</div>
            <div class="data">{{ userDetails.currentOrganization }}</div>
          </div>
          <div style="display: flex; padding: 10px;">
            <div class="heading">Skills</div>
            <div class="data">{{ userDetails.Skills }}</div>
          </div>
          <div style="display: flex; padding: 10px;">
            <div class="heading">Available From</div>
            <div class="data">{{ userDetails.availableFrom }}</div>
          </div>
          <div style="display: flex; padding: 10px;">
            <div class="heading">Current Salary</div>
            <div class="data">{{ userDetails.currentSalary }}</div>
          </div>
          <div style="display: flex; padding: 10px;">
            <div class="heading">Notice Period</div>
            <div class="data">{{ userDetails.noticePeriod }}</div>
          </div>
          <div style="display: flex; padding: 10px;">
            <div class="heading">Full Address</div>
            <div class="data">{{ userDetails.fullAddress }}</div>
          </div>
          <div style="display: flex; padding: 10px;">
            <div class="heading">Resume</div>
            <div class="data">{{ userDetails.resume }}</div>
          </div>
          <div style="display: flex; padding: 10px;">
            <div class="heading">Total Experience</div>
            <div class="data">{{ userDetails.totalExperience }}</div>
          </div>
        </div>
        <div class="column">
          <div style="display: flex; padding: 10px;">
            <div class="heading">Summary</div>
            <div class="data">{{ userDetails.summary }}</div>
          </div>
          <div style="display: flex; padding: 10px;">
            <div class="heading">Current Employment Status</div>
            <div class="data">{{ userDetails.currentEmploymentStatus }}</div>
          </div>
          <div style="display: flex; padding: 10px;">
            <div class="heading">Date of Birth</div>
            <div class="data">{{ userDetails.dob }}</div>
          </div>
          <div style="display: flex; padding: 10px;">
            <div class="heading">Relevent Experience</div>
            <div class="data">{{ userDetails.releventExperience }}</div>
          </div>
          <div style="display: flex; padding: 10px;">
            <div class="heading">Salary Expectation</div>
            <div class="data">{{ userDetails.salaryExpectation }}</div>
          </div>
          <div style="display: flex; padding: 10px;">
            <div class="heading">Status</div>
            <div class="data">{{ userDetails.status }}</div>
          </div>
          <div style="display: flex; padding: 10px;">
            <div class="heading">Salary Type</div>
            <div class="data">{{ userDetails.salaryType }}</div>
          </div>
          <div style="display: flex; padding: 10px;">
            <div class="heading">Language Skills</div>
            <div class="data">{{ userDetails.languageSkills }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userDetails: {
        currentOrganization:"World Bank Group",
        Skills:"HTML, CSS, Javascript",
        availableFrom:"Jul, 14, 2023",
        currentSalary:"$6000",
        noticePeriod:"90 Days",
        fullAddress:"9400 Ashton Rd, Philadelphia...",
        resume:"Resume",
        totalExperience:"5 years",
        summary:"Current Organization",
        currentEmploymentStatus:"Employed",
        dob:"12-10-2002",
        releventExperience:"4 years",
        salaryExpectation:"$9000",
        status:"Submitted to Client",
        salaryType:"Annul",
        languageSkills:"english",


      },
    };
  },
};
</script>


<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
}

.column {
  flex: 1;
  padding: 10px;
}

.heading {
  font-size: 13px;
  font-weight: 600;
  color: #343a40;
  width: 260px;
}
.data {
  font-size: 13px;
  font-weight: 500;
  color: #495057;
}

@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }
  .column {
    flex: 1;
    margin-bottom: 10px;
  }
}
</style>