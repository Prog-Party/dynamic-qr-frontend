"use client"
import { getCode, QrCodeGetResponse } from "@/api/qr-code/qr-code"
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
  const organizationId = user?.organizationId ?? -1
  const [qrCode, setQrCode] = useState<QrCodeGetResponse | undefined>(undefined)

  useEffect(() => {
    if(id == null)
      return

    const fetchData = async () => {
      const apiResult = await getCode(organizationId, id as string)
      setQrCode(apiResult)
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

