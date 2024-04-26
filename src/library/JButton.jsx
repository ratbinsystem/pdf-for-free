export default ({ btnClick, text, ...rest }) => {
  return (
    <button className={`btn ${rest.className}`} onClick={btnClick}>
      {rest.children} {text}
    </button>
  );
};
