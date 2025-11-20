export default function Snowfall() {
  const snowflakes = Array.from({ length: 20 }, (_, i) => i);

  return (
    <div className="snowfall-container">
      {snowflakes.map((i) => (
        <div key={i} className="snowflake">
          ❅
        </div>
      ))}
    </div>
  );
}
