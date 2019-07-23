const state = {
  zIndex: 0,
  jwt: null,
  request: {
    addForm : {
      tab: "General",
      valCount: {
        general: 0,
        submitter: 0,
        description: 0,
        attach: 0,
      }
    }
  },
  case: {
    addFormTab: null,
    addFormValidationCount: 0,
  },
  screening: {
    addFormTab: null,
    addFormValidationCount: 0,
  },
  activity: {
    addFormTab: null,
    addFormValidationCount: 0,
  }
}

export default state