"use client"

import { useState } from "react"

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleSidebar = () => {
        setIsOpen(!isOpen)
    }

    const SIDEBAR_OPEN = "bg-red-400 w-56 h-screen relative"
    const SIDEBAR_CLOSED = "bg-blue-400 w-24 h-screen relative"
    const BUTTON = "bg-blue-400 p-2 rounded-md w-5/6 m-auto"
    const BUTTON_OPEN = "grid grid-cols-[auto_1fr] items-center"
    const BUTTON_CLOSED = "flex justify-center items-center"
    const ICON_CLOSED = "scale-150"


    return (
    <div className={`${isOpen ? SIDEBAR_OPEN : SIDEBAR_CLOSED}`}>
        <div 
            className="absolute top-2 right-2 hover:cursor-pointer p-2"
            onClick={toggleSidebar}
        >
            <i className={`fa-solid fa-chevron-${isOpen ? 'left' : 'right'} scale-150`}></i>
        </div>

        <div className="pt-12">
            <div className="flex text-center flex-col gap-2">
                <button className={`${BUTTON} ${isOpen ? BUTTON_OPEN : BUTTON_CLOSED}`}>
                    <i className={`fa-solid fa-wallet ${!isOpen && ICON_CLOSED}`}></i>
                    {isOpen && <span className="text-center">Budget</span>}
                </button>
                <button className={`${BUTTON} ${isOpen ? BUTTON_OPEN : BUTTON_CLOSED}`}>
                    <i className={`fa-solid fa-money-bill-transfer ${!isOpen && ICON_CLOSED}`}></i>
                    {isOpen && <span className="text-center">Transactions</span>}
                </button>
            </div>
        </div>
    </div>
    )
}

export default Sidebar