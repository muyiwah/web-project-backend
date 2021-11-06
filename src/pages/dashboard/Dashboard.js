import React, { useState } from "react";
import {
  Grid,
  LinearProgress,
  Select,
  OutlinedInput,
  MenuItem,
  Button
} from "@material-ui/core";
import { useTheme } from "@material-ui/styles";
import {
  ResponsiveContainer,
  ComposedChart,
  AreaChart,
  LineChart,
  Line,
  Area,
  PieChart,
  Pie,
  Cell,
  YAxis,
  XAxis,
} from "recharts";
import "./Main.css";
// styles
import useStyles from "./styles";

// components
import mock from "./mock";
import Widget from "../../components/Widget";
import PageTitle from "../../components/PageTitle";
import { Typography } from "../../components/Wrappers";
import Dot from "../../components/Sidebar/components/Dot";
import Table from "./components/Table/Table";
import BigStat from "./components/BigStat/BigStat";



export default function Dashboard(props) {
  var classes = useStyles();
  var theme = useTheme();

  // local
  var [mainChartState, setMainChartState] = useState("monthly");

  return (
    <main>
    <div className="main__container">
      {/* <!-- MAIN TITLE STARTS HERE --> */}

      <div className="main__title">
        {/* <img src={hello} alt="hello" /> */}
        <div className="main__greeting">
          <h1>Hello Admin</h1>
          <p>Welcome to your admin dashboard</p>
        </div>
      </div>

      {/* <!-- MAIN TITLE ENDS HERE --> */}

      {/* <!-- MAIN CARDS STARTS HERE --> */}
      <div className="main__cards">
        <div className="card">
          <i
            className="fa fa-user-o fa-2x text-lightblue"
            aria-hidden="true"
          ></i>
          <div className="card_inner">
            <p className="text-primary-p">Number of Subscribers</p>
            <span className="font-bold text-title">0</span>
          </div>
        </div>

        <div className="card">
          <i className="fa fa-calendar fa-2x text-red" aria-hidden="true"></i>
          <div className="card_inner">
            <p className="text-primary-p">Times of Watching</p>
            <span className="font-bold text-title">0</span>
          </div>
        </div>

        <div className="card">
          <i
            className="fa fa-video-camera fa-2x text-yellow"
            aria-hidden="true"
          ></i>
          <div className="card_inner">
            <p className="text-primary-p">Number of Videos</p>
            <span className="font-bold text-title">0</span>
          </div>
        </div>

        <div className="card">
          <i
            className="fa fa-thumbs-up fa-2x text-green"
            aria-hidden="true"
          ></i>
          <div className="card_inner">
            <p className="text-primary-p">Number of Likes</p>
            <span className="font-bold text-title">0</span>
          </div>
        </div>
      </div>
      {/* <!-- MAIN CARDS ENDS HERE --> */}

      {/* <!-- CHARTS STARTS HERE --> */}
      <div className="charts">
        <div className="charts__left">
          <div className="charts__left__title">
            <div>
              <h1>Daily Reports</h1>
              {/* <p>Cupertino, California, USA</p> */}
            </div>
            <i className="fa fa-usd" aria-hidden="true"></i>
          </div>
          <LineChart />
        </div>

        <div className="charts__right">
          <div className="charts__right__title">
            <div>
              <h1>Stats Reports</h1>
              {/* <p>Cupertino, California, USA</p> */}
            </div>
            <i className="fa fa-usd" aria-hidden="true"></i>
          </div>

          <div className="charts__right__cards">
            <div className="card1">
              <h1>Income</h1>
              <p>0</p>
            </div>

            <div className="card2">
              <h1>Sales</h1>
              <p>0</p>
            </div>

            <div className="card3">
              <h1>Users</h1>
              <p>0</p>
            </div>

            <div className="card4">
              <h1>Orders</h1>
              <p>0</p>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- CHARTS ENDS HERE --> */}
    </div>
  </main>
  );
}

