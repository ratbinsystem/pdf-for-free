import TapItem from "../tapItem";

export default ({ tapes }) => {
  const tapItems = tapes.map((tap) => {
    return <TapItem key={tap.id} tap={tap} />;
  });
  return (
    <div className="tap-component">
      <marquee>{tapItems} </marquee>
    </div>
  );
};
