"use client"
import { QrCodeGetAllResponse } from "@/api/backend/data-contracts"
import { getDefaultHeaders } from "@/api/backend/default-headers"
import { QrCodes } from "@/api/backend/QrCodes"
import PageContainer from "@/components/container/PageContainer"
import DashboardCard from "@/components/shared/DashboardCard"
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react"
import { Typography } from "@mui/material"
import { useEffect, useState } from "react"

const OrganizationPage = () => {

  const { user } = useAuth0()
  const [qrCodes, setQrCodes] = useState<QrCodeGetAllResponse[]>([])

  const createQrCode = async () => {
    //const result = await createCode(user!.organizationId, "temp")
  }

  useEffect(() => {
    const fetchData = async () => {
      const api = new QrCodes()
      const result = await api.qrCodeGetAll({ headers: getDefaultHeaders(user) })
      setQrCodes(result.data)
    }

    fetchData()
  }, [])

  return (
    <PageContainer title="Organization" description="this is Organization page">
      <DashboardCard title="Organization">
        <>
          <ul>
            <li>Organization ID: {user?.organizationId}</li>
            <li>Name: {user?.nickname}</li>
            <li>E-mail: {user?.email}</li>
          </ul>
          <Typography>
            <b>Description:</b> Information about this person&apos;s organization. Invite colleagues, maybe some rolebased stuff, etc.
          </Typography>
          <p>
            {/* QR Codes: {qrCodes} */}
          </p>
        </>
      </DashboardCard>
    </PageContainer>
  )
}

export default withAuthenticationRequired(OrganizationPage)

