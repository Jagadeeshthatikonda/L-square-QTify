import * as React from "react";
import { PropTypes } from "prop-types";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import styles from "./GenreTabs.module.css";

const CustomTabPanel = props => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

CustomTabPanel.prototype = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

const GenreTabs = ({ genresData, selectedTab, handleSelectedTab }) => {
  const tabProps = index => {
    return {
      key: `tab-${index}`,
      id: `tab-${index}`,
      className: styles.genreTab,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  };

  const CustomTab = styled(props => <Tab disableRipple {...props} />)(
    ({ theme }) => ({
      textTransform: "none",

      "&.Mui-selected": {
        height: "4px",
        borderRadius: "2px",
      },
    })
  );

  return (
    <Box sx={{ width: "100%", marginTop: "16px" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={selectedTab}
          onChange={handleSelectedTab}
          aria-label="basic tabs"
          TabIndicatorProps={{
            style: { backgroundColor: "#34c94b" },
          }}
          textColor="#34c94b"
          className={styles.tabs}
        >
          {genresData.map((genre, index) => (
            <CustomTab label={genre.label} {...tabProps(index)} />
          ))}
        </Tabs>
      </Box>
    </Box>
  );
};

export default GenreTabs;
