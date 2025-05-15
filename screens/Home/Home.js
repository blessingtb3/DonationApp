import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, ScrollView, Image, Pressable, FlatList } from 'react-native';
import globalSyle from '../../assets/styles/globalStyle';
import { useDispatch, useSelector } from 'react-redux';
import homeStyle from './style';
import Header from '../../components/Header/Header';
import Search from '../../components/Search/Search';
import TabButton from '../../components/Tab/TabButton';
import { updateSelectedCategoryId } from '../../redux/reducers/Categories';

const Home = () => {

    const categories = useSelector(state => state.categories);
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();//using the dispatch function to update the user state

    const [categoryPage, setCategoryPage] = useState(1);//category page state for usage for pagination on tab button scrolling
    const [categoryList, setCategoryList] = useState([]);
    const [isLoadingCategories, setIsLodingCategories] = useState(false);
    const categoryPageSize = 4;


    useEffect(() => {
        setIsLodingCategories(true);
        setCategoryList(pagination(categories.categories, categoryPage, categoryPageSize));
        setCategoryPage(prev => prev + 1 );
        setIsLodingCategories(false);
        console.log(categories);//using useeffect hook to load the categories upon home initialization
    }, []);



    const pagination = (items, pageNumber, pageSize) => {
        const startIndex = (pageNumber - 1) * pageSize;
        const endIndex = startIndex + pageSize;

        if(startIndex >= items.length){
            return [];
        }
        return items.slice(startIndex, endIndex);
    }


    
  




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
                        onEndReachedThreshold={0.5}
                        onEndReached={() => {
                            if(isLoadingCategories) {
                                return;
                            }
                            console.log('User has reached the end and we are getting more data for page number ', categoryPage);
                            setIsLodingCategories(true);
                            let newData = pagination(categories.categories, categoryPage, categoryPageSize);
                            if(newData.length > 0 ){
                                setCategoryList(prevState => [...prevState, ...newData]);
                                setCategoryPage(prevState => prevState + 1);
                            }
                            setIsLodingCategories(false);
                        }}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        data={categoryList}
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