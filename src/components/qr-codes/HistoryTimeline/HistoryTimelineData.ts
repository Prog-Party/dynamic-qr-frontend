
export interface HistoryTimelineData {
    QrCodeId: string;
    Order: string;
    Timestamp: string;
    CustomerId: string;
    OrganizationId: string;
    EventType: string;
    Details: { [key: string]: string };
    EventName: string;
    DetailsMessage?: React.ReactElement;
    Date: Date;
    Color: string;
    // This property is used to combine events with the same eventType
    CombinedData?: HistoryTimelineData[];
  }

export interface HistoryTimelineDataCombined {
  // This property is used to combine events with the same eventType
  CombinedData: HistoryTimelineData[];

}