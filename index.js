const Box = (props) => {
  const { text, className } = props;

  return <div className={className}>{text}</div>;
};

const element = (
  <div>
    <div className="main-container">
      <h1>Boxes</h1>
    </div>
    <div className="sub-container">
      <Box text="small" className="s" />
      <Box text="medium" className="m" />
      <Box text="large" className="l" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
