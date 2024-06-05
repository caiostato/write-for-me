"use client"
import React from "react"

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import LoginForm from "@/features/auth/LoginForm"

const Header = () => {
    return (
        <div className="h-20 w-full flex flex-row justify-between border-b px-52 items-center">
            <p className="font-semibold text-lg">Logo</p>
            <div className="flex flex-row gap-4">
                <Button variant="ghost">Pricing</Button>
                <Button variant="ghost">Sign in</Button>
                <Button className="w-full">Sign up</Button>
            </div>
        </div>
    )
}

export default Header
