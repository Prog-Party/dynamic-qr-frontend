import { getQrCodeHistory, QrCodeHistoryResponse } from "@/api/qr-code/history/history-get";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Timeline from '@mui/lab/Timeline';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import { styled } from '@mui/material/styles';
import { useEffect, useState } from "react";

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&::before': {
    display: 'none',
  },
}));


const HistoryTimeline = ({ qrCodeId }: { qrCodeId: string }) => {

  const { user } = useAuth0()
  const organizationId = user?.organizationId ?? -1
  const [history, setHistory] = useState<QrCodeHistoryResponse[]>([])

  useEffect(() => {
    if (qrCodeId == null)
      return

    const fetchData = async () => {
      const apiResult = await getQrCodeHistory(organizationId, qrCodeId)
      setHistory(apiResult)
    }

    fetchData()
  }, [qrCodeId])

  return (
    <>
      <b>HISTORY</b>
      <Timeline>
        {history.map((historyItem) => (
          <TimelineItem key={historyItem.Order}>
            <TimelineContent style={{minWidth: '150px' }}>
              <b>{historyItem.EventName}</b>
              <br />
              {historyItem.Date.toLocaleString(undefined, {
                year: historyItem.Date.getFullYear() === new Date().getFullYear() ? undefined : 'numeric',
                month: 'short',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
                hour12: false
              })}
            </TimelineContent>
            <TimelineSeparator>
              <TimelineDot variant="outlined" style={{ borderColor: historyItem.Color }} />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent style={{minWidth: '280px'}}>

              {historyItem.DetailsMessage && <Accordion style={{ border: '0px'}}>
                <AccordionSummary
                  style={{ border: '0px'}}
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`panel-${historyItem.Order}-content`}
                  id={`panel-${historyItem.Order}-header`}
                >
                  <b>More details</b>
                </AccordionSummary>
                <AccordionDetails>
                  {historyItem.DetailsMessage}
                </AccordionDetails>
              </Accordion>
              }
            </TimelineContent>
          </TimelineItem>
        ))}

      </Timeline>
    </>
  )
}

export default withAuthenticationRequired(HistoryTimeline)
