import { QrCodeHistoryResponse } from "@/api/qr-code/history/history-get"
import { EventTypes } from "@/constants/qr-codes/EventTypes"
import React from "react"
import { HistoryTimelineData, HistoryTimelineDataCombined } from "./HistoryTimelineData"

export const PrepareData = (response: QrCodeHistoryResponse[]) : HistoryTimelineData[] => {
  return response.map((item) => {
    return {
      ...item,
      Date: new Date(item.Timestamp),
      EventName: getEventName(item.EventType),
      DetailsMessage: getDetailsMessage(item.EventType, item.Details),
      Color: getColor(item.EventType)
    } as HistoryTimelineData
  })
}

export const CombineData = (data: HistoryTimelineData[]): HistoryTimelineDataCombined[] => {
  // Combine events with the same eventType and CustomerId and add them to an array property
  // Only combine the events that are next to each other

  const combinedData: HistoryTimelineDataCombined[] = []

  let tempCombinedData: HistoryTimelineData[] = []

  data.forEach((item) => {
    if(tempCombinedData.length === 0){
      tempCombinedData.push(item)
      return
    }

    if (item.EventType === tempCombinedData[0].EventType 
      && item.CustomerId === tempCombinedData[0].CustomerId) {
      tempCombinedData.push(item)
    } else {
      combinedData.push({CombinedData: tempCombinedData})
      tempCombinedData = [item]
    }
  })

  if(tempCombinedData.length > 0)
    combinedData.push({CombinedData: tempCombinedData})

  console.log(combinedData)

  return combinedData
}

const getColor = (eventType: string): string => {
  switch (eventType) {
  case EventTypes.Lifecycle_Created:
    return "green"
  case EventTypes.Lifecycle_Updated:
  case EventTypes.Lifecycle_UpdatedTarget:
    return "orange"
  case EventTypes.Lifecycle_Deleted:
    return "red"
  case EventTypes.ScanEvents_Scanned:
    return "info"
  default:
    return "default"
  }
}

const getEventName = (eventType: string): string => {
  switch (eventType) {
  case EventTypes.Lifecycle_Created:
    return "Created"
  case EventTypes.Lifecycle_Updated:
    return "Updated"
  case EventTypes.Lifecycle_UpdatedTarget:
    return "Updated"
  case EventTypes.Lifecycle_Deleted:
    return "Deleted"
  case EventTypes.ScanEvents_Scanned:
    return "Scanned"
  default:
    return "Unknown"
  }
}

const getDetailsMessage = (EventType: string, Details: { [key: string]: string; }): React.ReactElement | undefined => {
  switch (EventType) {
  case EventTypes.Lifecycle_Updated:
    return <>
      <b>Updated fields</b>
      {Object.keys(Details).map((key) => {
        return <div key={key}>{key} to {Details[key]}</div>
      })}
    </>
  case EventTypes.Lifecycle_UpdatedTarget:
    return <>Target changed to {Details.NewValue}</>
  default:
    return undefined
  }
}