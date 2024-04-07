interface IFeed {
  briefref: string;
  brand: {
    name: string;
    logo: string;
  };
  name: string;
  description: string;
  feed_title: string;
  banner_text: string;
  banner_image: string;
  ad_1_image: string;
  ad_2_image: string;
  starts_on: string;
}

interface IComment {
  bcommentref: string;
  briefref: string;
  user: {
    userref: string;
    name: string;
    avatar: string;
  };
  comment: string;
  submitted_on: string;
}

export interface IAppState {
  feeds: IFeed[];
  comments: IComment[];
}

export const appInitialState: IAppState = {
  feeds: new Array(),
  comments: new Array()
};
enum IActions {
  FEEDS = "FEEDS",
  COMMENTS = "COMMENTS"
}

export interface IActionType {
  type: string;
  payload: IAppState;
}
export const AppReducer = (state = appInitialState, action: IActionType) => {
  switch (action.type) {
    case IActions.FEEDS:
      return { ...state, feeds: action.payload.feeds };

    case IActions.COMMENTS:
      return { ...state, comments: action.payload.comments };

    default:
      return state;
  }
};
