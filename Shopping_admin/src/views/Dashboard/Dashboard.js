import React, { useEffect, useState } from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
import { Bar, Pie, Line } from 'react-chartjs-2';
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import axios from 'axios';
import Tasks from "components/Tasks/Tasks.js";
import TextField from '@material-ui/core/TextField';
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import Danger from "components/Typography/Danger.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import config from '../../lib/config';
import CardFooter from "components/Card/CardFooter.js";
import { bugs, website, server } from "variables/general.js";
import { getproductCount } from '../../actions/users';



import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "variables/charts.js";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);
var dateFormat = require('dateformat');
const moment = require('moment')



export default function Dashboard() {
  const classes = useStyles();
  const [productCount, setproductDetailsCount] = useState();

 
  const CategoryList = async () => {
    var { status, productDetailsCount } = await getproductCount();
    console.log("productDetailsCount",productDetailsCount.length)
    // debugger
    setproductDetailsCount(productDetailsCount);
}

useEffect(() => {
 CategoryList();
}, [])

  

  return (
    <div>

      <GridContainer>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="success" stats icon>
              <CardIcon color="success">
                <Store />
              </CardIcon>
              <p className={classes.cardCategory}>Total Products</p>
              <h3 className={classes.cardTitle}>{productCount && productCount.length}</h3>
            </CardHeader>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
