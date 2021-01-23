const john = {
	firstName: 'John',
	lastName: 'Williams',
	birthYear: 1996,
	job: 'student',
	friends: ['Mike', 'Jake', 'Peter'],
	getSummary() {
		return `${this.firstName} ${this.lastName} is ${this.calAge()} years old, and he has ${(this.calAge()>=18) ? 'a' : 'no'} driver's license`
    },
    printFriends() {
        this.names = "";
        for(let i = 0; i <this.friends.length-1;i++)
            this.names+=this.friends[i]+", ";
        this.names+="and "+ this.friends[this.friends.length-1]+".";
        return this.names;
    },
    calAge() {
        return 2021 - this.birthYear;
        // return this.age;
	}
}
// console.log(`${john.firstName} has ${john.friends.length} friends, and his best friends are called ${john.friends}`);
console.log(`${john.firstName} has ${john.friends.length} friends, and his best friends are called ${john.printFriends()}`);
console.log(john.getSummary());

function modalOpen(){
    document.getElementById("modal").style.display = "block";
}
document.getElementById("close").onclick = function() {
    document.getElementById("modal").style.display = "none";
}