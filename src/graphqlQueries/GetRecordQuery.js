const GetRecordQuery = `query getRecordActivity {
  getRecordActivity(accountId: "b76822fd-534c-4650-8a62-5abd5a14b784", last_upd_time: "2023-03-21") {
    status
    data {
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
      }
    }
    message
  }
}`;

export default GetRecordQuery;
