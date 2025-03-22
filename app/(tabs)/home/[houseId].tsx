import { useLocalSearchParams, useRouter } from 'expo-router'
import React from 'react'

export default function houseId() {

    const router = useRouter();
    const {houseId} = useLocalSearchParams();
    
    return (
        <div>houseId {houseId} </div>
    )
}
