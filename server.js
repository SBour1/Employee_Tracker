const inquirer = require('inquirer');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;

const db = mysql.createConnection(
    {
        host: "localhost",
        port: PORT,
        user: "root",
        password: "",
        database: "employee_db"
    },
    console.log(`Connected to Employee Tracker Database on port ${PORT}`),
    init()
);

function init() {
    inquirer.prompt([
        {
            type: "list",
            message: "What would you list to do?",
            name: "slection",
            choices: [
                "View All Employees",
                "View All Employees by Role",
                "View All Employees by Department",
                "Update Employee",
                "Add Employee",
                "Add Role",
                "Add Department"
            ]
        }
    ])
};