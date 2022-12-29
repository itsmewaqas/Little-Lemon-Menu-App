import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  SectionList,
  StatusBar,
} from 'react-native';

const foodList = [
  {
    key: 0,
    title: 'Appetizers',
    data: [
      {
        key: 0,
        title: 'Spinach Artichoke Dip',
        price: '$10',
      },
      {
        key: 1,
        title: 'Hummus',
        price: '$5',
      },
      {
        key: 2,
        title: 'Fried Calamari Rings',
        price: '$15',
      },
      {
        key: 3,
        title: 'Fried Mushroom',
        price: '$20',
      },
    ],
  },
  {
    key: 1,
    title: 'Salads',
    data: [
      {
        key: 0,
        title: 'Greek',
        price: '$3',
      },
      {
        key: 1,
        title: 'Caesar',
        price: '$4',
      },
      {
        key: 2,
        title: 'Tuna Salad',
        price: '$5',
      },
      {
        key: 3,
        title: 'Grilled Chicken Salad',
        price: '$6',
      },
    ],
  },
  {
    key: 2,
    title: 'Beverages',
    data: [
      {
        key: 0,
        title: 'Water',
        price: '$7',
      },
      {
        key: 1,
        title: 'Coke',
        price: '$8',
      },
      {
        key: 2,
        title: 'Beer',
        price: '$9',
      },
      {
        key: 3,
        title: 'Iced Tea',
        price: '$10',
      },
    ],
  },
];

const App = () => {
  const [searchText, SetsearchText] = React.useState('');
  const [active, Setactive] = React.useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={styles.headingText}>Little Lemon Menu App</Text>
      </View>
      <View style={styles.searchBox}>
        <TextInput
          style={styles.searchBoxText}
          onChangeText={SetsearchText}
          value={searchText}
          placeholder="Search"
        />
      </View>
      <SafeAreaView style={styles.listContainer}>
        <View style={styles.tabView}>
          <TouchableOpacity
            onPress={() => {
              Setactive({ active: 0 });
            }}
            style={
              active === 0 ? styles.tabViewBtnActive : styles.tabViewBtn
            }>
            <Text style={styles.tabText}>Appetizers</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              Setactive({ active: 1 });
            }}
            style={
              active === 1 ? styles.tabViewBtnActive : styles.tabViewBtn
            }>
            <Text style={styles.tabText}>Salads</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              Setactive({ active: 2 });
            }}
            style={
              active === 2 ? styles.tabViewBtnActive : styles.tabViewBtn
            }>
            <Text style={styles.tabText}>Beverages</Text>
          </TouchableOpacity>
        </View>
        <SectionList
          sections={foodList.filter((title) =>
            title.title.toUpperCase().includes(searchText.toUpperCase())
          )}
          keyExtractor={(item) => item.key}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.sectionListHeader}>{title}</Text>
          )}
          renderItem={({ item }) => (
            <View style={styles.sectionListItem}>
              <Text style={styles.sliColor}>{item.title}</Text>
              <Text style={styles.sliColor}>{item.price}</Text>
            </View>
          )}
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4d5e58',
    paddingLeft: '15px',
    paddingRight: '15px',
  },
  heading: {
    flex: 1,
    padding: '15px',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  headingText: {
    color: '#fff',
    fontSize: '18px',
    paddingBottom: '5px',
  },
  listContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 15,
  },
  sectionListHeader: {
    color: '#c3b29c',
    fontSize: '18px',
    paddingBottom: '15px',
  },
  sectionListItem: {
    paddingLeft: '15px',
    paddingBottom: '15px',
    justifyContent: 'space-between',
    width: '250px',
    alignItems: 'center',
    flexDirection: 'row',
  },
  sliColor: {
    color: '#fff',
    fontSize: '14px',
  },
  searchBox: {
    marginBottom: '10px',
  },
  searchBoxText: {
    color: '#fff',
    borderColor: '#3f584f',
    borderWidth: '1px',
    padding: '5px',
    borderRadius: '10px',
  },
  tabView: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '280px',
    marginBottom: '10px',
    marginTop: '10px',
    borderWidth: '1px',
    borderColor: '#fff',
  },
  tabViewBtn: {
    borderRightColor: '#fff',
    borderRightWidth: '1px',
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
    tabViewBtnActive: {
    color: '#000',
    borderRightWidth: '1px',
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#e09c7c',
  },
  tabText: {
    color: '#fff',
    width: '100%',
    fontSize: '14px',
    textAlign: 'center',
    padding: '5px',
  },
});

export default App;
