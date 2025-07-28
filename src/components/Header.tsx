'use client'
import React from 'react'
import { Title, APP_TITLE } from '@/lib/constant'
import { Navbar, NavbarBrand, NavbarItem, NavbarContent } from "@/components/ui/nav";
import Logo from '@/components/Logo';
export default function Header() {
    return (
        <Navbar isBordered>
            <NavbarBrand>
                <Logo />
                <p className="font-bold text-inherit">{Title}</p>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                    <h1 className="font-bold text-inherit">{APP_TITLE}</h1>
                </NavbarItem>
            </NavbarContent>

        </Navbar>
    )
}
