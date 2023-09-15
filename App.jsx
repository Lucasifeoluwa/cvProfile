import { StatusBar } from "expo-status-bar";
import { Image, Modal, StyleSheet, TouchableOpacity, View } from "react-native";
import Screen from "./components/Screen";
import AppText from "./components/AppText";
import AppTextInput from "./components/AppTextInput";
import AppButton from "./components/AppButton";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import Colors from "./config/Colors";
import ListItem from "./components/ListItem";
import { personalInfo } from "./data";
import { useState } from "react";

export default function App() {
  const [visible, setVisible] = useState(false);
  const [profileContent, setProfileContent] = useState(personalInfo);
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
    const updatedPersonalInfo = { ...personalInfo };

    Object.keys(newInfo).forEach((key) => {
      if (newInfo[key]) {
        updatedPersonalInfo[key] = newInfo[key];
      }
    });

    console.log(updatedPersonalInfo);

    setProfileContent(updatedPersonalInfo);
    setVisible(false);
    console.log(updatedPersonalInfo);
  };

  return (
    // React native navigation is a third party package that doesn't come pre-installed,
    // so a Modal was implemented to achieve the multi-screen requirement

    <>
      <Screen>
        <View style={styles.container}>
          <View style={styles.header}>
            <Image
              source={require("./images/profile.jpg")}
              style={styles.profileImg}
            />
            <TouchableOpacity onPress={() => setVisible(true)}>
              <MaterialCommunityIcons name="account-edit-outline" size={30} />
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: 30, rowGap: 5 }}>
            <AppText style={{ fontSize: 24 }}>
              Hi,
              <AppText
                style={{
                  fontSize: 24,
                  color: Colors.primary,
                  fontWeight: "bold",
                }}
              >
                There
              </AppText>
            </AppText>
            <AppText style={{ fontSize: 18, fontWeight: "bold" }}>
              I'm {profileContent.fullName}
            </AppText>
          </View>
          <View>
            <View style={styles.about}>
              <AppText
                style={{
                  fontSize: 18,
                  fontWeight: "bold",
                  marginLeft: 10,
                  color: Colors.primary,
                }}
              >
                About Me
              </AppText>
              <AntDesign name="profile" size={15} color={Colors.primary} />
            </View>
            <View style={styles.aboutContent}>
              <AppText
                style={{
                  fontSize: 15,
                  fontWeight: "300",
                  color: Colors.medium,
                  lineHeight: 24,
                }}
              >
                {profileContent.bio}
              </AppText>
            </View>
          </View>
          <View style={styles.about}>
            <AppText
              style={{
                color: Colors.primary,
                fontWeight: "bold",
                fontSize: 18,
                marginLeft: 20,
              }}
            >
              Work with me
            </AppText>
            <MaterialCommunityIcons
              name="laptop"
              size={20}
              color={Colors.primary}
            />
          </View>

          <View style={styles.linkContainer}>
            <View style={styles.skillSection}>
              <ListItem
                name="slack"
                title="Slack"
                tag={profileContent.slackUsername}
              />
              <ListItem
                name="github"
                title="GitHub"
                tag={profileContent.githubHandle}
              />
            </View>
            <View style={styles.skillSection}>
              <ListItem
                name="twitter"
                title="Twitter"
                tag={profileContent.twitter}
              />
              <ListItem
                name="phone"
                title="Phone No"
                tag={profileContent.phoneNumber}
              />
            </View>

            <View style={styles.skillSection}>
              <ListItem
                name="linkedin"
                title="LinkedIn"
                tag={profileContent.linkedIn}
              />
              <ListItem
                name="whatsapp"
                title="WhatsApp"
                tag={profileContent.whatsApp}
              />
            </View>
          </View>
        </View>
      </Screen>

      <Modal visible={visible}>
        <Screen>
          <View style={styles.container}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 20,
              }}
            >
              <TouchableOpacity
                onPress={() => setVisible(false)}
                style={{ justifyContent: "flex-start", flex: 0.5 }}
              >
                <MaterialCommunityIcons name="arrow-left" size={30} />
              </TouchableOpacity>
              <AppText
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                }}
              >
                Edit Cv
              </AppText>
            </View>
            <View style={styles.inputFields}>
              <AppTextInput
                label="FullName"
                style={styles.input}
                placeholder="FullName"
                onChangeText={(text) =>
                  setNewInfo({ ...newInfo, fullName: text })
                }
              />
              <AppTextInput
                label="Twitter Handle"
                style={styles.input}
                placeholder="Twitter Handle"
                value={newInfo.twitter}
                onChangeText={(text) =>
                  setNewInfo({ ...newInfo, twitter: text })
                }
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
                onChangeText={(text) =>
                  setNewInfo({ ...newInfo, phoneNumber: text })
                }
              />
              <AppTextInput
                label="WhatsApp Number"
                style={styles.input}
                placeholder="WhatsApp Number"
                value={newInfo.whatsApp}
                onChangeText={(text) =>
                  setNewInfo({ ...newInfo, whatsApp: text })
                }
              />
              <AppTextInput
                label="About Info"
                style={styles.input}
                placeholder="About Info"
                value={newInfo.bio}
                onChangeText={(text) => setNewInfo({ ...newInfo, bio: text })}
                numOfLines={3}
                multiLines={true}
              />
              <AppTextInput
                label="LinkedIn Profile"
                style={styles.input}
                placeholder="linkedIn Profile"
                value={newInfo.linkedIn}
                onChangeText={(text) =>
                  setNewInfo({ ...newInfo, linkedIn: text })
                }
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
        </Screen>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  activeTag: {
    borderBottomWidth: 3,
    borderColor: Colors.primary,
  },
  about: {
    flexDirection: "row",
    marginTop: 40,
    alignItems: "center",
    columnGap: 5,
    width: "100%",
  },
  aboutContent: {
    marginTop: 10,
    padding: 10,
    width: "100%",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    /*  alignItems: "center",
    justifyContent: "center", */
    padding: 20,
    backgroundColor: "#f1f5f9",
  },
  header: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  tag: {
    flexDirection: "row",
    marginTop: 20,
    columnGap: 20,
    paddingLeft: 10,
  },
  tagTxt: {
    fontSize: 18,
    color: "#999999",
    fontWeight: "600",
  },
  profileImg: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  /*   linkContainer: {
    padding: 10,
  }, */
  skillSection: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    columnGap: 20,
  },
});
