import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import AppTextInput from "./AppTextInput";
import AppText from "./AppText";
import { personalInfo } from "../data";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppButton from "./AppButton";

function EditScreen({ onPress }) {
  const [newInfo, setNewInfo] = useState({
    fullName: "",
    slackUsername: "",
    githubHandle: "",
    bio: "",
    linkedIn: "",
    phoneNumber: "",
    whatsApp: "",
    twitter: "",
  });

  const handleUpdate = () => {
    const updatedPersonalInfo = {
      ...personalInfo,
      ...newInfo,
    };

    console.log(updatedPersonalInfo);
    console.log(personalInfo);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <MaterialCommunityIcons name="arrow-left" size={30} />
      </TouchableOpacity>
      <View style={styles.header}>
        <AppText>Edit Cv</AppText>
      </View>
      <View style={styles.inputFields}>
        <AppTextInput
          label="FullName"
          style={styles.input}
          placeholder="FullName"
          onChangeText={(text) => setNewInfo({ ...newInfo, fullName: text })}
          value={newInfo.fullName}
        />
        <AppTextInput
          label="Twitter Handle"
          style={styles.input}
          placeholder="Twitter Handle"
          value={newInfo.twitter}
          onChangeText={(text) => setNewInfo({ ...newInfo, twitter: text })}
        />
        <AppTextInput
          label="Slack Profile"
          style={styles.input}
          placeholder="Slack Profile"
          value={newInfo.slackUsername}
          onChangeText={(text) =>
            setNewInfo({ ...newInfo, slackUsername: text })
          }
        />
        <AppTextInput
          label="Phone Number"
          style={styles.input}
          placeholder="Phone Number"
          value={newInfo.phoneNumber}
          onChangeText={(text) => setNewInfo({ ...newInfo, phoneNumber: text })}
        />
        <AppTextInput
          label="WhatsApp Number"
          style={styles.input}
          placeholder="WhatsApp Number"
          value={newInfo.whatsApp}
          onChangeText={(text) => setNewInfo({ ...newInfo, whatsApp: text })}
        />
        <AppTextInput
          label="About Info"
          style={styles.input}
          placeholder="About Info"
          value={newInfo.bio}
          onChangeText={(text) => setNewInfo({ ...newInfo, bio: text })}
        />
        <AppTextInput
          label="linkedIn Profile"
          style={styles.input}
          placeholder="linkedIn Profile"
          value={newInfo.linkedIn}
          onChangeText={(text) => setNewInfo({ ...newInfo, linkedIn: text })}
        />
        <AppTextInput
          label="GitHub Profile"
          style={styles.input}
          placeholder="GitHub Profile"
          value={newInfo.githubHandle}
          onChangeText={(text) =>
            setNewInfo({ ...newInfo, githubHandle: text })
          }
        />
        <AppButton title="Update Fields" onPress={handleUpdate} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default EditScreen;
