import {FlatList, Modal, Pressable, StyleSheet, Text, View} from 'react-native';
import {PostData} from "@/types/post";
import Post from "@/components/Post";
import { Stack } from "expo-router";
import {useState} from "react";

export default function HomeScreen() {

    const posts: PostData[] = [
        {
            title: "Mitt første innlegg!",
            description: "Sensasjonelt!"
        },
        {
            title: "Mitt andre innlegg!",
            description: "Ubeskrivelig flott!"
        },
    ];

    const [isModalVisible, setIsModalVisible] = useState(false);

    return (
    <View style={styles.mainContainer}>

        <Stack.Screen
            options={{
                headerRight: () => (
                    <Pressable onPress={() => setIsModalVisible(true)}>
                        <Text>Knapp?</Text>
                    </Pressable>
                ),
            }}
            />
        <Modal visible={isModalVisible} animationType="slide" transparent>
                <View style={styles.pressableStyle}>
                    <Text>This is a Modal!</Text>
                    <Pressable onPress={() => setIsModalVisible(false)}>
                    <Text style={styles.pressableTxt}>Knapp!</Text>
                </Pressable>

                </View>
        </Modal>
        <FlatList
            data={posts}
            ItemSeparatorComponent={()=><View style={{height: 16}}></View>}
            renderItem={(post) => <Post postData={post.item}/>}
        />
    </View>
  );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: "thistle",
        paddingHorizontal: 16,
        paddingVertical: 12,
    },
    pressableStyle: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "lightblue",
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 8,
    },
    modalContainer: {
        backgroundColor: "lightblue",
    },
    pressableTxt: {
        backgroundColor: "lightyellow",
        borderRadius: 50,
        paddingHorizontal: 12,
        paddingVertical: 8,

    },
});
