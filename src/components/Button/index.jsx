import "./styles.css";

export const Button = ({ text, onClick, disabled }) => {
  return (
    <button disabled={disabled} className="button" onClick={onClick}>
      {text}
    </button>
  );
};

// export const Button = ({ loadMorePosts }) => {
//   return <button onClick={loadMorePosts}>Load more posts</button>;
// };
