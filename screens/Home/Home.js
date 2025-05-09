import React from 'react';
import { SafeAreaView } from 'react-native';
import globalSyle from '../../assets/styles/globalStyle';
import Header from '../../components/Header/Header';
import TabButton from '../../components/Tab/TabButton';
import BadgeButton from '../../components/Badge/BadgeButton';


const Home = () => {
    return (
        <SafeAreaView style={[globalSyle.backgroundWhite, globalSyle.flex]}>   
            <Header title={'Daniisto'} type={1}/>
            <TabButton title={'Highlight'}/>
            <TabButton title={'Highlight'} isInactive={true}/>
            <BadgeButton title={'Environment'}/>
        </SafeAreaView>
    )
}

export default Home;