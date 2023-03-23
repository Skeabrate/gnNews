const SourceBadge = ({ label }: { label: string }) => {
  return (
    <p className='my-2 w-fit bg-gradient-to-r from-brandDarker to-zinc-700 px-2 py-1 text-xs font-semibold text-white'>
      {label}
    </p>
  );
};

export default SourceBadge;
