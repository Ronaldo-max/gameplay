import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { ButtonIcon } from "../../components/ButtonIcon";
import IllustrationImg from "../../assets/illustration.png";
import { styles } from "./styles";

export function SignIn () {
    const navigation = useNavigation();

    function handleSinIn() {
        navigation.navigate('Home');
    }

    return (
        <View style={styles.container}>
            <ScrollView style={{marginBottom: 20,}}>
                <Image 
                    source={IllustrationImg} 
                    style={styles.image}
                />

                <View style={styles.content}>
                    <Text style={styles.title}>
                        Conecte-se {'\n'}
                        e organize suas {'\n'}
                        jogatinas
                    </Text>

                    <Text style={styles.subtitle}>
                        Crie grupos para jogar games {'\n'}
                        favoritos com seus amigos
                    </Text>

                    <ButtonIcon
                        onPress={handleSinIn}
                        title="Entrar com Discord"
                    />
                </View>
            </ScrollView>
        </View>
    )
}