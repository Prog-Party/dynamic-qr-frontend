"use client"
import { getCodes, QrCodesGetResponse } from "@/api/qr-codes-get"
import { createCode } from "@/api/qr-codes-post"
import PageContainer from "@/components/container/PageContainer"
import DashboardCard from "@/components/shared/DashboardCard"
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react"
import QrCode2Icon from "@mui/icons-material/QrCode2"
import { Box, Button, Chip } from "@mui/material"
import Link from "next/link"
import { useEffect, useState } from "react"

const QrCodesPage = () => {

  const { user } = useAuth0()
  const [qrCodes, setQrCodes] = useState<QrCodesGetResponse[]>([])

  const createQrCode = async () => {
    const result = await createCode(user!.organizationId)
    console.log("Result: " + result)
    window.location.href = `/auth/qr-codes/${result.Id}`
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
              <QrCodeView code={{ Id: "leetleet", IncludeMargin: true }} />
            </li>
            {qrCodes.map((code) => (
              <li key={code.Id}>
                <QrCodeView code={code} />
              </li>
            ))}

          </ul>
        </>
      </DashboardCard>
      <DashboardCard title="Create QR Code">
        <Button
          variant="contained"
          color="primary"
          onClick={createQrCode}
          endIcon={<QrCode2Icon />}>
          Create QR Code
        </Button>
      </DashboardCard>
    </PageContainer>
  )
}

const QrCodeView = ({ code }: { code: QrCodesGetResponse }) => (
  <>
    <Chip
      label={code.Id}
      variant='outlined'
      size='small'
      sx={{
        width: "80px",
        marginBottom: 1,
      }} />
    <Box
      ml={2}
      component={Link}
      href={`/auth/qr-codes/${code.Id}`}>
      QR Code [todo-name]
    </Box>
  </>
)

export default withAuthenticationRequired(QrCodesPage)

