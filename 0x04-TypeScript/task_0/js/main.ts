interface Student {
    firstName: string
    lastName: string
    age: number
    location: string
}

const student1: Student = {
    firstName: "hohn",
    lastName: "Joe",
    age: 20,
    location: "Yaounde"
}
const student2: Student = {
    firstName: "Jane",
    lastName: "Smith",
    age: 22,
    location: "London"
}

const studentsList: Student[] = [student1, student2]

const table: HTMLTableElement = document.createElement('table')
const headerRow: HTMLTableRowElement = document.createElement('tr')

const headers: string[] = ['First Name', 'Location']

headers.forEach((headerText: string) => {
    const th: HTMLTableCellElement = document.createElement('th')
    th.textContent = headerText
    headerRow.appendChild(th)
})

table.appendChild(headerRow)

studentsList.forEach((student: Student) => {
    const row: HTMLTableRowElement = document.createElement('tr')
    const firstNameCell: HTMLTableCellElement = document.createElement('td')
    firstNameCell.textContent = student.firstName
    const locationCell: HTMLTableCellElement = document.createElement('td')
    locationCell.textContent = student.location
    row.appendChild(firstNameCell)
    row.appendChild(locationCell)
    table.appendChild(row)
})

document.body.append(table)