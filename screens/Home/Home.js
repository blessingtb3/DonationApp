import React from 'react';
import { SafeAreaView, View, Text, ScrollView, Image, Pressable } from 'react-native';
import globalSyle from '../../assets/styles/globalStyle';
import { useDispatch, useSelector } from 'react-redux';
import homeStyle from './style';
import Header from '../../components/Header/Header';
import Search from '../../components/Search/Search';

const Home = () => {

    const user = useSelector(state => state.user);
    const dispatch = useDispatch();//using the dispatch function to update the user state

    return (
        <SafeAreaView style={[globalSyle.backgroundWhite, globalSyle.flex]}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={homeStyle.header}>
                    <View>
                        <Text style={homeStyle.headerIntroText}>Hello,</Text>
                        <View style={homeStyle.name}>
                            <Header title={user.firstName + ' ' + user.lastName[0] + '.👋'}/>
                        </View>
                    </View>
                    <Image 
                        source={{uri: user.profileImage}} 
                        style={homeStyle.profileImage} 
                        resizeMode={'contain'}
                    />
                </View>
                <View style={homeStyle.searchBox}>
                    <Search/>
                </View>
                <View style={homeStyle.highlightedImageContainer}>
                    <Pressable>
                        <Image 
                            style={homeStyle.highlightedImage}
                            source={require('../../assets/images/highlighted_image.png')}
                            resizeMode={'contain'}
                        />
                    </Pressable>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Home;