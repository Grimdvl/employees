import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({data, onDelete}) => {

    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            // <EmployeesListItem name={item.name} salary={item.salary}/>
            <EmployeesListItem 
            key={id} 
            {...itemProps}
            onDelete={() => onDelete(id)}/>
        );
    });

    return (
        // <ul className="app-list list-group">
        //     <EmployeesListItem name={data[0].name} salary={data[0].salary}/>
        //     <EmployeesListItem name="Jhon C." salary={100}/>
        //     <EmployeesListItem name="Alex M." salary={2000}/>
        //     <EmployeesListItem name="Carl W." salary={30000}/>
        // </ul>
        <ul className="app-list list-group">
            {elements}
        </ul>
    );
}

export default EmployeesList;