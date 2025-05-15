import React, { useEffect } from 'react';
import { SafeAreaView, View, Text, ScrollView, Image, Pressable, FlatList } from 'react-native';
import globalSyle from '../../assets/styles/globalStyle';
import { useDispatch, useSelector } from 'react-redux';
import homeStyle from './style';
import Header from '../../components/Header/Header';
import Search from '../../components/Search/Search';
import TabButton from '../../components/Tab/TabButton';
import { updateSelectedCategoryId } from '../../redux/reducers/Categories';

const Home = () => {

    const user = useSelector(state => state.user);
    const categories = useSelector(state => state.categories);
    const dispatch = useDispatch();//using the dispatch function to update the user state


    //using useeffect hook to load the categories upon home initialization
    useEffect(() => {
        console.log(categories);
    }, [categories]);




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

                {/* tab header */}
                <View style={homeStyle.categoryHeader}>
                    <Header title={'Selected Category'} type={2}/>
                </View>
                {/* horizontal scrollview tabs */}
                <View style={homeStyle.categories}>
                    <FlatList
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        data={categories.categories}
                        renderItem={({item}) => (
                            <View style={homeStyle.categoryItems} key={item.categoryId}>
                                <TabButton
                                    tabId={item.categoryId}
                                    onPress={value => dispatch(updateSelectedCategoryId(value))}
                                    title={item.name}
                                    isInactive={item.categoryId !== categories.selectedCategoryId}
                                />
                            </View>
                        )}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Home;