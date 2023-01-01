const TradeVolume = () => {
  return (
    <div className="mt-11 flex space-x-8">
      <div className="w-1/2">
        <div>
          <span className="inline-block font-display text-4xl font-semibold text-accent">
            $After Presale
          </span>
        </div>
        <span className="text-lg text-jacarta-700 dark:text-white">
          All-time trade volume
        </span>
      </div>
      {/* End  w-1/2 */}

      <div className="w-1/2">
        <div>
          <span className="inline-block font-display text-4xl font-semibold text-accent">
          After Presale
          </span>
        </div>
        <span className="text-lg text-jacarta-700 dark:text-white">
          Total Trades
        </span>
      </div>
    </div>
  );
};

export default TradeVolume;
