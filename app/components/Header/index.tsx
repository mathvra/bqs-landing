import React from 'react';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from '@/components/ui/button';

export function Header() {
    return (
        <div className='flex items-center justify-center border-b border-b-solid border-b-gray-100  w-full'>
            <div className="flex justify-between items-center py-4 px-2 lg:px-0 container">
                <Link href={"/"} className='flex gap-2 items-center font-bold'>
                    <Avatar className='w-[37px] h-[37px]'>
                        <AvatarImage src="logo.png" />
                        <AvatarFallback>BQ</AvatarFallback>
                    </Avatar>
                    <span>Barato que só!</span>
                </Link>
                <Button asChild className='rounded-3xl bg-linear-to-r from-30% from-green-500 to-emerald-600 hover:from-70%'>
                    <Link href={"#"}>WhatsApp</Link>
                </Button>
            </div>
        </div>
    );
}
