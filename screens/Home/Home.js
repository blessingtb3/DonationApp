import React from 'react';
import { SafeAreaView } from 'react-native';
import globalSyle from '../../assets/styles/globalStyle';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';


const Home = () => {
    return (
        <SafeAreaView style={[globalSyle.backgroundWhite, globalSyle.flex]}>   
            <Header title={'Daniisto'} type={1}/>
            <Button title={'Donate'} onPress={() => {
                console.log('donate pressed');
            }}/>
        </SafeAreaView>
    )
}

export default Home;