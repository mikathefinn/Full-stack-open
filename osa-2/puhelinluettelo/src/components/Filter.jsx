const Filter = ({ filter, handleFiltering }) => {
  return (
    <form>
      <div>
        filter with: <input value={filter} onChange={handleFiltering} />
      </div>
    </form>
  );
};
export default Filter;
