"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

export default function page({params}) {


    const { id } = params;

    return (
        <div>
            the prod id: {id}
        </div>
    )
}
