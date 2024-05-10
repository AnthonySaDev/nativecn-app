import { Text, View } from "react-native"
import { Avatar, AvatarFallback, AvatarImage } from "./Avatar"

export default function User(){
  return(
    <View className="items-center">
      <Avatar className="w-32 h-32 border-4 border-gray-600">
        <AvatarImage source={{uri: "https://github.com/AnthonySaDev.png"}} />
        <AvatarFallback>AS</AvatarFallback>
      </Avatar>
      <Text className="text-white mt-4 text-lg">Anthony Sá</Text>
      <Text className="text-gray-400 text-lg">@anthonysa.dev</Text>
    </View>
  )
}