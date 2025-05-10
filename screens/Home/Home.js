import React from 'react';
import { SafeAreaView } from 'react-native';
import globalSyle from '../../assets/styles/globalStyle';
import Search from '../../components/Search/Search';

const Home = () => {
    return (
        <SafeAreaView style={[globalSyle.backgroundWhite, globalSyle.flex]}>   
            <Search onSearch={(value) => console.log(value)}/>
        </SafeAreaView>
    );
};

export default Home;