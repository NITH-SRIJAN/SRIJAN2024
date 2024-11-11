import '../../Assets/css/dropdown.css'


const Dropdown = (props) => {

    const dropdownChangeHandler = (event) => {
      props.onFilterChange(event.target.value);
    };
  
    return (
      <>
        <div className="dropdown">
          <select className="dropSelect" onChange={dropdownChangeHandler} >
            <option value="0">Heads</option>
            <option value="1">Executive Members</option>
            <option value="2">Associate Members</option>
            <option value="3">Managing Members</option>
          </select>
        </div>
      </>
    );
  };
  
  export default Dropdown;  