import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({data}) => {
    const elements = data.map(item => {
        return (
            // <EmployeesListItem name={item.name} salary={item.salary}/>
            <EmployeesListItem {...item}/>
        )
    });

    return (
        <ul className="app-list list-group">
            {/* <EmployeesListItem name="Jhon C." salary={800}/>
            <EmployeesListItem name="Alex M." salary={3000}/>
            <EmployeesListItem name="Carl W." salary={5000}/> */}
            {elements}
        </ul>
    )
}

export default EmployeesList;