import { getQrCodeHistory, QrCodeHistoryResponse } from "@/api/qr-code/history/history-get"
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import Timeline from "@mui/lab/Timeline"
import TimelineConnector from "@mui/lab/TimelineConnector"
import TimelineContent from "@mui/lab/TimelineContent"
import TimelineDot from "@mui/lab/TimelineDot"
import TimelineItem from "@mui/lab/TimelineItem"
import TimelineSeparator from "@mui/lab/TimelineSeparator"
import { Stack } from "@mui/material"
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion"
import AccordionDetails from "@mui/material/AccordionDetails"
import AccordionSummary from "@mui/material/AccordionSummary"
import { styled } from "@mui/material/styles"
import { useEffect, useState } from "react"
import { HistoryTimelineData, HistoryTimelineDataCombined } from "./HistoryTimelineData"
import { CombineData, PrepareData } from "./HistoryTimelineDataHelper"

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}))

const HistoryTimeline = ({ qrCodeId }: { qrCodeId: string }) => {

  const { user } = useAuth0()
  const organizationId = user?.organizationId ?? -1
  const [history, setHistory] = useState<QrCodeHistoryResponse[]>([])
  const [data, setData] = useState<HistoryTimelineDataCombined[]>([])

  useEffect(() => {
    if (qrCodeId == null)
      return

    const fetchData = async () => {
      const apiResult = await getQrCodeHistory(organizationId, qrCodeId)
      setHistory(apiResult)
    }

    fetchData()
  }, [qrCodeId])

  useEffect(() => {

    const peparedData = PrepareData(history)
    const combinedData = CombineData(peparedData)
    setData(combinedData)
  }, [history])

  return (
    <>
      <Timeline>
        {data.map((items) => {
          const item = items.CombinedData[0]
          const hasMultipleItems = items.CombinedData.length > 1

          return (
            <TimelineItem key={item.Order}>
              <TimelineContent style={{ minWidth: "150px" }}>
                <b>{item.EventName}</b>
                <span style={{ fontSize: '0.8em' }}>
                  &nbsp; by {item.CustomerId}
                </span>
                <br />
                <span style={{ fontSize: '0.8em' }}>
                  {itemDateToString(item)}
                </span>
              </TimelineContent>
              <TimelineSeparator>
                <TimelineDot variant="outlined" style={{ borderColor: item.Color }} />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent style={{ minWidth: "280px" }}>

                {item.DetailsMessage && <Accordion style={{ border: "0px" }}>
                  <AccordionSummary
                    style={{ border: "0px" }}
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={`panel-${item.Order}-content`}
                    id={`panel-${item.Order}-header`}
                  >
                    More details
                  </AccordionSummary>
                  <AccordionDetails>
                    <Stack spacing={2} direction='column'>
                      {items.CombinedData.map((x) => (
                        <div key={`combined-data-${x.Order}`}>
                          {hasMultipleItems && <>
                            <b>On {itemDateToString(x)}</b>
                            <br />
                          </>
                          }
                          {x.DetailsMessage}
                        </div>
                      ))}
                    </Stack>
                  </AccordionDetails>
                </Accordion>
                }
              </TimelineContent>
            </TimelineItem>
          )
        })}

      </Timeline>
    </>
  )
}

const itemDateToString = (item: HistoryTimelineData) => {
  return item.Date.toLocaleString(undefined, {
    year: item.Date.getFullYear() === new Date().getFullYear() ? undefined : "numeric",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
  })
}


export default withAuthenticationRequired(HistoryTimeline)
