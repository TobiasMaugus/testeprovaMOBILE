import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
    alignItems: "center",
    backgroundColor: "#fff"
  },
  rowSearch: {
    flexDirection: "row",
    backgroundColor: '#ffcbdb',
    borderRadius: 10,
    margin: 10,
    marginTop: 30,
    alignItems: "center",
    width: "75%",
    height: 45
  },
  icon: {
    fontSize: 24,
    padding: 5,
    color: colors.black
  },
  input: {
    width: "40%",
    color: '#dcdcdc'
  },
  list: {
    marginBottom: 10
  }
});

export default styles