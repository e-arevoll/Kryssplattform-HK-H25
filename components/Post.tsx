import {StyleSheet, Text, View} from "react-native";
import {PostData} from "@/types/post";

export type PostProps = {
    postData: PostData;
}

export default function Post({ postData }: PostProps) {

    return (
        <View style={styles.post}>
            <Text style={styles.header}>{postData.title}</Text>
            <View>
                <Text>{postData.description}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    post: {
        backgroundColor: "white",
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 8,
    },
    header: {
        color: "darkslategrey",
        borderRadius: 8,
        flex: 0,
    }
});