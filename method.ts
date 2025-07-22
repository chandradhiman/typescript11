interface User {
    name: string;
    age: number;
}

function greetAndSortUsers(order: 'ascending' | 'descending'): void {
    const names: string[] = ["chandra", "papa", "shalu", "bittoo"];
    const ages: number[] = [30, 66, 40, 35];

    // Combine names and ages into User[]
    const users: User[] = names.map((name, index) => ({
        name,
        age: ages[index]
    }));

    // Sort based on order
    let sortedUsers: User[];
    if (order === 'ascending') {
        sortedUsers = users.slice().sort((a, b) => a.age - b.age);
    } else {
        sortedUsers = users.slice().sort((a, b) => b.age - a.age);
    }

    console.log(`Hello User 👋, here is your ${order} order result:`);
    console.log(sortedUsers);
}

// Example usage:

greetAndSortUsers('ascending');   // to get ascending
greetAndSortUsers('descending');  // to get descending
    