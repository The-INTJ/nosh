'use client'
import { createContext, Context } from "react";
import {User} from 'firebase/auth'

export const UserContext: Context<{
    user: any,
    username: any
}> = createContext({user:null, username:null});