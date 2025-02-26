import BusinessIcon from "@mui/icons-material/Business"
import DashboardIcon from "@mui/icons-material/Dashboard"
import QrCode2Icon from "@mui/icons-material/QrCode2"
import WalletIcon from "@mui/icons-material/Wallet"

import { uniqueId } from "lodash"

const Menuitems = [
  {
    id: uniqueId(),
    title: "Home",
    icon: DashboardIcon,
    href: "/auth",
  },
  {
    navlabel: true,
    subheader: "QR codes",
  },
  {
    id: uniqueId(),
    title: "Overview",
    icon: QrCode2Icon,
    href: "/auth/qr-codes",
  },
  {
    navlabel: true,
    subheader: "Organization stuff",
  },
  {
    id: uniqueId(),
    title: "Organization",
    icon: BusinessIcon,
    href: "/auth/organization",
  },
  {
    id: uniqueId(),
    title: "Wallet",
    icon: WalletIcon,
    href: "/auth/wallet",
  }
]

export default Menuitems
