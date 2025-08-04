const Shimmer = () => {
  return (
    <div className="shimmer-container">
      {Array(5)
        .fill("")
        .map((e, index) => (
          <div key={index} className="shimmer-card">
            <div className="shimmer-image"></div>
            <div className="shimmer-text"></div>
            <div className="shimmer-text"></div>
          </div>
        ))}
    </div>
  );
}
export default Shimmer;