import React from 'react';
import {View, Text, Image, Linking} from 'react-native';
import Card from './Card';
import CardItem from './CardItem';
import Button from './Button';

const AlbumDetail = (props) => {
  return(
    <Card>
      <CardItem>
        <View style={styles.thumbnailContainerStyle}>
          <Image
            style={styles.thumbnailStyle}
            source={{uri:props.album.thumbnail_image}}
          />
        </View>
        <View style={styles.headerContentStyle}>
          <Text style={styles.headerTextStyle}>{props.album.title}</Text>
          <Text>{props.album.artist}</Text>
        </View>
      </CardItem>

      <CardItem>
        <Image
          source={{uri:props.album.image}}
          style={styles.imageStyle}
        />
      </CardItem>

      <CardItem>
        <Button onPress={() => Linking.openURL(props.album.url)}>
          Buy Now
        </Button>
      </CardItem>
    </Card>
  );
}

const styles={
  headerContentStyle:{
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle:{
    fontSize:18
  },
  thumbnailStyle:{
    height:50,
    width:50
  },
  thumbnailContainerStyle:{
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft:10,
    marginRight: 10
  },
  imageStyle: {
    height:300,
    flex:1,
    width: null
  }
}

export default AlbumDetail;
