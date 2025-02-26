"use client"
import PageContainer from "@/components/container/PageContainer"
import { Box, Grid } from "@mui/material"
// components
import GenerateStaticQr from "@/components/generate/GenerateStaticQR"
import DashboardCard from "@/components/shared/DashboardCard"

const CreateQrCodePage = () => {

  return (
    <PageContainer title="Create a QR code" description="this is a qr code">
      <Box>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={12}>
            <DashboardCard title="Generate static QR ">
              <>
                  Generate your static QR code now. It can be anything, from text to an url.
                <GenerateStaticQr />
              </>
            </DashboardCard>
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  )
}

export default CreateQrCodePage
