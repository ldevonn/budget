"use client"

import { useEffect, useState } from "react"


const BudgetsPage = () => {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Category</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Food</td>
                        <td>100</td>
                    </tr>
                    <tr>
                        <td>Entertainment</td>
                        <td>50</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default BudgetsPage
