"use client"
import { QrCodeGetResponse } from "@/api/backend/data-contracts"
import { getDefaultHeaders } from "@/api/backend/default-headers"
import { QrCodes } from "@/api/backend/QrCodes"
import PageContainer from "@/components/container/PageContainer"
import DashboardCard from "@/components/shared/DashboardCard"
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

const OrganizationPage = () => {

  const router = useRouter()
  const { id } = router.query

  const { user } = useAuth0()
  const organizationId = user?.organizationId ?? -1
  const [qrCode, setQrCode] = useState<QrCodeGetResponse>()

  useEffect(() => {
    const fetchData = async () => {
      const api = new QrCodes()
      const apiResult = await api.qrCodeGet(id as string, { headers: getDefaultHeaders(user) })
      setQrCode(apiResult.data)
    }

    fetchData()
  }, [])

  return (
    <PageContainer title="QR code" description="welcome to a qr code page">
      <DashboardCard title="QR code information">
        <>
            Info over qr code
        </>
      </DashboardCard>
    </PageContainer>
  )
}

export default withAuthenticationRequired(OrganizationPage)

