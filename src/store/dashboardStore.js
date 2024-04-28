import { defineStore } from "pinia";

export const useDashboardStore = defineStore("dashboard", {
    state: () => ({
        userDetails: {
            currentOrganization: "World Bank Group",
            Skills: "HTML, CSS, Javascript",
            availableFrom: "Jul, 14, 2023",
            currentSalary: "$6000",
            noticePeriod: "90 Days",
            fullAddress: "9400 Ashton Rd, Philadelphia...",
            resume: "Resume",
            totalExperience: "5 years",
            summary: "Current Organization",
            currentEmploymentStatus: "Employed",
            dob: "12-10-2002",
            releventExperience: "4 years",
            salaryExpectation: "$9000",
            status: "Submitted to Client",
            salaryType: "Annul",
            languageSkills: "english",

        },
        allUserDetails: [{
            currentOrganization: "World Bank Group",
            Skills: "HTML, CSS, Javascript",
            availableFrom: "Jul, 14, 2023",
            currentSalary: "$6000",
            noticePeriod: "90 Days",
            fullAddress: "9400 Ashton Rd, Philadelphia...",
            resume: "Resume",
            totalExperience: "5 years",
            summary: "Current Organization",
            currentEmploymentStatus: "Employed",
            dob: "12-10-2002",
            releventExperience: "4 years",
            salaryExpectation: "$9000",
            status: "Submitted to Client",
            salaryType: "Annul",
            languageSkills: "english",
        }, {
            currentOrganization: "World Bank Group",
            Skills: "HTML, CSS, Javascript",
            availableFrom: "Jul, 14, 2023",
            currentSalary: "$6000",
            noticePeriod: "90 Days",
            fullAddress: "9400 Ashton Rd, Philadelphia...",
            resume: "Resume",
            totalExperience: "5 years",
            summary: "Current Organization",
            currentEmploymentStatus: "Employed",
            dob: "12-10-2002",
            releventExperience: "4 years",
            salaryExpectation: "$9000",
            status: "Submitted to Client",
            salaryType: "Annul",
            languageSkills: "english",
        }]
    }),
    actions: {

    },
    getters: {
        getUsers: (state) => state.userDetails,
        getAllUsers: (state) => state.allUserDetails,
    },
});