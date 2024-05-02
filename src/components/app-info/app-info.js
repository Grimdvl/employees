import './app-info.css';

const AppInfo = ({employees, increased}) => {
    return (
        <div className="app-info">
            <h1>Employee management at Company N</h1>
            <h2>Total number of employees: {employees}</h2>
            <h2>They will receive a bonus: {increased}</h2>
        </div>
    )
}

export default AppInfo;