/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateProfile = /* GraphQL */ `
  subscription OnCreateProfile($filter: ModelSubscriptionProfileFilterInput) {
    onCreateProfile(filter: $filter) {
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
export const onUpdateProfile = /* GraphQL */ `
  subscription OnUpdateProfile($filter: ModelSubscriptionProfileFilterInput) {
    onUpdateProfile(filter: $filter) {
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
export const onDeleteProfile = /* GraphQL */ `
  subscription OnDeleteProfile($filter: ModelSubscriptionProfileFilterInput) {
    onDeleteProfile(filter: $filter) {
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
export const onCreateRegisterRecord = /* GraphQL */ `
  subscription OnCreateRegisterRecord(
    $filter: ModelSubscriptionRegisterRecordFilterInput
  ) {
    onCreateRegisterRecord(filter: $filter) {
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
export const onUpdateRegisterRecord = /* GraphQL */ `
  subscription OnUpdateRegisterRecord(
    $filter: ModelSubscriptionRegisterRecordFilterInput
  ) {
    onUpdateRegisterRecord(filter: $filter) {
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
export const onDeleteRegisterRecord = /* GraphQL */ `
  subscription OnDeleteRegisterRecord(
    $filter: ModelSubscriptionRegisterRecordFilterInput
  ) {
    onDeleteRegisterRecord(filter: $filter) {
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
export const onCreateDashPod = /* GraphQL */ `
  subscription OnCreateDashPod($filter: ModelSubscriptionDashPodFilterInput) {
    onCreateDashPod(filter: $filter) {
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
export const onUpdateDashPod = /* GraphQL */ `
  subscription OnUpdateDashPod($filter: ModelSubscriptionDashPodFilterInput) {
    onUpdateDashPod(filter: $filter) {
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
export const onDeleteDashPod = /* GraphQL */ `
  subscription OnDeleteDashPod($filter: ModelSubscriptionDashPodFilterInput) {
    onDeleteDashPod(filter: $filter) {
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
