import "./styles.css";

import { Component } from "react";

export class Button extends Component {
  render() {
    const { text, onClick, disabled } = this.props;
    return (
      <button disabled={disabled} className="button" onClick={onClick}>
        {text}
      </button>
    );
  }
}

// export const Button = ({ loadMorePosts }) => {
//   return <button onClick={loadMorePosts}>Load more posts</button>;
// };
