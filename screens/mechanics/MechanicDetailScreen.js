import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import Header from "../../components/Header/Header";
import { getRequestWithCredentials } from "../../Services/RequestService";
import { Comment } from "../../components/Comment";
import Icon from "react-native-vector-icons/FontAwesome";
import Rating from "../../components/Rating";
import Location from "../../components/Location";
import {MECHANICS_API_URL,BASE_COLOR} from '@env';
import { useNavigation } from "@react-navigation/native";

const MechanicDetailScreen = ({ route,navigation }) => {
  const [mechanic, setMechanic] = useState(null);
  const [comments, setComments] = useState([]);
  const { id } = route.params;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = new URL(`${MECHANICS_API_URL}/${id}`);
        const response = await getRequestWithCredentials(url);
        setMechanic(response.data);

        const sampleComments = [
          {
            author: "Alice",
            context:
              "Harika bir hizmet, kesinlikle tavsiye ederim! Harika bir hizmet, kesinlikle tavsiye ederim! Harika bir hizmet, kesinlikle tavsiye ederim! Harika bir hizmet, kesinlikle tavsiye ederim!Harika bir hizmet, kesinlikle tavsiye ederim!Harika bir hizmet, kesinlikle tavsiye ederim!Harika bir hizmet, kesinlikle tavsiye ederim!Harika bir hizmet, kesinlikle tavsiye ederim!Harika bir hizmet, kesinlikle tavsiye ederim!",
            rating: 5,
          },
          {
            author: "Bob",
            context: "Hızlı ve profesyonel bir iş çıkardılar, teşekkürler!",
            rating: 2,
          },
          {
            author: "Charlie",
            context: "Fiyat performans açısından çok başarılılar.",
            rating: 3,
          },
          {
            author: "David",
            context: "Mükemmel bir deneyim yaşadım, herkese tavsiye ederim.",
            rating: 5,
          },
          {
            author: "Emma",
            context: "Tam vaktinde işlerini bitirdiler, çok memnun kaldım.",
            rating: 1,
          },
          {
            author: "Frank",
            context: "Personel çok ilgili ve güler yüzlüydü.",
            rating: 4,
          },
          {
            author: "Grace",
            context: "Kesinlikle tekrar tercih edeceğim bir yer.",
            rating: 5,
          },
          {
            author: "Henry",
            context: "Her şey için teşekkürler, çok memnun kaldım.",
            rating: 5,
          },
          {
            author: "Ivy",
            context: "Çok temiz ve düzenli bir çalışma ortamı vardı.",
            rating: 4,
          },
          {
            author: "Jack",
            context: "Randevum için bekletmediler, zamanlama çok iyiydi.",
            rating: 5,
          },
        ];

        setComments(sampleComments);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  const handleAddComment = () => {
    
  };

  const handleRequestAppointment = (mechanic) => {
    navigation.navigate("RequestAppointmentScreen",{mechanic})
  }

  return (
    <View style={styles.container}>
      <Header />
      {mechanic && (
        <View>
          <Image source={{ uri: mechanic.picture }} style={styles.image} />
          <TouchableOpacity
            style={styles.favoriteButton}
            onPress={() => console.log("Favorilere Eklendi")}
          >
            <Icon name="heart" size={20} color="#fff" />
          </TouchableOpacity>
          <View style={styles.detailsContainer}>
            <View style={styles.titleContainer}>
              <Text style={styles.name}>{mechanic.name}</Text>
              <Rating size={20} rating={mechanic.rating}></Rating>
            </View>

            <Text style={styles.description}>{mechanic.description}</Text>
            <Location location={mechanic.location}/>

            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={[styles.button, { backgroundColor: "#" + BASE_COLOR, width: '50%' }]}
                onPress={()=>handleRequestAppointment(mechanic)}
              >
                <Icon name="calendar" size={20} color="#fff" />
                <Text style={[styles.buttonText, { color: "#fff" }]}>Randevu Al</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, { backgroundColor: "#2E932E", width: '48%' }]}
                onPress={() => console.log("Arandı")}
              >
                <Icon name="phone" size={20} color="#fff" />
                <Text style={[styles.buttonText, { color: "#fff" }]}>Ara</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
      <View style={styles.commentSection}>
        <View style={styles.commentHeader}>
          <Text style={styles.sectionTitle}>Yorumlar</Text>
          <TouchableOpacity
            style={styles.addCommentButton}
            onPress={handleAddComment}
          >
            <Icon
              name="plus"
              size={16}
              color="#007bff"
              style={styles.addCommentButtonText}
            ></Icon>
          </TouchableOpacity>
        </View>
        {comments.map((comment, index) => (
          <Comment
            key={index}
            comment={comment.context}
            author={comment.author}
            rating={comment.rating}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
  detailsContainer: {
    padding: 20,
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
  },
  titleContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "space-between",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
  },
  location: {
    fontSize: 16,
    marginBottom: 10,
  },
  ratingContainer: {},
  buttonContainer: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  buttonText: {
    fontWeight: "bold",
    marginLeft: 5,
  },
  commentSection: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  commentHeader: {
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  addCommentButton: {
    borderColor: "#007bff",
    borderWidth: 1,
    padding: 10,
    borderRadius: 100,
  },
  addCommentButtonText: {
    width:25,
    height:25,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    color: "#007bff",
    fontWeight: "bold",
  },
  favoriteButton: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "#FD1F22",
    padding: 10,
    borderRadius: 50,
    zIndex: 1,
  },
});

export default MechanicDetailScreen;
