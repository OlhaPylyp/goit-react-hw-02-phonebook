const Filter = ({ value, onChange }) =>  (<label>
        Find contact by name
    <input type="text" value={value} onChange={onChange }/>
      {" "}

  </label>)

export default Filter;
