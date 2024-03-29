import { Layout, SidebarMenu, SidebarMenuItem } from "blue-react"
import {
    List,
    House,
    HouseFill,
    XCircleFill,
    InfoCircleFill,
    CheckCircleFill,
    ExclamationCircleFill
} from "react-bootstrap-icons"

import HomePage from "./pages/HomePage"

import "./styles/main.scss"

export default function App() {
    return (
        <Layout
            expandSidebar
            sidebarToggleIconComponent={<List />}
            pages={[
                {
                    name: "home",
                    component: <HomePage />
                }
            ]}
            statusIcons={{
                danger: <XCircleFill />,
                info: <InfoCircleFill />,
                success: <CheckCircleFill />,
                warning: <ExclamationCircleFill />
            }}
        >
            <SidebarMenu sidebarClass="overflow-visible" menuClass="overflow-visible">
                <SidebarMenuItem href="#" icon={<House />} iconForActive={<HouseFill />} label="Home" isHome />
            </SidebarMenu>
        </Layout>
    )
}
