import React, { useContext, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { AuthContext } from '../../contexts/auth';
import styles from './styles';


function Signin() {
    const { signIn } = useContext(AuthContext)
    const [email, setEmail] = useState('')
    const [nome, setNome] = useState('')
    const [password, setPassword] = useState('')
    const [hidePass, setHidePass] = useState(true)
    const navigation = useNavigation();

    function handleSignIn() {
        signIn(email, password, nome)
    }

    return (
        <View style={styles.inputs}>

            <View style={styles.txts}>
                <View style={styles.inputTxt} >
                    <TextInput placeholder="Nome de usuario" style={styles.input} onChangeText={(e) => setNome(e)} />
                </View>
                <View style={styles.inputTxt} >
                    <TextInput placeholder="Seu E-mail" style={styles.input} onChangeText={(e) => setEmail(e)} />
                </View>

                <View style={styles.inputSenha}>
                    <TextInput secureTextEntry={hidePass} value={password} placeholder="Senha" style={styles.input} onChangeText={(e) => setPassword(e)} />
                    <TouchableOpacity style={styles.iconSenha} onPress={ () => setHidePass(!hidePass)}>
                    {hidePass ?
                        <Text>Show</Text>
                        :
                        <Text>Hide</Text>
                    }
                    </TouchableOpacity>
                </View>



                <View style={styles.msgCadastro}>


                    <TouchableOpacity onPress={handleSignIn} style={styles.btn}>
                        <Text style={styles.msgBtn}>Cadastre-se</Text>

                    </TouchableOpacity>
                </View>
            </View>

        </View>
    );
}

export default Signin;