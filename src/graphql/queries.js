/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProfile = /* GraphQL */ `
  query GetProfile($id: ID!) {
    getProfile(id: $id) {
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
export const listProfiles = /* GraphQL */ `
  query ListProfiles(
    $filter: ModelProfileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProfiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncProfiles = /* GraphQL */ `
  query SyncProfiles(
    $filter: ModelProfileFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncProfiles(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getRegisterRecord = /* GraphQL */ `
  query GetRegisterRecord($id: ID!) {
    getRegisterRecord(id: $id) {
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
export const listRegisterRecords = /* GraphQL */ `
  query ListRegisterRecords(
    $filter: ModelRegisterRecordFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRegisterRecords(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncRegisterRecords = /* GraphQL */ `
  query SyncRegisterRecords(
    $filter: ModelRegisterRecordFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncRegisterRecords(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getDashPod = /* GraphQL */ `
  query GetDashPod($id: ID!) {
    getDashPod(id: $id) {
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
export const listDashPods = /* GraphQL */ `
  query ListDashPods(
    $filter: ModelDashPodFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDashPods(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncDashPods = /* GraphQL */ `
  query SyncDashPods(
    $filter: ModelDashPodFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncDashPods(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
