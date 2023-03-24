const Flag = ({ code }: { code: string }) => {
  return (
    <img
      src={`https://flagsapi.com/${code.toUpperCase()}/flat/32.png`}
      alt={code}
      height='32'
      width='32'
    />
  );
};

export default Flag;
