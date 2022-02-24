const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table');

const db = mysql.createConnection(
    {
        host: "127.0.0.1",
        port: 3306,
        user: "root",
        password: "",
        database: "employee_db"
    },
);

db.connect(function () {
    console.log(`Connected to Employee Tracker Database on port 3306`),
        init()
});

function init() {
    inquirer.prompt([
        {
            type: "list",
            message: "What would you like to do?",
            name: "selection",
            choices: [
                "View All Employees",
                "View All Roles",
                "View All Departments",
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

            case "View All Roles":
                viewRoles();
                break;

            case "View All Departments":
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
    db.connect(function (err) {
        if (err) throw err;
        db.query("SELECT employee.id, employee.first_name, employee.last_name, role.title, role.salary, department.name AS department, CONCAT (manager.first_name, ' ', manager.last_name) AS Manager FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id LEFT JOIN employee manager ON manager.id = employee.manager_id;",
            function (err, result) {
                if (err) throw err;
                console.table(result);
            });
    })
    init();
};

function viewRoles() {
    db.connect(function (err) {
        if (err) throw err;
        db.query("SELECT role.title, role.id, role.salary, department.name AS department FROM role LEFT JOIN department ON role.department_id = department.id;", 
        function (err, result) {
            if (err) throw err;
            console.table(result);
        });
    })
}

function viewDept() {
    db.connect(function (err) {
        if (err) throw err;
        db.query("SELECT department.name, department.id FROM department;", function (err, result) {
            if (err) throw err;
            console.table(result);
        });
    });
};

function updateEmp() {
    empArr = [];
    roleArr = [];
    db.connect(function (err) {
        if (err) throw err;
        db.query("SELECT employee.first_name, employee.last_name, employee.id FROM employee", function (err, result) {
            if (err) throw err;
            empArr.push(JSON.stringify(result));
        })
        db.query("SELECT role.name, role.id FROM role", function(err, result) {
            if (err) throw err;
            roleArr.push(JSON.stringify(result))
        })
    })
    inquirer.prompt([
        {
            type: "list",
            message: "Select Employee to update",
            name: "updatePick",
            choices: empArr
        },
        {
            type: "list",
            message: "Select the new role for this employee",
            name: "updateRole",
            choices: roleArr
        }
    ]).then(data => {
    db.connect(function (err) {
        if (err) throw err;
        db.query(`UPDATE employee SET role_id = ${data.updateRole} WHERE id = ${data.updatePick}`, function (err, result) {
            if (err) throw err;
            console.table(result);
        })
    });
})
}

function addEmp() {

}

function addRole() {

}

function addDept() {

}