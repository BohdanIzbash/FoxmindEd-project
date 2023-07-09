import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { UserTabPostsPage, UserTabTodosPage } from "../..";
import { UserItemInfo } from "../UserItemInfo";
import { UserTabAlbumsPage } from "../../pages/UserTabAlbumsPage";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export function UserTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "700px" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example">
          <Tab label="Albums" {...a11yProps(0)} />
          <Tab label="Todos" {...a11yProps(1)} />
          <Tab label="Posts" {...a11yProps(2)} />
          <Tab label="Info" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <UserTabAlbumsPage />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <UserTabTodosPage />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <UserTabPostsPage />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <UserItemInfo />
      </TabPanel>
    </Box>
  );
}
