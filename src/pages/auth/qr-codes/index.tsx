"use client"
import { getCodes, QrCodesGetResponse } from "@/api/qr-codes-get"
import { createCode } from "@/api/qr-codes-post"
import PageContainer from "@/components/container/PageContainer"
import DashboardCard from "@/components/shared/DashboardCard"
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react"
import { Badge, Button } from "@mui/material"
import Link from "next/link"
import { useEffect, useState } from "react"

const QrcodesPage = () => {

  const { user } = useAuth0()
  const [qrCodes, setQrCodes] = useState<QrCodesGetResponse[]>([])

  const createQrCode = async () => {
    const result = await createCode(user!.organizationId, "temp")
  }

  useEffect(() => {
    const fetchData = async () => {
      const apiResult = await getCodes(user!.organizationId)
      setQrCodes(apiResult)
    }

    fetchData()
  }, [])

  return (
    <PageContainer title="Overview of the QR Codes" description="this is page">
      <DashboardCard title="QR Codes">
        <>
          <ul>
            <li>
              <Link href="/auth/qr-codes/leetleet">
                QR Code [todo-name] (<Badge color='secondary'>leetleet</Badge>)
              </Link>
            </li>
            {qrCodes.map((code) => (
              <li key={code.Id}>
                <Link href={`/auth/qr-codes/${code.Id}`}>
                  QR Code {code.Id}
                </Link>
              </li>
            ))}
          </ul>
        </>
      </DashboardCard>
      <DashboardCard title="Create QR Code">
        <Button variant="contained" color="primary" onClick={createQrCode}>
          Create QR Code
        </Button>
      </DashboardCard>
    </PageContainer>
  )
}

export default withAuthenticationRequired(QrcodesPage)

