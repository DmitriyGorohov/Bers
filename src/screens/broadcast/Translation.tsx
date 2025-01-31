import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Colors from '../../styles/Colors.ts';
import Header from '../../components/Header.tsx';

const events = [
  {
    id: '1',
    league: 'MLB',
    dateTime: '13.06 00:50',
    teams: ['New York Yankees', 'Boston Red Sox'],
  },
  {
    id: '2',
    league: 'NFL',
    dateTime: '28.06 00:30',
    teams: ['Dallas Cowboys', 'New York Giants'],
  },
  {
    id: '3',
    league: 'NBA',
    dateTime: '05.07 00:15',
    teams: ['Los Angeles Lakers', 'Boston Celtics'],
  },
  {
    id: '4',
    league: 'NHL',
    dateTime: '10.07 00:05',
    teams: ['New York Rangers', 'Philadelphia Flyers'],
  },
];

const Translation = (): React.JSX.Element => {
  const renderEvent = ({ item }: { item: (typeof events)[0] }) => (
    <View style={styles.eventContainer}>
      <View style={styles.leagueBadge}>
        <Text style={styles.leagueText}>{item.league}</Text>
        <Text style={styles.dateTime}>{item.dateTime}</Text>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.teams}>{item.teams[0]}</Text>
        <Text style={styles.teams}>{item.teams[1]}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView edges={['top']} style={styles.container}>
      <Header />
      <View
        style={{
          paddingHorizontal: 16,
          backgroundColor: Colors.white,
          flex: 1,
        }}
      >
        <Text
          style={{
            color: Colors.black,
            alignSelf: 'center',
            marginTop: 20,
            fontSize: 22,
            fontWeight: '700',
          }}
        >
          Спортивные трансляции
        </Text>
        <FlatList
          data={events}
          renderItem={renderEvent}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContent}
        />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  listContent: {
    paddingBottom: 16,
  },
  eventContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 16,
    borderRadius: 12,
    padding: 12,
  },
  leagueBadge: {
    width: 100,
    height: 70,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  leagueText: {
    fontSize: 32,
    fontWeight: '900',
  },
  detailsContainer: {
    flex: 1,
  },
  dateTime: {
    color: Colors.black,
    fontSize: 14,
    fontWeight: '600',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 8,
    // alignSelf: 'flex-start',
    // marginBottom: 8,
  },
  teams: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors.black,
  },
});
export default Translation;
