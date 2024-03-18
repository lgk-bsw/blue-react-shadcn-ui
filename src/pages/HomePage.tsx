import { Page, Header, HeaderTitle, Body } from "blue-react"
import { appLogo, appTitle } from "../shared"

import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger
} from "@/components/ui/drawer"

export default function HomePage() {
    return (
        <Page>
            <Header>
                <HeaderTitle logo={appLogo} appTitle={appTitle} />
            </Header>

            <Body containerClass="container pt-3">
                <ul>
                    <li>
                        <a href="https://bruegmann.github.io/blue-react" target="_blank" rel="noreferrer">
                            Blue React
                        </a>
                    </li>
                    <li>
                        <a href="https://ui.shadcn.com/" target="_blank" rel="noreferrer">
                            shadcn/ui
                        </a>
                    </li>
                </ul>

                <Drawer>
                    <DrawerTrigger asChild>
                        <button type="button" className="btn blue-btn-soft-primary">
                            Open Drawer
                        </button>
                    </DrawerTrigger>
                    <DrawerContent>
                        <div className="mx-auto w-full max-w-sm">
                            <DrawerHeader>
                                <DrawerTitle>Move Goal</DrawerTitle>
                                <DrawerDescription>Set your daily activity goal.</DrawerDescription>
                            </DrawerHeader>
                            <div className="p-4 pb-0">
                                <div className="mt-3 h-[120px]">Hello World</div>
                            </div>
                            <DrawerFooter>
                                <button type="button" className="btn blue-btn-soft-primary">
                                    Submit
                                </button>
                                <DrawerClose asChild>
                                    <button type="button" className="btn blue-btn-soft-secondary">
                                        Cancel
                                    </button>
                                </DrawerClose>
                            </DrawerFooter>
                        </div>
                    </DrawerContent>
                </Drawer>
            </Body>
        </Page>
    )
}
