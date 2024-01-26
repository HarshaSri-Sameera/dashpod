/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createProfile = /* GraphQL */ `
  mutation CreateProfile(
    $input: CreateProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    createProfile(input: $input, condition: $condition) {
      playerId
      accountId
      profileId
      academyName
      firstName
      lastName
      mobileNumber
      emailId
      dob
      height
      weight
      gender
      updateMeasurements
      updateInterval
      buildingName
      street
      locality
      city
      state
      country
      pinCode
      location
      areasOfIntrest
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updateProfile = /* GraphQL */ `
  mutation UpdateProfile(
    $input: UpdateProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    updateProfile(input: $input, condition: $condition) {
      playerId
      accountId
      profileId
      academyName
      firstName
      lastName
      mobileNumber
      emailId
      dob
      height
      weight
      gender
      updateMeasurements
      updateInterval
      buildingName
      street
      locality
      city
      state
      country
      pinCode
      location
      areasOfIntrest
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deleteProfile = /* GraphQL */ `
  mutation DeleteProfile(
    $input: DeleteProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    deleteProfile(input: $input, condition: $condition) {
      playerId
      accountId
      profileId
      academyName
      firstName
      lastName
      mobileNumber
      emailId
      dob
      height
      weight
      gender
      updateMeasurements
      updateInterval
      buildingName
      street
      locality
      city
      state
      country
      pinCode
      location
      areasOfIntrest
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const createRegisterRecord = /* GraphQL */ `
  mutation CreateRegisterRecord(
    $input: CreateRegisterRecordInput!
    $condition: ModelRegisterRecordConditionInput
  ) {
    createRegisterRecord(input: $input, condition: $condition) {
      recordId
      accountId
      playerId
      playerName
      activityId
      activityName
      base
      color
      colorCode
      startTime
      prevMacId
      currentMacId
      hitCount
      missCount
      avgTime
      playerAge
      gender
      height
      weight
      lastName
      dateAndTime
      podsCount
      activityDuration
      podName
      categoryName
      categoryId
      analyticsValuesList {
        podName
        podColor
        podAddress
        isHit
        entryX
        entryY
        __typename
      }
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updateRegisterRecord = /* GraphQL */ `
  mutation UpdateRegisterRecord(
    $input: UpdateRegisterRecordInput!
    $condition: ModelRegisterRecordConditionInput
  ) {
    updateRegisterRecord(input: $input, condition: $condition) {
      recordId
      accountId
      playerId
      playerName
      activityId
      activityName
      base
      color
      colorCode
      startTime
      prevMacId
      currentMacId
      hitCount
      missCount
      avgTime
      playerAge
      gender
      height
      weight
      lastName
      dateAndTime
      podsCount
      activityDuration
      podName
      categoryName
      categoryId
      analyticsValuesList {
        podName
        podColor
        podAddress
        isHit
        entryX
        entryY
        __typename
      }
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deleteRegisterRecord = /* GraphQL */ `
  mutation DeleteRegisterRecord(
    $input: DeleteRegisterRecordInput!
    $condition: ModelRegisterRecordConditionInput
  ) {
    deleteRegisterRecord(input: $input, condition: $condition) {
      recordId
      accountId
      playerId
      playerName
      activityId
      activityName
      base
      color
      colorCode
      startTime
      prevMacId
      currentMacId
      hitCount
      missCount
      avgTime
      playerAge
      gender
      height
      weight
      lastName
      dateAndTime
      podsCount
      activityDuration
      podName
      categoryName
      categoryId
      analyticsValuesList {
        podName
        podColor
        podAddress
        isHit
        entryX
        entryY
        __typename
      }
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const createDashPod = /* GraphQL */ `
  mutation CreateDashPod(
    $input: CreateDashPodInput!
    $condition: ModelDashPodConditionInput
  ) {
    createDashPod(input: $input, condition: $condition) {
      podMacId
      accountId
      podName
      podType
      start_date
      update_date
      createdAt
      updatedAt
      id
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updateDashPod = /* GraphQL */ `
  mutation UpdateDashPod(
    $input: UpdateDashPodInput!
    $condition: ModelDashPodConditionInput
  ) {
    updateDashPod(input: $input, condition: $condition) {
      podMacId
      accountId
      podName
      podType
      start_date
      update_date
      createdAt
      updatedAt
      id
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deleteDashPod = /* GraphQL */ `
  mutation DeleteDashPod(
    $input: DeleteDashPodInput!
    $condition: ModelDashPodConditionInput
  ) {
    deleteDashPod(input: $input, condition: $condition) {
      podMacId
      accountId
      podName
      podType
      start_date
      update_date
      createdAt
      updatedAt
      id
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
