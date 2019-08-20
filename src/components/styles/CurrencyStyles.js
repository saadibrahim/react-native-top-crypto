import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  wrapper: {
    margin: 10,
    marginBottom: 0,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  position: {
    position: 'absolute',
    top: 10,
    right: 10,
    color: '#888',
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
  nameWrapper: { flexDirection: 'row', alignItems: 'center' },
  icon: { width: 24, height: 24, marginRight: 7 },
  symbol: { fontSize: 24, fontWeight: '600', marginRight: 7 },
  name: { fontSize: 14, color: '#888' },
  price: { marginVertical: 3 },
  positiveChange: { color: '#008000' },
  negativeChange: { color: '#FF0000' },
});
