export default () => {
  return (
    <div className="d-flex w-50 m-auto search" role="search">
      <input
        className="form-control me-2 search__input"
        type="search"
        placeholder="Search for pdf eg javascript, python, etc ..."
        aria-label="Search"
      />
    </div>
  );
};
