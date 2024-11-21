"use client"

import { useState } from "react"

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleSidebar = () => {
        setIsOpen(!isOpen)
    }

    const SIDEBAR_OPEN = "bg-red-400 w-48 h-screen"

    const SIDEBAR_CLOSED = "bg-blue-400 w-24 h-screen"

    const BUTTON = "bg-blue-400 p-2 rounded-md w-5/6 m-auto"


    return (
    <div className={`${isOpen ? SIDEBAR_OPEN : SIDEBAR_CLOSED}`}>
        <div>
            <button onClick={toggleSidebar}>
                {isOpen ? "Close" : "Open"}
            </button>
            <div className="flex text-center flex-col gap-2">
                <button className={`${BUTTON}`}>
                    Budget
                </button>
                <button className={`${BUTTON}`}>
                    Transactions
                </button>
            </div>
            <div className="flex justify-center hover:cursor-pointer"
                onClick={toggleSidebar}
            >
                <i className="fa-solid fa-chevron-left scale-150"></i>
            </div>
        </div>

    </div>
    )
}

export default Sidebar