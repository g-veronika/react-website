import React from 'react'
import { scrollToTop } from 'react-scroll/modules/mixins/animate-scroll'
import SignIn from '../components/Signin'

const SigninPage = () => {
    return (
        <>
        <scrollToTop />
            <SignIn />
        </>
    )
}

export default SigninPage
