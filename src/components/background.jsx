function Background({ background }) {
  return (
    <img
      className="background"
      src={background ? background : "/src/assets/background/default.jpg"}
    />
  );
}

export default Background;
