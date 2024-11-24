import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Switch, Image } from 'react-native';

const Profile = () => {
  const [isEmailSubscribed, setIsEmailSubscribed] = useState(true);
  const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [language, setLanguage] = useState('en'); 

  const toggleEmailSubscription = () => setIsEmailSubscribed(previousState => !previousState);
  const toggleNotifications = () => setIsNotificationsEnabled(previousState => !previousState);
  const toggleDarkMode = () => setIsDarkMode(previousState => !previousState);
  const toggleLanguage = () => setLanguage(previousLang => (previousLang === 'en' ? 'es' : 'en'));

  return (
    <View style={[styles.container, isDarkMode && styles.darkContainer]}>
      {/* Profile Header Section */}
      <Text style={[styles.title, isDarkMode && styles.darkTitle]}>Profile</Text>

      {/* Avatar */}
      <View style={styles.avatarContainer}>
        <Image
          style={styles.avatar}
          source={require('../../../assets/prof.png')}
        />
        <Text style={[styles.name, isDarkMode && styles.darkText]}>Joeira Dionela</Text>
        <Text style={[styles.address, isDarkMode && styles.darkText]}>Zone 5, Bugo, CDOC</Text>
      </View>

      {/* Account Information */}
      <View style={styles.infoContainer}>
        <Text style={[styles.infoText, isDarkMode && styles.darkText]}>Account Email: joeiradionela@gmail.com</Text>
      </View>

      
      <View style={styles.preferencesContainer}>
        <Text style={[styles.sectionTitle, isDarkMode && styles.darkText]}>Privacy & Preferences</Text>

     
        <View style={styles.preferenceRow}>
          <Text style={[styles.preferenceText, isDarkMode && styles.darkText]}>Subscribe to Email</Text>
          <Switch
            value={isEmailSubscribed}
            onValueChange={toggleEmailSubscription}
          />
        </View>

        <View style={styles.preferenceRow}>
          <Text style={[styles.preferenceText, isDarkMode && styles.darkText]}>Enable Notifications</Text>
          <Switch
            value={isNotificationsEnabled}
            onValueChange={toggleNotifications}
          />
        </View>

       
        <View style={styles.preferenceRow}>
          <Text style={[styles.preferenceText, isDarkMode && styles.darkText]}>Language: {language === 'en' ? 'English' : 'Español'}</Text>
          <TouchableOpacity onPress={toggleLanguage}>
            <Text style={[styles.toggleButton, isDarkMode && styles.darkText]}> change </Text>
          </TouchableOpacity>
        </View>

    
        <View style={styles.preferenceRow}>
          <Text style={[styles.preferenceText, isDarkMode && styles.darkText]}>Dark Mode</Text>
          <Switch
            value={isDarkMode}
            onValueChange={toggleDarkMode}
          />
        </View>
      </View>

     
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 20,
  },
  darkContainer: {
    backgroundColor: '#333',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black',
  },
  darkTitle: {
    color: 'white',
  },
  avatarContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'indigo',
  },
  darkText: {
    color: 'white',
  },
  address: {
    fontSize: 16,
    color: 'gray',
  },
  infoContainer: {
    marginBottom: 20,
  },
  infoText: {
    fontSize: 16,
    color: 'black',
  },
  preferencesContainer: {
    width: '100%',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'indigo',
  },
  preferenceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  preferenceText: {
    fontSize: 16,
    color: 'black',
  },
  toggleButton: {
    color: '#6200EE',
    fontSize: 16,
  },
 
 
});
