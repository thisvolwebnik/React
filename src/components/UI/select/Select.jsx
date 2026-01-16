export const Select = (props) => {
  const { options, defaultValue, value, onChange } = props;

  return (
    <select value={value} onChange={(event) => onChange(event.target.value)}>
      <option value="" disabled>
        {defaultValue}
      </option>
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
};
