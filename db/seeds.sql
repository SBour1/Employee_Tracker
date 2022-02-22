INSERT INTO department (name)
VALUES  ("Sales"),
        ("Legal"),
        ("Engineering"),
        ("Finance");

INSERT INTO role (title, salary, department_id)
VALUES  ("Salesperson", 75000, 1),
        ("Sales Lead", 125000, 1),
        ("Lawyer", 150000, 2),
        ("Legal Lead", 200000, 2),
        ("Software Enginner", 100000, 3),
        ("Lead Enginner", 175000, 3),
        ("Accountant", 90000, 4),
        ("Head Accountant", 140000, 4);

INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUES  ("Bryan", "Alter", null, 1),
        ("Stephanie", "Schlott", 1, 2),
        ("John", "Bacetivus", null, 3),
        ("Simon", "Muller", 2, 4),
        ("Steve", "Bour", null, 5),
        ("Jay", "Rzasa", 3, 6),
        ("Jason", "Hurley", null, 7),
        ("Kristine", "Faust", 4, 8);