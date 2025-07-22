import * as readline from 'readline';

interface User {
    name: string;
    age: number;
}

function greetAndSortUsers(order: 'ascending' | 'descending'): void {
    const names: string[] = ["chandra", "papa", "shalu", "bittoo"];
    const ages: number[] = [30, 66, 40, 35];

    const users: User[] = names.map((name, index) => ({
        name,
        age: ages[index]
    }));

    let sortedUsers: User[];
    if (order === 'ascending') {
        sortedUsers = users.slice().sort((a, b) => a.age - b.age);
    } else {
        sortedUsers = users.slice().sort((a, b) => b.age - a.age);
    }

    console.log(`\nHello User 👋, here is your ${order} order result:`);
    sortedUsers.forEach(user => {
        console.log(`Name: ${user.name}, Age: ${user.age}`);
    });
}

// Create readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Prompt user for input
rl.question('Enter sorting order ("ascending" or "descending"): ', (input) => {
    const order = input.trim().toLowerCase();
    if (order === 'ascending' || order === 'descending') {
        greetAndSortUsers(order);
    } else {
        console.log('Invalid input. Please enter "ascending" or "descending".');
    }
    rl.close();
});
