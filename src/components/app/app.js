import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'Jhon C.', salary: 100, increase: false, id: 1},
                {name: 'Alex M.', salary: 2000, increase: true, id: 2},
                {name: 'Carl W.', salary: 30000, increase: false, id: 3},
            ],
            // maxId: 4
        }
        this.maxId = 4;
    }

    deleteItem = (id) => {
        // console.log(id);
        this.setState(({data}) => {
            //не очень удобный метод но рабочий
            // const index = data.findIndex(elem => elem.id === id);
            // const befor = data.slice(0, index);
            // const after = data.slice(index + 1);
            // const newArr = [...befor, ...after];
            // return { 
            //     data: newArr
            // }

            //Нельзя использовать это мутирует элемент тобишь изменяет его накорню это неправильно в реакте соответствноо нам нужно создавать копию нового элемента для того что бы не мутировать корень программы
            // data.splice(index, 1);

            return { 
                data: data.filter(item => item.id !== id)
            }
        });
    }
    // addEmployee = (name, salary) => {
    //     const newEmployee = {
    //         name,
    //         salary,
    //         increase: false,
    //         id: this.state.maxId
    //     };
    //     this.setState(prevState => ({
    //         data: [...prevState.data, newEmployee],
    //         maxId: prevState.maxId + 1
    //     }))
    // }
    addItem = (name, salary) => {
        const newItem = {
            name, 
            salary,
            increase: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    }

    render() {
        return (
            <div className="app">
                <AppInfo/>
                <div className='search-panel'>
                    <SearchPanel/>
                    <AppFilter/>
                </div>
    
                <EmployeesList 
                data={this.state.data}
                onDelete={this.deleteItem}/>
                <EmployeesAddForm
                onAdd={this.addItem}/>
            </div>
        );
    }
}

export default App;