import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({data, onDelete, onToggleProp}) => {
    const elements = data.map(item => {
        // можно так же использовать индекс элемента если не прописано на бекенде вместо айди
        const {id, ...itemProps} = item;
        return (
            // <EmployeesListItem name={item.name} salary={item.salary}/>
            <EmployeesListItem key={id}
            {...itemProps}
            onDelete={() => onDelete(id)}
            onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}/>
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