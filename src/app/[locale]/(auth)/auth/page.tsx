"use client"

import { createClient } from '@supabase/supabase-js'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'

const supabase = createClient(`${process.env.NEXT_PUBLIC_SUPABASE_URL}`, `${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`)

import React from 'react'

const AuthPage = () => {
    return (
    <div className='bg-gray-50 w-full'>
        <div className='flex items-center justify-center min-h-screen'>
            <Auth 
            supabaseClient={supabase} 
            providers={['google', 'apple', 'facebook']}
            appearance={{ theme: ThemeSupa,
                className: {
                    container: "min-w-96",
                },
                variables:{
                    default: {
                        colors: {
                            brand: "red",
                            brandAccent: "black",
                        }
                    }
                }
            }} 
            
            />
        </div>
    </div>
    )
}

export default AuthPage