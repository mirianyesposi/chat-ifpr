import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ChatBubble = ({ sender, children }) => {
  return (
    <View
      style={[
        styles.bubble,
        {
          alignSelf: sender === 'user' ? 'flex-end' : 'flex-start',
          backgroundColor: sender === 'user' ? '#98c8ed' : '#E5E5EA',
        },
      ]}
    >
      <Text style={styles.message}>{children}</Text>
    </View>
  );
};

const ChatScreen = () => {
  return (
    <View style={styles.container}>
      <ChatBubble sender="user">Olá, como vai?</ChatBubble>
      <ChatBubble sender="other">Tudo bem, e você?</ChatBubble>
      <ChatBubble sender="user">Estou bem, obrigado!</ChatBubble>
      <ChatBubble sender="other">Que bom!</ChatBubble>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  bubble: {
    maxWidth: '70%',
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
  },
  message: {
    fontSize: 16,
  },
});

export default ChatScreen;
