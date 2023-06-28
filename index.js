let employee = {
  name: "Tony Brian",
  streetAddress: "123 Highrise"
};

let employee = {
  name: "Tony Brian",
  streetAddress: "123 Highrise"
};

let updatedEmployee = updateEmployeeWithKeyAndValue(employee, "name", "Diana Elsie");
console.log(updatedEmployee);]


let employee = {
  name: "Tony Brian",
  streetAddress: "123 Highrise"
};

mutateEmployeeWithKeyAndValue(employee, "name", "Diana Elsie");
console.log(employee);


def deleteFromEmployeeByKey(key):
    # Assuming employees is a dictionary with keys as employee IDs
    # and values as employee information
    if key in employees:
        del employees[key]
        print(f"Employee with key {key} deleted successfully.")
    else:
        print(f"Employee with key {key} does not exist.")

employees = {
    "001": {"name": "Tony Brian", "position": "Engineer"},
    "002": {"name": "Diana Elsie", "position": "Doctor"},
    "003": {"name": "Terry Anne", "position": "Air Hostess"}
}


if key in employees:
        employee = employees[key]
        del employees[key]
        print(f"Employee with key {key} deleted successfully.")
        return employee
    else:
        print(f"Employee with key {key} does not exist.")
        return None

employees = {
    "001": {"name": "Tony Brian", "position": "Engineer"},
"002": {"name": "Diana Elsie", "position": "Doctor"},
"003": {"name": "Terry Anne", "position": "Air Hostess"}
}


