const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table');

const PORT = process.env.PORT || 3001;

const db = mysql.createConnection(
    {
        host: "localhost",
        port: PORT,
        user: "root",
        password: "Luckygadfly530!!",
        database: "employee_db"
    },
);

db.connect(function () {
    console.log(`Connected to Employee Tracker Database on port ${PORT}`),
        init()
});

function init() {
    inquirer.prompt([
        {
            type: "list",
            message: "What would you list to do?",
            name: "selection",
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
    ]).then(function (val) {
        switch (val.selection) {
            case "View All Employees":
                viewEmployees();
                break;

            case "View All Employees by Role":
                viewRoles();
                break;

            case "View All Employees by Department":
                viewDept();
                break;

            case "Update Employee":
                updateEmp();
                break;

            case "Add Employee":
                addEmp();
                break;

            case "Add Role":
                addRole();
                break;

            case "Add Department":
                addDept();
                break;
        }
    })
};

function viewEmployees() {
    db.query("SELECT employee.first_name, employee.last_name, role.title, role.salary, department.name, AS Manager FROM employee;",
    (res, req) => {
        console.table(res);
    });
}

function viewRoles() {
    db.query("SELECT employee.first_name, employee.last_name, role.title;", (res, req) => {
        console.table(res);
    });
}

function viewDept () {
    db.query("SELECT employee.first_name, employee.last_name, department.name;", (res, req) => {
        console.table(res);
    });
}