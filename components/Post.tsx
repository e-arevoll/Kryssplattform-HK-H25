import {StyleSheet, Text, View} from "react-native";
import {PostData} from "@/types/post";

export type PostProps = {
    postData: PostData;
}


export default function Post({ postData }: PostProps) {

    return (
        <View style={styles.post}>
            <Text>{postData.title}</Text>
            <View>
                <Text>{postData.description}</Text>
            </View>
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
    post: {
        backgroundColor: "white",
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 8,
    }
});