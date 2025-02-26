"use client"
import { QrCodeGetResponse } from "@/api/backend/data-contracts"
import { getDefaultHeaders } from "@/api/backend/default-headers"
import { QrCodes } from "@/api/backend/QrCodes"
import PageContainer from "@/components/container/PageContainer"
import HistoryTimeline from "@/components/qr-codes/HistoryTimeline"
import DashboardCard from "@/components/shared/DashboardCard"
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react"
import { Grid } from "@mui/material"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

const OrganizationPage = () => {

  const router = useRouter()
  const { id } = router.query

  const { user } = useAuth0()
  const [qrCode, setQrCode] = useState<QrCodeGetResponse | undefined>(undefined)

  useEffect(() => {
    if(id == null)
      return

    const fetchData = async () => {
      const api = new QrCodes()
      const apiResult = await api.qrCodeGet(id as string, { headers: getDefaultHeaders(user) })
      setQrCode(apiResult.data)
    }

    fetchData()
  }, [id])

  if(user?.organizationId == null )
    return <>Please log in</>

  return (
    <PageContainer title="QR code" description="welcome to a qr code page">
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <DashboardCard title="QR code">
            <>
                Info over qr code
              <br />Id: {id}
              <br />Value: {qrCode?.Value}
            </>
          </DashboardCard>
        </Grid>
        <Grid item xs={6}>
          <DashboardCard title="QR code history">
            <HistoryTimeline qrCodeId={id as string} />
          </DashboardCard>
        </Grid>
      </Grid>
    </PageContainer>
  )
}

export default withAuthenticationRequired(OrganizationPage)

