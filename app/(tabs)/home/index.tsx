import { useRouter } from 'expo-router'
import React from 'react'
import { Button } from 'react-native'

export default function index() {

    const router = useRouter();
    return (
        <>
            <div>index</div>
            <Button title='Ver casa'
                onPress={() => router.push('/home/1') }
            ></Button>
        </>
    )
}

