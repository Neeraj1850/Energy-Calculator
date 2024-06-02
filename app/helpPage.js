import { Text, View} from "react-native";
import styles from "./styles/textBox.style";

const HelpPage = () => {
    return (
<View style={styles.frame}>
      <View style={styles.div}>
        <Text style={styles.textWrapper}>Help Guide: Getting the Most from Ecowatt</Text>
        <Text style={styles.p}>
          To ensure Ecowatt provides you with the most accurate energy consumption estimates, please follow these
          guidelines when using our app.
        </Text>
      </View>
      <View style={styles.div2}>
        <Text style={styles.textWrapper2}>Uploading Your Photos</Text>
        <Text style={styles.highClarityImages}>
          <Text style={styles.span}>High Clarity Images:</Text>
          <Text style={styles.textWrapper3}>
            {" "}
            Capture clear, high-resolution photos of your appliances to facilitate precise analysis. Ensure good
            lighting and focus to improve recognition accuracy.
            {"\n"}{"\n"}
          </Text>
          <Text style={styles.span}>Energy Stickers:</Text>
          <Text style={styles.textWrapper3}>
            {" "}
            While uploading the energy sticker on an appliance is optional, providing this can yield exact consumption
            data. If the sticker is not uploaded, the estimate will be based on the closest match available in our
            database.
          </Text>
        </Text>
      </View>
      <View style={styles.div}>
        <Text style={styles.textWrapper4}>Understanding Your Results</Text>
        <Text style={styles.div3}>
          <Text style={styles.span}>Precise vs. Estimated Data:</Text>
          <Text style={styles.textWrapper3}>
            {" "}
            If you upload energy stickers, you'll receive specific consumption data for your appliances. Without
            stickers, the app will provide an estimate based on similar models in our database.
            {"\n"}
          </Text>
          <Text style={styles.span}>
            {"\n"}
            Alternatives for Efficiency:
          </Text>
          <Text style={styles.textWrapper3}>
            {" "}
            Ecowatt not only assesses your appliances but also suggests alternative models. All recommended alternatives
            are EnerGuide rated, ensuring they are among the most efficient available in the market.
          </Text>
        </Text>
      </View>
      <View style={styles.div}>
        <Text style={styles.textWrapper5}>Benefits of Using Ecowatt</Text>
        <Text style={styles.div3}>
          <Text style={styles.span}>Detailed Insights:</Text>
          <Text style={styles.textWrapper3}>
            {" "}
            Learn about your energy usage and how you can improve efficiency.
            {"\n"}
          </Text>
          <Text style={styles.span}>
            {"\n"}
            Cost-Effective Solutions:{" "}
          </Text>
          <Text style={styles.textWrapper3}>
            Discover more energy-efficient appliances that can save you money.
            {"\n"}
          </Text>
          <Text style={styles.span}>
            {"\n"}
            Eco-Friendly Choices:
          </Text>
          <Text style={styles.textWrapper3}>
            {" "}
            Make informed decisions that benefit the environment by reducing your energy consumption.
          </Text>
        </Text>
      </View>
    </View>
    )
}

export default HelpPage