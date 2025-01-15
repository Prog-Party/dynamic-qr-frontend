"use client"
import { QrCodeGetAllResponse } from "@/api/backend/data-contracts"
import { getDefaultHeaders } from "@/api/backend/default-headers"
import { QrCodes } from "@/api/backend/QrCodes"
import PageContainer from "@/components/container/PageContainer"
import DashboardCard from "@/components/shared/DashboardCard"
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react"
import { Button, Typography } from "@mui/material"
import Link from "next/link"
import { useEffect, useState } from "react"

const OrganizationPage = () => {

  const { user } = useAuth0()
  const [qrCodes, setQrCodes] = useState<QrCodeGetAllResponse[]>()

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
        </>
      </DashboardCard>
      <DashboardCard title="Overview QR Codes">
        <Link href="/auth/qr-codes/c57fc106-b7f9-4f48-b70c-f0ea1fe39752">
          QR Code 1 (id c57fc106-b7f9-4f48-b70c-f0ea1fe39752)
        </Link>
      </DashboardCard>
      <DashboardCard title="Create QR Code">
        <Button variant="contained" color="primary" onClick={createQrCode}>
          Create QR Code
        </Button>
      </DashboardCard>
    </PageContainer>
  )
}

export default withAuthenticationRequired(OrganizationPage)

