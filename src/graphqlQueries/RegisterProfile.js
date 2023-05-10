const RegisterProfile = `
mutation registerProfile {
    registerProfile(registerProfileInput: {
        playerId: "1238733",
        accountId: "123456",
        profileId: 45681,
        academyName: "Embe Automations",
        firstName: "John",
        lastName: "Doe",
        mobileNumber: "1234567890",
        emailId: "johndoe@example.com",
        dob: "2000-01-01",
        height: "180",
        weight: "75",
        gender: "male",
        updateMeasurements: "true",
        updateInterval: "monthly",
        buildingName: "Embe Complex",
        street: "Red Bull Street",
        locality: "Harley Quinn",
        city: "Bangalore",
        state: "Karnataka",
        country: "India",
        pinCode: "123456",
        location: "Bangalore",
        areasOfIntrest: ["Martial Arts", "Football"]
      }) {
      message
      status
      playerId
    }
  }
`

export default RegisterProfile;