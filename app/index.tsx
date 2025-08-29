import { Image } from 'expo-image';
import {FlatList, Modal, Platform, Pressable, StyleSheet, Text, View} from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import {Colors} from "@/constants/Colors";
import {PostData} from "@/types/post";
import Post from "@/components/Post";
import { Stack } from "expo-router";
import React, {useState} from "react";

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
    ] ;


    const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <View style={styles.mainContainer}>

        <Modal
            visible={isModalVisible}>
            <Pressable onPress={() => setIsModalVisible(true)}>
                <Text>Knapp?</Text>
            </Pressable>

        </Modal>
        <FlatList
            data={posts}
            ItemSeparatorComponent={()=><View style={{height: 12}}></View>}
            renderItem={(post) => (
                <Post postData={post.item}/>
            )}/>

        <Stack.Screen
            options={
                {
                    headerRight: () => (
                        <Pressable onPress={() => console.log("Knapppppp!")}>
                            <Text>Knapp</Text>
                        </Pressable>
                    )
                }
            }/>
    </View>
  );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: "lightgray",
        paddingHorizontal: 16,
        paddingVertical: 12,
    },
});
