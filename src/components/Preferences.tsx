import { View } from "react-native";
import { Title } from "@/components/Title";
import { Option } from "@/components/Option";
import { Switch } from "@/components/Switch";
import { useState } from "react";
import { Checkbox } from "@/components/Checkbox";

export function Preferences(){
  
  const [isEnabled, setIsEnabled] = useState(false);
  
  return(
    <View className="w-full">
      <Title>Preferences</Title>
    <Option>
      <Option.Icon icon="dark-mode" />
      <Option.Title>Dark Mode</Option.Title>
      <Switch onValueChange={setIsEnabled} value={isEnabled}/>
      </Option>
      <Option>
      <Option.Icon icon="email" />
      <Option.Title>Public Email</Option.Title>
      <Checkbox />
      </Option>
    </View>
  )
}