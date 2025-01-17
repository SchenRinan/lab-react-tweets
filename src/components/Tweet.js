import Actions from "./Actions";
import Message from "./Message";
import ProfileImage from "./ProfileImage";
import Timestamp from "./Timestamp";
import User from "./User";

function Tweet(props) {
  return (
    <div className="tweet">


      <ProfileImage image = { props.tweet.user.image }/>
      {/* <img
        src= { props.tweet.user.image }
        className="profile"
        alt="profile"
      /> */}

      <div className="body">
        <div className="top">

          <User 
            name = { props.tweet.user.name } 
            handle = { props.tweet.user.handle }
            />
          {/* <span className="user">
            <span className="name">{ props.tweet.user.name }</span>
            <span className="handle">@{ props.tweet.user.handle }</span>
          </span> */}

          <Timestamp timestamp = { props.tweet.timestamp }/>
          {/* <span className="timestamp">{ props.tweet.timestamp }</span> */}
        </div>

        <Message message = { props.tweet.message }/>
        {/* <p className="message">
          { props.tweet.message }
        </p> */}

        <Actions/>
        {/* <div className="actions"> */}
          {/* Font Awesome icons */}
          {/* <i className="far fa-comment"></i>
          <i className="fas fa-retweet"></i>
          <i className="far fa-heart"></i>
          <i className="fas fa-share"></i>
        </div> */}
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
