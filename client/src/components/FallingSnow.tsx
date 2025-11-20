const FallingSnow = () => {
  return (
    <>
      {Array.from({ length: 20 }).map((_, i) => (
        <div key={i} className="snowflake" />
      ))}
    </>
  );
};

export default FallingSnow;
