INSERT INTO department (name)
VALUES  ("Sales"),
        ("Legal"),
        ("Engineering"),
        ("Finance");

INSERT INTO role (title, salary, department_id)
VALUES  ("Sales Lead", 125000, 1),
        ("Salesperson", 75000, 1),
        ("Legal Lead", 200000, 2),
        ("Lawyer", 150000, 2),
        ("Lead Enginner", 175000, 3),
        ("Software Engineer", 100000, 3),
        ("Head Accountant", 140000, 4),
        ("Accountant", 90000, 4);

INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUES  ("Bryan", "Alter", null, 1),
        ("John", "Bacetivus", null, 3),
        ("Steve", "Bour", null, 5),
        ("Jason", "Hurley", null, 7),
        ("Stephanie", "Schlott", 1, 2),
        ("Simon", "Muller", 2, 4),
        ("Jay", "Rzasa", 3, 6),
        ("Kristine", "Faust", 4, 8);