import { Tab } from "../../componentst/Tab";
import { Tabs } from "../../componentst/Tabs";
import { TabContent } from "../../componentst/TabContent";
import {
  UserItemInfoPage,
  UserTabAlbumsPage,
  UserTabTodosPage,
} from "@/ui/users";

export const TabsPage = () => {
  console.log("work");
  return (
    <Tabs>
      <Tab>Tab 1</Tab>
      <Tab>Tab 2</Tab>
      <Tab>Tab 3</Tab>
      <TabContent>
        <UserItemInfoPage />
      </TabContent>
      <TabContent>
        <UserTabAlbumsPage />
      </TabContent>
      <TabContent>
        <UserTabTodosPage />
      </TabContent>
    </Tabs>
  );
};
