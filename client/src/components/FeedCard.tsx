import React from "react";
import { IFeed } from "../context/AppReducer";

interface IFeedCardProps {
  feed: IFeed;
}
const FeedCard = ({ feed }: IFeedCardProps) => {
  return <div>feedCard : {feed.briefref}</div>;
};

export default FeedCard;
