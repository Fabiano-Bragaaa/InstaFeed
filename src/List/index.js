import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

export default function List(props) {
  function carregaIcone(likeada) {
    return likeada ? require('../img/likeada.png') : require('../img/like.png');
  }

  function mostrarLikes(likers) {
    if (likers === 0) {
      return;
    }

    return (
      <Text style={styles.likes}>
        {likers} {likers > 1 ? 'curtidas' : 'curtida'}
      </Text>
    );
  }

  return (
    <View>
      <View style={styles.viewUser}>
        <Image style={styles.imgUser} source={{uri: props.data.imgperfil}} />
        <Text style={styles.nameUser}>{props.data.nome}</Text>
      </View>
      <Image
        resizeMode="cover"
        style={styles.imgPublication}
        source={{uri: props.data.imgPublicacao}}
      />
      <View style={styles.bntArea}>
        <TouchableOpacity>
          <Image
            source={carregaIcone(props.data.likeada)}
            style={styles.like}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.commentBtn}>
          <Image source={require('../img/comment.png')} style={styles.like} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.commentBtn}>
          <Image source={require('../img/send.png')} style={styles.like} />
        </TouchableOpacity>
      </View>

      {mostrarLikes(props.data.likers)}

      <Text style={styles.nome}>{props.data.nome}</Text>
      <Text style={styles.description}>{props.data.descricao}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  viewUser: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    padding: 8,
  },
  imgUser: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  nameUser: {
    fontSize: 20,
    color: '#000',
    paddingLeft: 8,
  },
  imgPublication: {
    height: 400,
    alignItems: 'center',
  },
  bntArea: {
    flexDirection: 'row',
    padding: 8,
  },
  like: {
    width: 25,
    height: 25,
  },
  commentBtn: {
    paddingLeft: 5,
  },
  likes: {
    fontWeight: 'bold',
    marginLeft: 5,
  },
  nome: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 5,
  },
  description: {
    fontSize: 15,
    paddingBottom: 10,
    paddingLeft: 5,
  },
});
