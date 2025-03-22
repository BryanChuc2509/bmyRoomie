import { FontAwesome } from '@expo/vector-icons';
import { Tabs, useRouter } from 'expo-router';
import { Button } from 'react-native';

export default function TabLayout() {
    const router = useRouter();

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: '#fff',
                headerShown: false,
                tabBarShowLabel: false,
                tabBarLabelPosition: 'beside-icon',
                tabBarActiveBackgroundColor: '#8635FD',
                tabBarStyle: {
                    backgroundColor: '#F9F5FF',
                    height: 50,
                },
                animation: 'shift',
                tabBarInactiveTintColor: '#8635FD',
            }}
            backBehavior="history"
        >
            <Tabs.Screen
                name="index"
                options={{
                    tabBarItemStyle: { display: "none" },
                }}
            />

            <Tabs.Screen
                name="home"
                options={{
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
                }}
            />

            <Tabs.Screen
                name="addHome"
                options={{
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="plus" color={color} />,
                }}
            />

            <Tabs.Screen
                name="chats"
                options={{
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="comment" color={color} />,
                }}
            />

            <Tabs.Screen
                name="profile"
                options={{
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="user" color={color} />,
                }}
            />
        </Tabs>
    );
}
